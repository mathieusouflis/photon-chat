
import Home from './Home';
import Chat from './scenes/chatPage';
import Login from './scenes/loginPage';
import Profil from './scenes/profilPage';
import Room from './scenes/roomPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/chat" element={<Chat />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/profil" element={<Profil />}/>
                <Route path="/room" element={<Room />}/>
            </Routes>
        </BrowserRouter>
    )

}