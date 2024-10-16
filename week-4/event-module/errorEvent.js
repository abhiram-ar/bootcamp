const eventEmitter = require("node:events")

const emitter = new eventEmitter()

emitter.on("error", (err)=>{
    console.log("I am the called aliyaa" + err);
})

emitter.emit("error", new Error("eda"))