let arr = [1,2,3,4,5,10,6,7]
let newArr = arr.map(num => {
    if(num%2 === 0) return "even";
    else return "odd"
});

console.log(newArr);