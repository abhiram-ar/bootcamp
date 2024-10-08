const http = require("node:http")

let server = http.createServer((req, res)=>{
    res.writeHead(200);
    res.end("hello from server");
})

server.listen(3000, ()=>{
    console.log("the server is running on port 3000");
})