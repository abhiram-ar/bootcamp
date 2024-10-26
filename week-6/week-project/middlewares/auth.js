const User = require("../models/User");

const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.redirect("/login");
};

const isAdmin = async (req, res, next) => {
    
    console.log(`in is admin middleware`);
    if (req.session.userId) {
        const user = await User.findById(req.session.userId);
        console.log(`user data` + user);
        if (user && user.isAdmin) {
            return next();
        }
    }
    console.log("redrecting");
    res.redirect("/login");
};

module.exports = {
    isAuthenticated,
    isAdmin,
};
