const User = require("./../models/userModel");
const bcrypt = require("bcrypt");
const { response } = require("express");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { username, password, role } = req.body;
    console.log(username, password, role);
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({
            message: `User registerd with username ${username}`,
        });
    } catch (error) {
        res.status(500).json({
            message: `error while registering username ${username}`,
        });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({
                message: `User with username ${username} not found`,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Credentials",
            });
        }

        //if everything went well, okyish user and password
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRECT,
            {expiresIn: "1h"}
        );

        res.status(200).json(token)
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

module.exports = {
    register,
    login,
};
