import mongoose from "mongoose"
const Schema = mongoose.Schema

const followsSchema = new Schema({
    following_user_id: {
        type: String,
        required: true
    },
    followed_user_id: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now()
    }
})

export default mongoose.model("Follows", followsSchema)