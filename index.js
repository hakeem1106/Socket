const express = require('express'),
          app = express(),
          port = 3000,
          port2 = 3001
          io = require('socket.io')(port2);

//Setting up server
app.get('/', (req, res)=>res.sendFile(__dirname +'/index.html'));

io.on('connection', socket=>{
 socket.emit('chat-message', 'connected')
});

app.listen(port,()=> console.log(`listening on port ${port}`))