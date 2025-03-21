const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

const router = express.Router();

//only admin can access this route
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
    res.json({ message: "welcome admin" });
});

//both admin and manager can access this route
router.get("/manager", authorizeRole("admin, manager"), (req, res) => {
    res.json({ message: "welcome manager" });
});

//only user can access this route
router.get("/user", authorizeRole("admin", "manager", "user"), (req, res) => {
    res.json({ message: "welcome user" });
});

module.exports = router;
