const express = require('express'),
    path= require('path'),
          app = express(),
          port = process.env.PORT || 3000,
          port2 = process.env.PORT ||5000,
          server = require('http').createServer(app),
          io = require('socket.io')(server),
          pathName = path.join(__dirname, '/../public');


          
//Setting up server
app.use(express.static(pathName));


io.on('connection', (socket)=>{
console.log('new user')
 socket.emit('chat-message', 'connected')
});

app.listen(port,()=>{
    console.log(`webpage loaded on ${port}`)
})

server.listen(port2, ()=>{
    console.log("server is on ")
});





