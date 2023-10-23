import mongoose from "mongoose"
const Schema = mongoose.Schema

const postsSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    author_id: {
        type: String,
        // AJOUTER UNE TAILLE MAX
        required: true
    },
    created_at: {
        type: String,
        default: Date.now()
    }
})

export default mongoose.model("Posts", postsSchema)