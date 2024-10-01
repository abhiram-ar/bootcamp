let arr = ["abhiram", "arr", "suku", "drisya"];
let res = arr.filter(str => str.length < 5).map(str => str.charAt(0).toUpperCase() + str.slice(1))
console.log(res);