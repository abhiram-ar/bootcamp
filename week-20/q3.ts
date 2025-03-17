// Write a program to find the simple interest.
// Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

import readline from "node:readline/promises";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const p: number = parseInt(await r1.question("Enter principal amount: "));
const r: number = parseInt(await r1.question("Enter rate of interest: "));
const n: number = parseInt(await r1.question("Enter the number of years: "));

const simepleInterest: number = (p * r * n) / 100;
console.log("Simple interest is: ", simepleInterest);
