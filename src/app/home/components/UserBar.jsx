import { UserContext } from "@/app/context/UserContextProvider";
import socket from "@/config/socket-config";
import { Button } from "@mui/material";
import React, { useContext, useState } from "react";

function UserBar() {
  const [name, setName] = useState("");
  const [save, setSave] = useState(false);
  const { userName, setUserName } = useContext(UserContext);
  const handleSave = (e) => {
    e.preventDefault();
    setUserName(name);
    setSave(true);
  };
  const joinRoom = () => {
    socket.emit("join_room", "room1");
  };
  return (
    <form className="w-full h-4 flex justify-end " onSubmit={handleSave}>
      <div role="button" onClick={joinRoom}>
        Room1
      </div>
      <input
        className="rounded-sm px-2 border-none text-black"
        type="text"
        value={name}
        disabled={save}
        placeholder="enter user name"
        onChange={(e) => setName(e.target.value)}
      />
      {save ? (
        <></>
      ) : (
        <Button type="button" variant="outlined">
          save
        </Button>
      )}
    </form>
  );
}

export default UserBar;
