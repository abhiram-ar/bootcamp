import { parentPort, workerData } from "node:worker_threads";

let counter = 0;
for (let i = 0; i < 20_000_000_000 / workerData.noOfThreads; i++) {
    counter++;
}

parentPort?.postMessage(counter);
