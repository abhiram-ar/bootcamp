const User = require("../models/User");

const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.redirect("/login");
};

const isAdmin = async (req, res, next) => {
    if (req.session.userId) {
        const user = await User.findById(req.session.userId);
        console.log(`user data` + user);
        if (user && user.isAdmin) {
            return next();
        }
    }

    res.redirect("/login");
};

module.exports = {
    isAuthenticated,
    isAdmin,
};
