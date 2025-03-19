// Write a program to interchange the values of two arrays.
// Program should accept an array from the user, swap the values of two arrays and display it on the console

const size = parseInt(prompt("Enter the size of arrays: ") as string)

const arr1: number[] = []
const arr2: number[] = []

for (let i = 0; i < size; i++) {
    arr1.push(parseInt(prompt("Enter the values of array 1: ") as string))
}
console.log(" ")

for (let i = 0; i < size; i++) {
    arr2.push(parseInt(prompt("Enter the values of array 2: ") as string))
}

let temp: number
for (let i = 0; i < size; i++) {
    temp = arr1[i]
    arr1[i] = arr2[i]
    arr2[i] = temp
}

console.log('arr1: ', arr1)
console.log('arr2: ', arr2)

