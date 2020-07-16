import React, {Component} from 'react'
import {connect} from 'react-redux'
import './DialogMessage.scss'

function mapStateToProps(state) {
  return {}
}

class DialogMessage extends Component {
  render() {
    return (
      <div className={`dialog-message ${this.props.reverse ? 'reverse' : ''}`}>
        { this.props.avatarUrl ?
          <img className="avatar" src={this.props.avatarUrl} alt="avatar"/> :
          <div className="avatar block">U</div>
        }
        <div className="message">{ this.props.message || 'No any message' }</div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(DialogMessage)
