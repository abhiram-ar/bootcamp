const express = require("express");
const app = express()


app.get("/", (req,res)=>{
    res.sendFile("./views/index.html")
})

app.listen(3000, ()=>{
    console.log("server is listening of port 3000");
})