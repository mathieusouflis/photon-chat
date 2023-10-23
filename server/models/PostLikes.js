import mongoose from "mongoose"
const Schema = mongoose.Schema

const postLikesSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    post_id: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now()
    }
})

export default mongoose.model("PostLikes", postLikesSchema)