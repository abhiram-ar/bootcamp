//  Write a program to accept an array and display it on the console using functions

function getArray(arr: number[]): void {
    let size: number = parseInt(prompt("Enter the size of array:") as string)
    for (let i = 0; i < size; i++) {
        arr.push(parseInt(prompt(`Enter array element at index ${i + 1}: `) as string))
    }
}
function displayArray(array: number[]): void {
    console.log("Array elements are: ")
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

let arr: number[] = []
getArray(arr)
displayArray(arr)

