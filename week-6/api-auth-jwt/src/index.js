const express = require("express")
const dotenv = require("dotenv").config()
const dbconnect = require("./config/dbConnect")
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRouters")

dbconnect()

const app = express()

//middleware
app.use(express.json())



//rotues
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.get("/", (req, res)=> {
    res.status(404).json({message: "Invalid rotue"})
})

//global catches


//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})




