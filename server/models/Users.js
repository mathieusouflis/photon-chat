import mongoose from "mongoose"
const Schema = mongoose.Schema

const usersSchema = new Schema({
    username: {
        type: String,
        // AJOUTER TAILLE MAX 15
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar : {
        type: String
    },
    role: {
        type: String
    },
    created_at: {
        type: String,
        default: Date.now()
    }
})

export default mongoose.model("Users", usersSchema)