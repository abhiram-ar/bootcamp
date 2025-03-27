import { connectDB } from "./config/mongoDB.config";
import app from "./app";

app.listen(3000, async () => {
    console.log("server start listening on port 3000");
    try {
        await connectDB();
    } catch (error) {
        console.log("Error staring DB");
    }
});
