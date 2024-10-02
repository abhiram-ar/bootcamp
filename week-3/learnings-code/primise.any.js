let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("p1"), 3000)
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("invalid p2"), 1000)
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("p3"), 2000)
})


Promise.any([p1, p2, p3])
.then((res)=>{
    console.log(res)
})
.catch(error => console.error(error))
.finally(()=> console.log("program completed"))

