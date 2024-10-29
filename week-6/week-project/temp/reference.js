// Project Structure
/*
project/
├── config/
│   └── db.js
├── models/
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── admin.js
│   └── user.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── admin/
│   │   ├── login.ejs
│   │   └── dashboard.ejs
│   ├── auth/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   └── home.ejs
├── middlewares/
│   ├── auth.js
│   └── admin.js
├── package.json
└── server.js
*/

// server.js
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000 }, // 1 hour
    })
);

// Database connection (config/db.js)
mongoose.connect("mongodb://localhost/user_management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// User Model (models/User.js)
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// Authentication Middleware (middlewares/auth.js)
const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.redirect("/login");
};

const isAdmin = async (req, res, next) => {
    if (req.session.userId) {
        const user = await User.findById(req.session.userId);
        if (user && user.isAdmin) {
            return next();
        }
    }
    res.redirect("/login");
};

// Auth Routes (routes/auth.js)
app.get("/signup", (req, res) => {
    res.render("auth/signup");
});

app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword,
        });
        await user.save();
        res.redirect("/login");
    } catch (error) {
        res.render("auth/signup", {
            error: "Username or email already exists",
        });
    }
});

app.get("/login", (req, res) => {
    res.render("auth/login");
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.render("auth/login", { error: "Invalid credentials" });
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.render("auth/login", { error: "Invalid credentials" });
        }
        req.session.userId = user._id;
        if (user.isAdmin) {
            res.redirect("/admin/dashboard");
        } else {
            res.redirect("/home");
        }
    } catch (error) {
        res.render("auth/login", { error: "An error occurred" });
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});

// Admin Routes (routes/admin.js)
app.get("/admin/login", (req, res) => {
    res.render("admin/login");
});

app.get("/admin/dashboard", isAdmin, async (req, res) => {
    const users = await User.find({ isAdmin: false });
    res.render("admin/dashboard", { users });
});

app.get("/admin/users/search", isAdmin, async (req, res) => {
    const { query } = req.query;
    const users = await User.find({
        $or: [
            { username: new RegExp(query, "i") },
            { email: new RegExp(query, "i") },
        ],
        isAdmin: false,
    });
    res.render("admin/dashboard", { users });
});

app.post("/admin/users", isAdmin, async (req, res) => {
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

app.put("/admin/users/:id", isAdmin, async (req, res) => {
    try {
        const { username, email } = req.body;
        await User.findByIdAndUpdate(req.params.id, { username, email });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

app.delete("/admin/users/:id", isAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

// User Routes (routes/user.js)
app.get("/home", isAuthenticated, async (req, res) => {
    const user = await User.findById(req.session.userId);
    res.render("home", { user });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
