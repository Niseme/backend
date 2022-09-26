import express from "express";
import authRouter from "./routes/auth.js";
import timelineRouter from "./routes/timelineEvent.js"
import {mongoConnect} from "./utils/database.js";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json({limit: '4MB'}));
app.use("/auth", authRouter)
app.use("/events", timelineRouter)

app.listen(8000, () => {
    console.log("Server is running on port 8000");
    mongoConnect()
})