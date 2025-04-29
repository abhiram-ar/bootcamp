const Event = require("node:events");

const myEvent = new Event();

myEvent.on("test", (arg) => {
    console.log(`event argumet is ${arg}`);
});

myEvent.emit("test", ['hi']);
