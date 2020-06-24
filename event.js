const ourEvent = require('events')

class ourEventClass extends ourEvent {
    constructor(){
        super ()
        var server1 = 'This server is triggered'
        console.log (server1)
    }
}

const newEmitter = new ourEventClass()
newEmitter.on('event', () =>{
    console.log(this.server1)
})
newEmitter.emit('event') 

//when the event file is run, the entire ourEventClass class is triggered and the server1 is console.logged to terminal
