const arr = ["a", "b", "c", "d", "e", "f"];


let n = 2

let newarr = [...arr.slice(0,n), ...arr.slice(n+1)]

console.log(newarr);