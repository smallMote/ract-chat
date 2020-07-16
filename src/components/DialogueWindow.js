import React, {Component} from 'react'
import {connect} from 'react-redux'
import DialogViewer from './DialogViewer'
import NavigationHead from './NavigationHead'
import DialogueBottom from './DialogueBottom'
import './DialogWindow.scss'

function mapStateToProps(state) {
  return {}
}

class DialogueWindow extends Component {
  state = {
    messageList: []
  }
  constructor(props) {
    super(props)
    const _this = this
    if (window.WebSocket) {
      const ws = new WebSocket('ws://localhost:10086')
      this.ws = ws
      ws.onopen = function(e){
        // console.log('连接服务器成功');
        ws.send('客户端连接服务器成功1');
      }

      ws.onerror = function(){
        console.log('连接出错')
      }

      ws.onmessage = function(e){
        const data = e.data // 获取到服务端发送来的数据
        _this.appendMessage({
          message: data,
          reverse: false,
          uuid: 1
        })
      }
    }
  }

  // 发送消息
  sendMessage = (message) => {
    this.ws.send(message)
    this.appendMessage({
      message, reverse: true
    })
  }
  // 添加消息
  appendMessage = (data) => {
    const messageList = [...this.state.messageList]
    messageList.push(data)
    console.log(messageList)
    this.setState({
      messageList
    })
  }
  render() {
    return (
      <div className='dialog-container'>
        <NavigationHead/>
        <DialogViewer
          messageList={this.state.messageList}
        />
        <DialogueBottom
          sendMessage={this.sendMessage}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(DialogueWindow)
