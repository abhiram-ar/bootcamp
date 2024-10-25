const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");

let app = express();

mongoose.connect(
    "mongodb+srv://abhiram:mkNyPuIilWEX9g6B@cluster0.s3euj.mongodb.net/ansontut?retryWrites=true&w=majority&appName=Cluster0"
).then(()=> {
    console.log(`connected to db`);
}).catch(error =>{
    console.log("error connecting to db");
    console.log(error);
})

app.use(express.json());
app.use(cookieParser("hello workd"));
app.use(
    session({
        secret: "abhiram",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60 * 60 * 1000, //1hr
        },
    })
);

app.listen(3000, () => {
    console.log(`server is listening of port 3000`);
});
