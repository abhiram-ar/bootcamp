import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import itemRouter from "./layer3-presentation/routes/item.router";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// configure cors policy
// app.use(cors({}))

app.use("/api/v1/item", itemRouter);

export default app;
