import Room from "../models/Rooms.js"

export const create =  async (req, res) => {
    const data = req.body
    if(!data || !data.name || !data.password){
        res.status(422)
        res.end()
    }else {
        console.log(await Room.find())
        const room = new Room({ owner_id: data.owner_id, name: data.name, password: data.password}).save()
        console.log(await Room.find())
        res.status(200)
        res.json(room)
        res.end()
    }
}

export const join = async (req, res) => {
    try {
            const {
            roomName,
            password,
            user
        } = req.body
    } catch (err){
        res.status(500).json(err)
    }
    const room = Room.findOne({name: roomName})
    !room && res.status(404).json({
        message: "Room not found."
    })

    
}


// she's smol
// he's mean
// ----------------------
// He's mine
// I'm hers