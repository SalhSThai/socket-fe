import { UserContext } from "@/app/context/UserContextProvider";
import socket from "@/config/socket-config";
import { Button } from "@mui/material";
import React, { use, useContext, useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";

function ChatTextBar({ addNewMessage }) {
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState(false);
  const { userName } = useContext(UserContext);

  const handleSend = (e) => {
    e.preventDefault();
    const messageObj = {
      to: "other",
      from: userName,
      message,
    };
    // addNewMessage(messageObj);
    socket.emit("sendMessage", messageObj);
    setMessage("");
  };
  useEffect(() => {
    if (!!userName) {
      setLogin(true);
    }
  }, [userName]);

  return (
    <form className="w-full flex justify-between gap-4" onSubmit={handleSend}>
      <input
        className="w-full border-none rounded-md text-black px-4"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={!login}
      />
      <Button type="submit" className="rounded-md" variant="outlined">
        <HiChevronRight rotate={"right"} />
      </Button>
    </form>
  );
}

export default ChatTextBar;
