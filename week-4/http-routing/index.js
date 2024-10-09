const http = require("node:http")
const fs = require("node:fs")




let server = http.createServer((req, res)=>{
   if(req.url === "/"){
    res.writeHead(200, {"Content-type": "text/plain"})
    res.end("root page")
   }
   else if(req.url === "/about"){
    res.writeHead(200, {"Content-type": "text/plain"})
    res.end("about page")
   }
   else if(req.url === "/api"){
    res.writeHead(200, {"Content-type": "application/json"})
    res.end(JSON.stringify({
        name:"abhiram",
        age:23
    }))
    }
    else{
        res.writeHead(404)
        res.end("invalid url")
    }
})



server.listen(3000, ()=>{
    console.log("the server is running on port 3000");
})

