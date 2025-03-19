// Write a program to sort an array in descending order

const size = parseInt(prompt("Enter the size of arrays: ") as string)

const arr: number[] = []

for (let i = 0; i < size; i++) {
    arr.push(parseInt(prompt("Enter the values of array 1: ") as string))
}

arr.sort((a, b) => a - b)

console.log("sorted array: ", arr)
