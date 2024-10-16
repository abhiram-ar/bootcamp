const express = require("express");
const morgan = require("morgan");
const { query, validationResult, header } = require("express-validator");
const cookieParser = require("cookie-parser");
const session = require("express-session")

const app = express();

//middleware
app.use(express.json())
app.use(morgan("dev"));
app.use(cookieParser("randomHash"))
app.use(session({
    secret:"password",
    saveUninitialized:false,
    resave:false,
    cookie:{maxAge:60000}
}))

//routes
app.get("/", query("name").isNumeric(), (req, res) => {
    res.cookie("loggedIn", "true", { maxAge: 60000 * 10});
    let resutl = (validationResult(req));
    req.headers.cook
    console.log(req.session)
    console.log(req.session.id)
    req.session.visited = true

    res.status(200).send("welcome to my site");
});

app.post("/", (req, res) => {
    console.log("cookies : " + req.cookies.name);
    console.log("cookie in header: " + req.headers.cookie);

    console.log(req.session);
    console.log(req.session.id);

    if(req.cookies.loggedIn === "true")
        res.status(200).send("you are loggedIn");
    else
        res.status(404).send("you cannot login")
});

app.listen(3000, () => {
    console.log("The server is runnin on port 3000");
});
