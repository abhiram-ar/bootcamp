import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
        console.log("db connected");
    } catch (error) {
        console.log("Error connecting to DB");
        console.log(error);
    }
}
