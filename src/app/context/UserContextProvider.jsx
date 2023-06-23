"use client";
import socket from "@/config/socket-config";
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();
function UserContextProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [friendsArray, setFriendsArray] = useState([]);

  useEffect(() => {
    if (userName) {
      socket.auth = { id: userName };
      socket.connect();
      socket.on("connect", () => {});
    }
    return () => {
      socket.disconnect();
    };
  }, [userName]);
  socket.on("onlinefriends", (data) => {
    setFriendsArray(Object.keys(data));
  });
  return (
    <UserContext.Provider
      value={{ userName, setUserName, friendsArray, setFriendsArray }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext };
export default UserContextProvider;
