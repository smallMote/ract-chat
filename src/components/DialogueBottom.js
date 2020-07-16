import React, {Component} from 'react'
import {connect} from 'react-redux'
import './DialogueBottom.scss'

function mapStateToProps(state) {
  return {}
}

class DialogueBottom extends Component {
  render() {
    return (
      <div className="dialog-bottom">
        <input type="text"/>
        <span className="icon-btn">
          <i className="iconfont icon-smile"/>
        </span>
        <span className="icon-btn">
          <i className="iconfont icon-radius-plus"/>
        </span>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(DialogueBottom)
