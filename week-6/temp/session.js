const express = require('express')
const mongoose = require("mongoose")
const zod = require("zod")
const session = require("express-session")

//session store
const MongoStore = require('connect-mongo')



const app = express()


const dbSting = `mongodb://localhost:27017/test`;
const dbOptions = {
    useNewUrlParser : true,
    useUnifiedTopology: true
}


const connection = mongoose.createConnection(dbSting, dbOptions)


const sessionStore = new MongoStore({
    mongooseConnection: connection,
    collection: "sessions"
});

app.use(session({
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    store : sessionStore,
    cookie: {
        maxAge : 60000
    }
}))


app.listen(3000, ()=>{
    console.log(`server is listening on port 3000`);
})
