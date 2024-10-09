const fs = require('fs');


fs.readFile(__filename, ()=>{
    console.log("read complete");
})

process.nextTick(()=>console.log("nextTick"))
Promise.resolve().then(()=>console.log("promise"))


 setTimeout(()=>{console.log("timer")}, 0)
 setImmediate(()=> console.log("immediate"))


 for(let i=0; i<1000000; i++){}