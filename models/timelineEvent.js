import mongoose from "mongoose";

const TimelineSchema = new mongoose.Schema (
    {
        name: {
            type: String,
        },
        event: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        month: {
            type: String,
            required: true
        },
        both: {
            type: Boolean,
        },
        image: {
            type: String,
        },
        more: {
            type: String
        },
        notes: {
            type: String,
            required: true
        },
     }
)
const TimelineEvent = mongoose.model("event", TimelineSchema)

export default TimelineEvent
