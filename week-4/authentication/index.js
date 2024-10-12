const express = require("express");
const { user: userData } = require("./userdata");
const { v4: uuid } = require("uuid");
const { getUser, setUser } = require("./auth");
const cookieParser = require("cookie-parser");

//config
const app = express();
app.set("view engine", "ejs");

//middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static("public"));

// Prevent caching
app.use((req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
});

//middlewar to retrive data from session store
app.use((req, res, next) => {
    const userUid = req.cookies.uid;
    const user = getUser(userUid);
    req.user = user;
    next();
});

//routes
app.get("/", (req, res) => {
    if (req.user) {
        return res.redirect("/home");
    }
    res.redirect("/login");
});

app.get("/login", (req, res) => {
    if (req.user) return res.redirect("/home");

    res.render("login", { error: "" });
});

app.post("/login", (req, res) => {
    let user = userData.find(
        (user) => user.name === req.body.username.toLowerCase()
    );

    if (!user || req.body.password !== user.password) {
        return res.render("login", { error: "Invalid Username or password" });
    }

    //if user is valid create a UID and add user to session
    const sessionID = uuid();
    setUser(sessionID, user);
    res.cookie("uid", sessionID);
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    if (req.user) {
        return res.render("home", { username: req.user.name });
    }
    res.redirect("login");
});

app.get("/signout", (req, res) => {
    res.clearCookie("uid");
    res.redirect("/login");
});

app.listen(3000, () => {
    console.log("console is listening on porrt 3000");
});
