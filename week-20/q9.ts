/*
write a program to print the following pattern
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

for (let i = 1; i <= 5; i++) {
    let res: number[] = []
    for (let j = 1; j <= i; j++) {
        res.push(j)
    }
    console.log(res.join(" "))
    res = []
}