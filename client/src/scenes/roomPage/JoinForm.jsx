
function JoinForm({setAction}){
    const submit = (e) => {
        return
    }
    return (
        <>
         <form onSubmit={submit}>
            <input type="text" name="roomName" id="roomName" placeholder="name"/>
            <input type="password" name="roomPass" id="roomPass" placeholder="password"/>
         </form>
         <button onClick={() => setAction("")}>Cancel</button>
        </>
    )
}

export default JoinForm