let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("p1"), 3000)
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("invalid p2"), 1000)
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("p3"), 2000)
})


Promise.allSettled([p1, p2, p3])
.then((res)=>{
    console.log(res)
})
.catch(error => console.log(error))
.finally(()=> console.log("program completed"))

