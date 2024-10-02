let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("p1"), 3000)
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("invalid p2"), 1000)
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("p3"), 2000)
})


Promise.race([p1, p2, p3])
.then((res)=>{
    console.log(res)
})
.catch(error => console.log(error))
.finally(()=> console.log("program completed"))

