import mongoose from "mongoose"
const Schema = mongoose.Schema

const roomsSchema = new Schema({
    owner_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        // AJOUTER UNE TAILLE MAX
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now()
    }
})

export default mongoose.model("Rooms", roomsSchema)