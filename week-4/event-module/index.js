const eventEmitter = require("node:events")

const emitter = new eventEmitter()

emitter.on("rEvent", ()=>{
    console.log("I am the called aliyaa");
})

emitter.emit("rEvent")