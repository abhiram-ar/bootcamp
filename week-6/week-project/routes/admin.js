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

router.get("/admin/users/search", isAdmin, (req, res) => {
    const { query } = req.query;
    const users = User.find({
        $or: [
            { username: new RegExp(query, "i") },
            { email: new RegExp(query, "i") },
        ],
        isAdmin: false,
    });
    res.render("admin/dashboard", { users });
});

router.post("/admin/users", isAdmin, async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.redirect("admin/dashboard");
    } catch (error) {
        res.redirect("admin/dashboard");
    }
});

router.delete("admin/users/:id", isAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ sucess: true });
    } catch (error) {
        res.status(500).json({ sucess: false });
    }
});
module.exports = router;
