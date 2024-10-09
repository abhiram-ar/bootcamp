const cluster = require("node:cluster");

if (cluster.isMaster) {
  console.log(`master process ${process.pid} is ruinnng`);
  cluster.fork();
  //cluster.fork();
} else {
  console.log(`worker ${process.pid} started`);
  const http = require("node:http");

  let server = http.createServer((req, res) => {
    console.log(`req handled by ${process.pid}`)
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("root page");
    } else if (req.url === "/fast") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("fast page");
    } else if (req.url === "/slow") {
      res.writeHead(200, { "Content-type": "application/json" });
      for(let i=0; i<10000000000;i++){} //simulate CPU load
      res.end("slow page")
    } else {
      res.writeHead(404);
      res.end("invalid url");
    }
  });

  server.listen(3000, () => {
    console.log("the server is running on port 3000");
  });
}
