const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Specific CORS configuration
const corsOptions = {
    origin: "http://localhost:8080", // Allow only this origin
    methods: ["GET", "POST"], // Allow only GET and POST requests
    allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Apply CORS middleware with specific options
app.use(cors(corsOptions));

app.get("/api/data", (req, res) => {
    res.json({ message: "This is data from the server" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
