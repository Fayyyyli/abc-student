const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'))

//general event listener for any socket connection
io.on('connection', (socket) => {
    //for individual connection
  console.log('a user connected', socket.id);

  // socket.on('avatar', (msg) => {
  //   io.emit("avatarNum", msg);
  //   console.log(msg);
  // });

  socket.on("message",(data)=>{
    console.log(data);
    io.emit("incoming",data);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
});
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});