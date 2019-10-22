const items = require('./items');
const abilites = require('./abilities');

class Islander{
            
            
    item=items[Math.floor(Math.random()*items.length)]
   ability=abilites[Math.floor(Math.random()*abilites.length)]



}

module.exports= Islander;