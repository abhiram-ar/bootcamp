const http = require("node:http")

let server = http.createServer((req, res)=>{
    res.writeHead(200);
    res.end("hello from server");
})
//this callback is called when the server recives a request and a request event is emited

server.listen(3000, ()=>{
    console.log("the server is running on port 3000");
})
//the callbacks is called when the servers is up and running