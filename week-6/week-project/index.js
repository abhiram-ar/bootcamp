const express = require("express");
const dotenv = require("dotenv").config();
const session = require("express-session");
const dbConnect = require("./config/db");
const adminRouter = require("./routes/admin");
const authrouter = require("./routes/auth");
const userRouter = require("./routes/user");
const morgan = require("morgan")


dbConnect();
const app = express();

//middleware
app.use(morgan("dev"))
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: "abhiram",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60 * 60 * 1000 }, //1hr
    })
);

//rotues
app.use("/", authrouter);
app.use("/", adminRouter);
app.use("/", userRouter);

//server config
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${3000}`);
});
