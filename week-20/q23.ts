function multiplyAdjacentValues(arr: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] * arr[i + 1]);
    }

    return result;
}


let size = parseInt(prompt("Enter the size of the array: ") as string)
const inputArray: number[] = []
for (let i = 0; i < size; i++) {
    inputArray.push(parseInt(prompt(`Enter ${i + 1}th element:`) as string))
}

const outputArray: number[] = multiplyAdjacentValues(inputArray);

console.log("Input Array:", inputArray);
console.log("Output Array (Multiplication of Adjacent Values):", outputArray);
