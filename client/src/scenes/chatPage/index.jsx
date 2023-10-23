import React, { useEffect, useState } from "react";

function Chat({ socket, username, room }) {
  const [messageList, setMessageList] = useState([]);
  const [writing, setWriting] = useState({username: "op", status: false})

  const sendMessage = async (message) => {
    if (message !== "") {
      const messageData = {
        author: username,
        message: message,
        room: room
      };

      await socket.emit("send_message", messageData);
      sendWrite(false)
      console.log("message sent!");
      setMessageList((list) => [...list, {id: list.length + 1, author: messageData.author, message: messageData.message}]);
    }
  };

  const sendWrite = async (status) => {
    socket.emit("writing", {
      username,
      status
    })
  }

  useEffect(() => {
    const setMessages = (data) => {
      console.log("New message recieved !");
      return setMessageList((list) => [...list, {id: list.length + 1, author: data.author, message: data.message}]);
    }
    const setWritingStatus = (data) => {
      console.log("Someone is writing")
      return setWriting({username: data.username, status: data.status})
    }
    socket.on("recieve_message",setMessages)
    socket.on("write_now", setWritingStatus)
    return () => {
      socket.off("broadcast_msg", setMessages);
      socket.off("write_now", setWritingStatus)
    }
  }, [socket]);

  return (
    <>
    <div className="chat-window">
      {messageList.map((messageContent) => {
        return <p key={messageContent.id}>{messageContent.author} : {messageContent.message}</p>
      })}
    </div>
    {writing.status === true ? <p>{`${writing.username} is writing...`}</p> : null}
    <form onSubmit={(e) => {
        e.preventDefault()
        sendMessage(e.target[0].value)
        e.target[0].value = ""
      }}>
        <input onChange={async (e) => {
          if (e.target.value !== ""){
            writing.status === false && sendWrite(true)
          }else {
            writing.status === true && sendWrite(false)
          }
        }} placeholder="Message"/>
    </form>
    </>
  );
}

export default Chat;