const http = require("node:http");
const fs = require("fs");

const sever = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    fs.createReadStream("file.txt").pipe(res);
});

sever.listen(3000, () => {
    console.log("server start listening on port 3000");
});
