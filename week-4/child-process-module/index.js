const {exec} = require("child_process")


exec("ls", (err, stdout, stderr)=>{
    if(err) throw err
    console.log(stdout ?? stderr)
})