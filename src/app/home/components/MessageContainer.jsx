import React from "react";
import ChatMessageComponents from "./ChatMessageComponents";

function MessageContainer({ chatArray }) {
  return (
    <div className="w-full grow h-[300px] p-8">
      {chatArray.map((el, id) => (
        <ChatMessageComponents key={id} item={el} />
      ))}
    </div>
  );
}

export default MessageContainer;
