// /// FAIRE UNE LISTE CLIQUABLE DES ROOMES EN UTILISATION.

import { Link } from "react-router-dom"

// import { useState } from 'react';
// import {io} from "socket.io-client";
// import Chat from './scenes/chatPage';
// import './App.css';
// const socket = io("localhost:3001");

// function App() {
//   const [username, setUsername] = useState("");
//   const [room, setRoom] = useState("")
//   const [roomOk, setRoomOk] = useState(false)

//   const submitForm = (e) => {
//     e.preventDefault();
//     setUsername(e.target[0].value);
//     setRoom(e.target[1].value)
//     console.log(e.target[1].value);
//     socket.emit("join_room", e.target[1].value)
//     setRoomOk(true)
//     e.target[0].value = ""
//   }
//   if (roomOk === true){
//     return (
//       <>
//       <Chat socket={socket} username={username} room={room}/>
//       </>
//     )
//   }else {
//     return (
//       <>
//       {roomOk === true ? <Chat socket={socket} username={username} room={room}/> : <form onSubmit={submitForm}>
//           <input type="text" placeholder="username"/>
//           <input type="text" placeholder="roomid"/>
//           <input type="text" placeholder="password"/>
//           <button type="submit">Send</button>
//         </form> }
//       </>
//     )
//   }
// }

// export default App;

function Home(){

  return (
    <>
    <button>
      <Link to="/">Home</Link>
    </button>
    <button>
      <Link to="/login">Login</Link>
    </button>
    <button>
      <Link to="/register">Register</Link>
    </button>
    <button>
      <Link to="/room">Room</Link>
    </button>
    </>
  )
}

export default Home