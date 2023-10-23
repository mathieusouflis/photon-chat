// user regex : google
// pswd regex : goodle
// email regex : goodle

// COMPONENTS IMPORTS
import express from "express"
import http from "http"
import bodyparser from "body-parser"
import {Server} from "socket.io"
import amongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

// ROUTES IMPORT
import roomRoutes from "./routes/room.js"
import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"

dotenv.config()

// Express INIT
const app = express();
app.use(cors());
app.use(bodyparser.json())

// Server INIT
const server = http.createServer(app);
const ORIGIN = process.env.ORIGIN ? process.env.ORIGIN : "http://localhost:3000"
const PORT = process.env.PORT ? process.env.PORT : 3001

//MongoDB Init
amongoose.connect(process.env.MONGO_URI)

//Io Init
const io = new Server(server, {
    cors: {
        origin: ORIGIN
    }
});

// Io FUNC
io.on("connection", (socket) => {
    console.log(`User connected : ${socket.id}`);
    
    socket.on("join_room", async (room) => {
        await socket.join(room)
        console.log("Room Joined", room, "<--");
    })

    socket.on("send_message", async (data) => {
        socket.to(data.room).emit("recieve_message", data);
        console.log("Message sended to :", data.room)
    });

    socket.on("writing", async (data) => {
        socket.to(data.room).emit("write_now", data)
        console.log("Writing")
    })
});

// ROUTES
app.use("/room", roomRoutes)
app.use("/auth", authRoutes)
app.use("/message", messageRoutes)


// SERVER LAUNCH
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
