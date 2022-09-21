import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        password: { type: String },
    },
    { timestamps: true }
);


export default mongoose.model("User", userSchema);
