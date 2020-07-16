import React, {Component} from 'react'
import {connect} from 'react-redux'
import './DialogueBottom.scss'

function mapStateToProps(state) {
  return {}
}

class DialogueBottom extends Component {
  state = {
    message: ''
  }
  // 发送消息
  sendMessage = () => {
    const currentMessage = this.$input.value
    if (!currentMessage) return
    this.props.sendMessage(currentMessage)
    this.setState({ message: '' })
  }
  render() {
    return (
      <div className="dialog-bottom">
        <input
          ref={(e) => this.$input = e}
          value={this.state.message}
          onChange={(e) => {
            this.setState({ message: this.$input.value })
          }}
          onKeyDown={(e) => e.keyCode === 13 && this.sendMessage()}
          type="text"
        />
        <span className="icon-btn">
          <i className="iconfont icon-radius-plus"/>
        </span>
        <button onClick={this.sendMessage} className="send-btn">
          发送
        </button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(DialogueBottom)
