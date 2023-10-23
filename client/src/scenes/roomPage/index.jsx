import { useState } from "react";
import CreateForm from "./CreateForm";
import JoinForm from "./JoinForm";

function Room(){
    const [action, setAction] = useState("")

    if (action === "create"){
        console.log("CREATE");
        return <CreateForm setAction={setAction}/>
    }else if (action === "join"){
        console.log("JOIN");
        return<JoinForm setAction={setAction}/>
    }else {
        console.log("BASE");
        return(
            <>
            <button onClick={() => setAction("create")}>Créer une room</button>
            <button onClick={() => setAction("join")}>Rejoindre une room</button>
            </>
        )
    }
}

export default Room