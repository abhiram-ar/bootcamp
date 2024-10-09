const eventEmitter = require("node:events")

const emitter = new eventEmitter()

emitter.on("Event", ()=>{
    console.log("I am the called aliyaa");
})

emitter.emit("eror", new Error("eda"))