import React, { useContext, useEffect, useState } from "react";
import ChatTextBar from "./ChatTextBar";
import MessageContainer from "./MessageContainer";
import { UserContext } from "@/app/context/UserContextProvider";
import socket from "@/config/socket-config";

function ChatBox() {
  const { userName } = useContext(UserContext);

  const [chatArray, setChatArray] = useState([]);
  const addNewMessage = (newMessageObj) => {
    setChatArray([...chatArray, newMessageObj]);
  };

  socket.on("receiveMessage", (input) => {
    console.log(input);
    addNewMessage(input);
  });
  useEffect(() => {
    return () => socket.off("receiveMessage");
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-between items-center border border-slate-500">
      <MessageContainer chatArray={chatArray} />
      <ChatTextBar addNewMessage={addNewMessage} />
    </div>
  );
}

export default ChatBox;
