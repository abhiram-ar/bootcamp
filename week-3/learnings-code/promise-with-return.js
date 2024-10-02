let p1 = new Promise((resolve, reject)=>{
    resolve("p1 completed")
});

let a = p1
.then(res => {
    console.log(res);
    return 1
})
.then(res => console.log(res))
.catch(res => console.log(res))
.finally(res => res)
