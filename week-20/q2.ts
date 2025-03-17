// Accept two inputs from the user and output their sum.

import * as readline from "node:readline/promises";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const num1: number = parseInt(await r1.question("Enter no 1: "));
const num2: number = parseInt(await r1.question("Enter no 2: "));
console.log("Sum of two numbers is",num1 + num2);
