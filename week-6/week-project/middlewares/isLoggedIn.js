const User = require("../models/User")

const isLoggedIn =  async( req, res, next)=>{
    if(req.session.userId){
        const user = await User.findById(req.session.userId)
        if(user && user.isAdmin){
            return res.redirect("/admin/dashboard")
        }
        else if(user && !user.isAdmin){
            return res.redirect("/home");
        }
        next()
    }
    next()
}


module.exports = isLoggedIn