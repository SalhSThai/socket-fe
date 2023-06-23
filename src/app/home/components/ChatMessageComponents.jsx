import { UserContext } from "@/app/context/UserContextProvider";
import React, { useContext } from "react";

function ChatMessageComponents({ item }) {
  const { userName } = useContext(UserContext);
  return (
    <div className="w-full flex flex-col justify-center">
      {item.from === userName ? (
        <Rightmessage item={item} />
      ) : (
        <Leftmessage item={item} />
      )}
    </div>
  );
}
function Leftmessage({ item }) {
  return (
    <div className="self-start flex flex-col text-white">
      <div>{item.from}</div>

      <div className=" bg-slate-600 py-1 px-2 rounded-lg rounded-tl-none">
        {item.message}
      </div>
    </div>
  );
}
function Rightmessage({ item }) {
  return (
    <div className="self-end flex flex-col text-white">
      <div>{item.from}</div>
      <div className=" bg-slate-600 py-1 px-2 rounded-lg rounded-tr-none">
        {item.message}
      </div>
    </div>
  );
}

export default ChatMessageComponents;
