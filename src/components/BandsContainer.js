import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands(){
    return this.props.bands.map(band => <Band band={band} deleteBand={this.props.deleteBand} key={band.id}/>)
  }

  render() {
    return (
      <div>
        <h1>Add a Band:</h1>
        <BandInput addBand={this.props.addBand}/>
        <h1>All the bands:</h1>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
