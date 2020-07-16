import React, {Component} from 'react'
import {connect} from 'react-redux'

function mapStateToProps(state) {
  return {}
}

class Dialog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Dialog)
