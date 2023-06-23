"use client";

import React from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";

function page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Nav />
      <Home />
    </div>
  );
}

export default page;
