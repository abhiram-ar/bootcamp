const zlib = require("node:zlib")

let data = "my name is abhiram"
zlib.gzip(data, (err, buffer)=>{
    if(err) throw err
    console.log(buffer.toString())
})