const User = require("../models/User")

const isAuthenticated  = (req, res, next) =>{
    if(req.session.userId){
        return next()
    }
    res.redirect("/login")
}

const isAdmin = (req, res, next)=>{
    if(req.session.userId){
        const user = User.findById(req.session.userId);
        if(user &&  user.isAdmin){
            return next()
        }
    }
    res.redirect("/login")
}

module.exports = {
    isAuthenticated,
    isAdmin
}