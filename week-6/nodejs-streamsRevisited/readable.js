const { error } = require("node:console")
const fs = require("node:fs")
const path = require("node:path")


const inputFilePath = path.join(__dirname ,"input.txt")

const readStream = fs.createReadStream(inputFilePath ,{
    highWaterMark: 10,
    encoding: "utf-8"
})

readStream.on("data", (chunk)=>{
    console.log("recived a chunk");
    console.log(chunk)
})

readStream.on("end", ()=>{
    console.log(`finished reading the file`);
})

readStream.on("error", (err)=>{
    console.log(`an error occuere while reading`);
    console.log(error);
})