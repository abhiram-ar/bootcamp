let timer = setInterval(()=>{
    console.log("timer")
}, 1000 )

setTimeout(()=>{
    clearInterval(timer)
}, 10 *1000)