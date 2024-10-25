const { Router } = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const User = require("../models/User");

const router = Router();

router.get("/home", isAuthenticated, async (req, res) => {
    const user = await User.findById(req.session.userId);
    res.render("home", { user });
});

module.exports = router;
