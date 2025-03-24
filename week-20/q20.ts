/*
Write a program to print the following pattern using for loop
1
2	3
4	5	6
7	8	9	10
*/


let num = parseInt(prompt("Enter a number: ") as string)
let curr = 1
for (let i = 0; curr <= num; i++) {
    let row: number[] = []
    for (let j = 0; j < i; j++) {
        row.push(curr)
        curr++
    }
    console.log(row.join(" "))

}