type callback = (arr: number) => boolean


function myFilter(arr: number[], cb: callback) {
    let res = arr.filter(cb)
    console.log("result", res)
}

function callback(num: number): boolean {
    let sum = 0
    num.toString().split("").forEach(char => sum += parseInt(char))
    return sum % 2 === 0
}

myFilter([11, 22, 113, 14], callback)