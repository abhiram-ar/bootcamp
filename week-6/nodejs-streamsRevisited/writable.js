const { error } = require("node:console");
const fs = require("node:fs");
const path = require("node:path");

const inputFilePath = path.join(__dirname, "input.txt");

const readStream = fs.createReadStream(inputFilePath, {
    highWaterMark: 100,
});

const outputFilePath = path.join(__dirname, "output.txt")
const writeStream = fs.createWriteStream(outputFilePath)

writeStream.on("finish", ()=>{
    console.log(`data has been writtens`);
})


readStream.on("data", (chunk) => {
    console.log("recived a chunk");
    writeStream.write(chunk)
});

readStream.pipe(writeStream)

