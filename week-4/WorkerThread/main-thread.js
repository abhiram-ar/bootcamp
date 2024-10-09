const http = require("node:http");
const { Worker } = require("node:worker_threads");

let server = http.createServer((req, res) => {
  console.log(`req handled by ${process.pid}`);
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("root page");
  } else if (req.url === "/fast") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("fast page");
  } else if (req.url === "/slow") {
    const worker = new Worker("./worker-thread.js");
    worker.on("message", (j)=>{
        res.writeHead(200, { "Content-type": "application/json" });
        res.end("slow page");
    })
    
  } else {
    res.writeHead(404);
    res.end("invalid url");
  }
});

server.listen(3000, () => {
  console.log("the server is running on port 3000");
});
