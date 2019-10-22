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
    console.log('new user');
    socket.emit('new chat', 'welcome');
    const islander = require('../public/players/islander');
    const Player = new islander;
    console.log(Player)

});

app.listen(port, ()=>{
    console.log(`App server started on`)
});

server.listen(port2, ()=>{
    console.log("server is on ")
});





