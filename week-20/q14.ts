//  Write a program to add to two dimensional arrays

let arr1: number[][]
let arr2: number[][]
let sum: number[][]

let rows = parseInt(prompt("Enter no of rows: ") as string)
let cols = parseInt(prompt("Enter no of columns: ") as string)

arr1 = Array(rows).fill(null).map(() => Array(cols))
arr2 = Array(rows).fill(null).map(() => Array(cols))
sum = Array(rows).fill(null).map(() => Array(cols))

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        let input = parseInt(prompt(`Enter item for arr1 at row ${i + 1} and col ${j + 1}: `) as string)
        arr1[i][j] = input
    }
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        let input = parseInt(prompt(`Enter item for arr2 at row ${i + 1} and col ${j + 1}: `) as string)
        arr2[i][j] = input
    }
}



for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        sum[i][j] = arr1[i][j] + arr2[i][j]
    }
}

console.log("Sum of two array is: ")
for (let i = 0; i < rows; i++) {
    console.log(sum[i].join(" "))
}