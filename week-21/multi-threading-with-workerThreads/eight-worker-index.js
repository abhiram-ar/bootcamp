import Express from "express";
import { Worker, workerData } from "node:worker_threads";

const app = Express();
const THREAD_COUNT = 8;

function createThread() {
    return new Promise((resolve, resject) => {
        const worker = new Worker("./eight-worker.js", {
            workerData: { noOfThreads: THREAD_COUNT },
        });

        worker.on("message", (data) => resolve(data));
        worker.on("error", (error) => resject(error));
    });
}

app.get("/non-blocking", (req, res) => {
    res.status(200).send("Quick response");
});

app.get("/blocking", async (req, res) => {
    let workerPromises = [];
    for (let i = 0; i < THREAD_COUNT; i++) {
        workerPromises.push(createThread());
    }

    let workerResults = await Promise.all(workerPromises);
    let total = workerResults.reduce((sum, curr) => sum + curr, 0);

    res.status(200).send(`result is ${total}`);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
