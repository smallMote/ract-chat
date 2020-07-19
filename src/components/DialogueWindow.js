import React, {Component} from 'react'
import {connect} from 'react-redux'
import DialogViewer from './DialogViewer'
import NavigationHead from './NavigationHead'
import DialogueBottom from './DialogueBottom'
import './DialogWindow.scss'
import {getSearchParams} from "@/utils"

function mapStateToProps(state) {
  return {}
}

class DialogueWindow extends Component {
  state = {
    target: {
      uuid: null,
      nickName: null
    },
    messageList: []
  }
  constructor(props) {
    super(props)
    const _this = this
    const { search } = this.props.location
    if (window.WebSocket) {
      const ws = new WebSocket('ws://localhost:10086')
      this.ws = ws
      ws.onopen = function(e){
        // console.log('连接服务器成功', e);
        ws.send(JSON.stringify({
          uuid: 1,
          target: getSearchParams(search),
          message: '客户端连接服务器成功'
        }))
      }

      ws.onerror = function(){
        console.log('连接出错')
      }

      ws.onmessage = function(e){
        let data = e.data // 获取到服务端发送来的数据
        data = JSON.parse(data)
        // console.log(data)
        data.data.forEach(item => {
          _this.appendMessage({
            message: item.message,
            reverse: true,
            uuid: item.target.uuid
          })
        })
      }
    }
  }
  UNSAFE_componentWillMount() {
    const { search } = this.props.location
    this.setState({
      target: getSearchParams(search)
    })
  }

  // 发送消息
  sendMessage = (message) => {
    const sendData = JSON.stringify({
      uuid: 1, // 当前用户的uuid
      target: this.state.target,
      message
    })
    console.log(sendData)
    this.ws.send(sendData)
    this.appendMessage({
      message, reverse: true
    })
  }
  // 添加消息
  appendMessage = (data) => {
    const messageList = [...this.state.messageList]
    messageList.push(data)
    this.setState({
      messageList
    })
  }
  render() {
    return (
      <div className='dialog-container'>
        <NavigationHead
          nickName={this.state.target.nickName}
        />
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
