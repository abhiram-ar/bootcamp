const fs = require("node:fs")

const readStream = fs.createReadStream("./file1.txt", {encoding:"utf-8",highWaterMark:2})

readStream.on("data", (chunk)=>{
    console.log(chunk);
})