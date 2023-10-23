import Message from "../models/RoomMessages.js"

export const create =  async (req, res) => {
    const data = req.body
    if(!data || !data.name || !data.password){
        res.status(422)
        res.end()
    }else {
        const room = new Message({room_id: data.room_id, author_id: data.author_id, content: data.content }).save()
        res.status(200)
        res.json(room)
        res.end()
    }
}