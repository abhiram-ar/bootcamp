const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("./../models/User");

const router = express.Router();

router.get("/signup", (req, res) => {
    res.render("auth/signup", {error: ""});
});

router.post("/signup", async (req, res) => {
    try {
        console.log("in post singup route");
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword,
        });
        console.log(`new user obj` + user);
        await user.save();
        console.log("written to db");
        res.redirect("/login");
    } catch (error) {
        res.render("auth/signup", { error: "User or email alrready exist" });
    }
});

router.get("/login", (req, res) => {
    res.render("auth/login", {error : ""});
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.render("auth/login", { error: "Invalid credentials" });
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.render("auth/login", { error: "Incorrect password" });
        }
        req.session.userId = user._id;
        if (user.isAdmin) {
            res.redirect("/admin/dashboard");
        } else {
            res.redirect("/home");
        }
    } catch (error) {
        res.render("auth/login", { error: "An error occured" });
    }
});

router.get("/logout", (req, res) => {
    res.session.destroy();
    res.redirect("/login");
});

module.exports = router;
