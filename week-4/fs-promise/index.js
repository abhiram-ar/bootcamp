 const fs = require("node:fs/promises")

 fs.readFile('file.txt', "utf-8")
    .then((data)=>console.log(data))
    .catch(error => console.log(error))

async function read(){
    try{
        let data = await fs.readFile('file.txt', "utf-8");
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

read()