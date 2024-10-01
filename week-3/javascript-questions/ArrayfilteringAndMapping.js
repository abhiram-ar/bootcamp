let num = [1,3,4,5,6,7,8]
let filtered = num.filter(num => num%2===0 )
console.log(filtered);
let filterDouble = filtered.map(num => num * 2)

console.log(filtered.concat(filterDouble))