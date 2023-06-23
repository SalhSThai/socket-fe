import { UserContext } from "@/app/context/UserContextProvider";
import socket from "@/config/socket-config";
import React, { useContext, useState } from "react";

function FriendsBar() {
  const { friendsArray, setFriendsArray } = useContext(UserContext);
  return (
    <div>
      {friendsArray.map((el, id) => (
        <FriendsBlock key={id} name={el} />
      ))}
    </div>
  );
}
function FriendsBlock({ name }) {
  return (
    <div
      role="button"
      className="shadow-sm shadow-slate-100 rounded-md my-2 flex justify-center"
    >
      {name}
    </div>
  );
}
export default FriendsBar;
