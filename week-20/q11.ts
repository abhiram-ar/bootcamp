//  Write a program to find the number of even numbers in an array

const size = parseInt(prompt("Enter the size of arrays: ") as string)

const arr: number[] = []

for (let i = 0; i < size; i++) {
    arr.push(parseInt(prompt("Enter the values of array 1: ") as string))
}

let evenCount: number = 0

for(let i = 0 ; i< size; i++){
    if(arr[i] % 2=== 0){
        evenCount++
    }
}

console.log("numebr of even numbers in given array is: ", evenCount)
