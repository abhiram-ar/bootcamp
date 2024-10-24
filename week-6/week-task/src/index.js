const express = require("express")
const dotenv = require("dotenv").config()
const dbconnect = require("./config/dbConnect")

dbconnect()

const app = express()

//middleware
app.use(express.json())


//rotues


//start server

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})




