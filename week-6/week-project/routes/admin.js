const express = require("express");
const User = require("../models/User");
const { isAdmin } = require("./../middlewares/auth");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.get("/admin/login", (req, res) => {
    res.render("/login");
});

router.get("/admin/dashboard", isAdmin, async (req, res) => {
    const users = await User.find({ isAdmin: false });
    res.render("admin/dashboard", { users });
});

router.get("/admin/users/search", isAdmin, async (req, res) => {
    const { query } = req.query;
    const users = await User.find({
        $or: [
            { username: new RegExp(query, "i") },
            { email: new RegExp(query, "i") },
        ],
        isAdmin: false,
    });
    res.render("admin/dashboardSearch", { users, query });
});

router.post("/admin/users/create", isAdmin, async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.redirect("/admin/dashboard");
    } catch (error) {
        res.redirect("/admin/dashboard");
    }
});

router.get("/admin/users/edit/:id", isAdmin, async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render("admin/edit", { user });
});

router.post("/admin/users/edit/:id", isAdmin, async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        email: req.body.email,
    });
    res.redirect("/admin/dashboard");
});

router.post("/admin/users/delete/:id", isAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect("/admin/dashboard");
    } catch (error) {
        res.status(500).json({ sucess: false });
    }
});
module.exports = router;
