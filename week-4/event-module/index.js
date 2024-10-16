// const eventEmitter = require("node:events")

// const emitter = new eventEmitter()

// emitter.on("rEvent", ()=>{
//     console.log("I am the called aliyaa");
// })

// emitter.emit("rEvent")





const eventEmitter  = require("node:events")

const emitter = new eventEmitter()

emitter.on("greet", (name)=>{
    console.log(`hello, ${name}`);
})

emitter.emit("greet", "abhiram")