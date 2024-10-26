const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("./../models/User");
const isLoggedIn = require("../middlewares/isLoggedIn");


const router = express.Router();

router.get("/signup", (req, res) => {
    res.render("auth/signup", { error: "" });
});

router.post("/signup", async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const isAdmin = role === "admin" ? true : false;
        const user = new User({
            username,
            email,
            password: hashedPassword,
            isAdmin,
        });
        await user.save();
        console.log("written to db");
        res.redirect("/login");
    } catch (error) {
        res.render("auth/signup", { error: "User or email already exist" });
    }
});

router.get("/login",isLoggedIn,  (req, res) => {
    res.render("auth/login", { error: "" });
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
    //redirect only if session is destroyed
    req.session.destroy((err) => {
        res.redirect("/login");
    });
});

module.exports = router;
