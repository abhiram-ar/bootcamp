// Write a program to find the sum of all the odd numbers for a given limit

const num: number = parseInt(prompt("Enter the limit") as string)

let sum: number = 0
for (let i = 1; i < num; i += 2) {
    sum += i
}

console.log(`Sum of odd numebrs is ${sum}`)

