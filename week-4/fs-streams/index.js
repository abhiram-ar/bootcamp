const fs = require("node:fs");

let readStream = fs.createReadStream("./file1.txt", {
    encoding: "utf-8",
    highWaterMark:2
})
//default highwatermark is 64*1024 byte

let writeStream = fs.createWriteStream('./file2.txt')

readStream.pipe(writeStream)

// readStream.on('data', (data)=>{
//     console.log(data);
//     writeStream.write(data)
// })