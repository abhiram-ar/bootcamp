const http = require("node:http")
const fs = require("node:fs")

let data = {
    name : "abhiram",
    age:23,
}

let templateHTML = fs.readFileSync(__dirname + "/template.html", "utf-8")



let server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    //fs.createReadStream(__dirname + "/template.html").pipe(res)
    let html = templateHTML.replace('{{name}}', "abhiram")
    console.log("requested")
    res.end(html);
})
//this callback is called when the server recives a request and a request event is emited



server.listen(3000, ()=>{
    console.log("the server is running on port 3000");
})
//the callbacks is called when the servers is up and running

