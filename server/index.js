const websocket = require('nodejs-websocket')

const port = 10086
// 创建服务器
const server = websocket.createServer({}, function (conn) {
  conn.on('text', function (str) { // 链接监听事件
    console.log('接收到消息：', str)
    conn.sendText(str) // 发送消息
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
