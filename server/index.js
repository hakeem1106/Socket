const express = require('express'),
    path= require('path'),
          app = express(),
          port = process.env.PORT || 3000,
          port2 = process.env.PORT ||5000,
          server = require('http').Server(app),
          io = require('socket.io')(server),
          pathName = path.join(__dirname, '/../public');


          
//Setting up server
app.use(express.static(pathName));

io.on('connection', socket=>{
    const islander = require('../public/players/islander');
    const Player = new islander;
    console.log('new user');
    console.log(Player);

    socket.emit('new player', `Welcome new Islander. You have washed up on shore with ${Player.item.name}\n and with the ability to ${Player.ability.name}.`);
    
    
    socket.on('chat-message', FormData =>{
        console.log(FormData)
        socket.broadcast.emit('chat-message', FormData)
    })

});


app.listen(port, ()=>{
    console.log(`App server started on`);
});

server.listen(port2, ()=>{
    console.log("server is on ");

});





