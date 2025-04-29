const fs = require("fs");

const readStream = fs.createReadStream("file.txt", { highWaterMark: 2 });

const writeStream = fs.createWriteStream("file3.txt");

readStream.on("data", (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
});
