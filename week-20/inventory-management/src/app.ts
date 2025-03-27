import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// configure cors policy
// app.use(cors({}))

app.use("/api/v1/item", (req, res) => {
    console.log("hello");
    res.send("hello");
});

export default app;
