const EventEmitter = require("events")

const emitter = new EventEmitter()


emitter.on("greet", ()=>{
    console.log("hello event has been handles");
})


emitter.emit("greet")