Promise.resolve().then(() => console.log("Hello promise 1"));
process.nextTick(() => console.log("hello from next tick 1"));

setTimeout(() => {
    console.log("timer 1");
    Promise.resolve().then(() => console.log("Hello promise 2"));
    Promise.resolve().then(() => console.log("Hello promise 3"));
}, 0);
setTimeout(() => console.log("timer 2"), 0);
setTimeout(() => console.log("timer 3"), 0);
setTimeout(() => console.log("timer 4"), 0);

let count = 0;
for (let index = 0; index < 1_000_000_000; index++) {
    count++;
}
