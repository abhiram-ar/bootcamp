const http = require("node:http")

const server = http.createServer((req, res)=>{
    res.setHeader(200, "content-type = text/HTML")
    res.end("response body")
})

server.listen(3000, ()=>{
    console.log(`server is listening on port 3000`);
})

