import React, {Component} from 'react'
import {connect} from 'react-redux'
import './NavigationHead.scss'

function mapStateToProps(state) {
  return {}
}

class NavigationHead extends Component {
  render() {
    return (
      <div className="navigation-head">
        <span className="btn back">返回</span>
        <span className="username">{ this.props.nickName }</span>
        <span className="more">更多</span>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(NavigationHead)
