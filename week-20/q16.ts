// . Write a program to check whether a given number is prime or not

function isPrime(num: number): boolean {
    if (num === 0 || num === 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    for (let i = 3; i <= Math.ceil(num / 2); i++) {
        if (num % i === 0) return false
    }
    return true

}

const num = parseInt(prompt("Enter a number: ") as string)

console.log(`${num} is ${isPrime(num) ? "Prime" : "Not prime"} `)


