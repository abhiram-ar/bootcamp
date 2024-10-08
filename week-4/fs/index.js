const fs = require("node:fs")

let data = fs.readFileSync("./file.txt")
console.log(data)
//output : <Buffer 68 65 6c 6c 6f 20 74 68 65 72 65>
//read the file sysnchonously
//we get the raw binary represetation


let dataDecoded = fs.readFileSync("./file.txt", "utf-8")
console.log(dataDecoded)
//output hello there
//since we pass the encoding method, it encoded the binary back to its character form


let dataAsync = fs.readFile("./file.txt","utf-8", (error, data)=>{
    if(error){
        console.log(error)
        return
    }
    else{
        console.log(data);
    }
})
// output : <Buffer 68 65 6c 6c 6f 20 74 68 65 72 65>
// here we are reading the file asynchronously
// use are using a error first callback

fs.writeFileSync("output.txt",  "this file is created and writtend - ")
//if the file does not exist it create a file and override the file content


fs.writeFile("outputasyc.txt", "this file is craetedd and written",(error)=>{
    if(error) console.log(error);
    else console.log("file written sucessful");
} )


fs.writeFile("outputasyc.txt", "  this file is appened and written", {flag: "a"}, (error)=>{
    if(error) console.log(error);
    else console.log("file written sucessful");
} )
//use a flag to append tot he file