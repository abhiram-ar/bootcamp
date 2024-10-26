const express = require("express")
const fs = require("node:fs")

const data = fs.readFileSync("./text.txt", "utf-8")

const app = express()

app.use("*", (req, res)=>{
    if(req.method === "GET"){
        res.status(403).send(" cannot get")
    }
})



app.get("/", (req, res)=>{
    res.status(200).send(data)
})


app.listen(3000, ()=>{
    console.log("server is listening on port 300");
})