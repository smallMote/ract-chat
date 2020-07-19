const websocket = require('nodejs-websocket')

const port = 10086
const dataBase = [
  {
    uuid: 1,
    dialogs: [
      {
        target: {
          uuid: 2,
          nickName: 'Anna'
        },
        message: 'Hello!'
      }
    ]
  },
  {
    uuid: 2,
    dialogs: [
      {
        target: {
          uuid: 1,
          nickName: 'Larry'
        },
        message: 'Hi!'
      }
    ]
  }
]
// 创建服务器
const server = websocket.createServer({}, function (conn) {
  conn.on('text', function (data) { // 链接监听事件
    // console.log('接收到消息：', data)
    const { uuid, target, message } = JSON.parse(data)
    // conn.sendText(str) // 发送消息
    // 找到当前发送消息的用户
    const sendUserIndex = dataBase.findIndex((item) => item.uuid === uuid)
    // 添加对话信息
    dataBase[sendUserIndex].dialogs.push({
      target,
      message
    })
    // console.log('dataBase', JSON.stringify(dataBase[sendUserIndex]))
    // 发送关于当前对话对象的所有消息
    conn.sendText(JSON.stringify({
      data: dataBase[sendUserIndex].dialogs.filter(item => Number(item.target.uuid) === Number(target.uuid))
    }))
  })

  conn.on('close', function (code, reason) {
    console.log('关闭连接', code, reason)
  })

  // 错误监听
  conn.on('error', function (code, reason) {
    console.log('服务器错误', code, reason)
  })
})

server.listen(port)

console.log(`服务器已启动，http://localhost:${port}`)

// https://blog.csdn.net/zhangge3663/article/details/89082297
