const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading index.html");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(content);
            }
        });
    }
});

server.listen(8000, () =>
    console.log("Client server running on http://localhost:8080")
);
