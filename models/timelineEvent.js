import mongoose from "mongoose";

const TimelineSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true
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
            required: true
        },
        image: {
            type: String,
            required: true
        },
        more: {
            type: String,
            required: true
        },
        notes: {
            type: String,
            required: true
        },
     }
)
const TimelineEvent = mongoose.model("event", TimelineSchema)

export default TimelineEvent
