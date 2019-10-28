require('dotenv').config()
const express = require('express'),
          path= require('path'),
          app = express(),
          port = process.env.PORT || 3000,
          port2 = process.env.PORT2 || 5000,
          port3 = process.env.PORT3 || 3001,
          server = require('http').Server(app),
          io = require('socket.io')(server),
          mongoose = require('mongoose'),
          bodyParser = require('body-parser'),  
          pathName = path.join(__dirname, '/../public'),
          db = mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true}),
          router = express.Router();

          
//Setting up server
app.use(express.static(pathName));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)
app.get('*', (req,res)=>{
    return (req,res)
})

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


app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`App server started on`);
});


server.listen(port2, (err)=>{
    if(err) throw err;
    console.log("server is on ");

});





