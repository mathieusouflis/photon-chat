import mongoose from "mongoose"
const Schema = mongoose.Schema

const roomMessagesSchema = new Schema({
    room_id: {
        type: Number,
        required: true
    },
    author_id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now()
    }
})

export default mongoose.model("RoomMessages", roomMessagesSchema)