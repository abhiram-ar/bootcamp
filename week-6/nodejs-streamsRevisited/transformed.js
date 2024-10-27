const fs = require("node:fs");
const path = require("node:path");
const { Transform } = require("stream");

const inputFilePath = path.join(__dirname, "input.txt");

const readStream = fs.createReadStream(inputFilePath, {
    highWaterMark: 100,
});

//Creating a new transform stream
// note : transform stream is actually a class extension of duplex
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback() //singnal the a single chunk process is completed
    },
});

const transformedOutputFilePath = path.join(__dirname, "transformedOutput.txt");
const writeStream = fs.createWriteStream(transformedOutputFilePath);


readStream.pipe(upperCaseTransform).pipe(writeStream)