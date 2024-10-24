const express = require('express')
const z = require("zod ")

const app = express()


app.listen(3000, ()=>{
    console.log(`server is listening on port 3000`);
})
