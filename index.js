import express from "express";
import Authrouter from "./router/auth.js";
import {mongoConnect} from "./utils/database.js";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());
app.use("/auth",Authrouter)


app.listen(8000,() => {
    console.log("Server is running on port 8000");
    mongoConnect()
})