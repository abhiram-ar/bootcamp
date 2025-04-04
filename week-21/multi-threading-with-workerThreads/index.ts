import Express from "express";
import { Worker } from "node:worker_threads";

const app = Express();

app.get("/non-blocking", (req, res) => {
    res.status(200).send("Quick response");
});

app.get("/blocking", (req, res) => {
    const worker = new Worker("./worker.js");
    worker.on("message", (data) => res.status(200).send(`result is ${data}`));
    worker.on("error", (error) => res.status(500).send(error));
});

app.listen(3000, () => console.log("Server listening on port 3000"));
