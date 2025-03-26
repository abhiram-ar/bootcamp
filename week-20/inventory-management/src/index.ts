import express from 'express'

let app = express()

app.get('/', (req, res)=> {
    res.json({messge: "hi"})
})


let promise = new Promise((res)=> {
    res("hello")
})



app.listen(3000, ()=> {
    console.log("Server listening on port 3000")
})