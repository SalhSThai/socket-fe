import React from "react";
import ChatBox from "./ChatBox";
import UserBar from "./UserBar";
import FriendsBar from "./FriendsBar";

function Home() {
  return (
    <div className="grow w-full bg-slate-950 flex  py-10 ">
      <div className="w-full h-full flex justify-center">
        <div className="w-1/12 h-full  mt-4">
          <FriendsBar />
        </div>
        <div className="w-8/12 h-full ">
          <UserBar />
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default Home;
