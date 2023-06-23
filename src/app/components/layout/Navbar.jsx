"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function Navbar({ className }) {
  const router = useRouter();
  return (
    <div
      className={`fixed w-full h-[10vh] flex justify-between px-10 ${className}`}
    >
      <img
        className="w-20 h-20"
        src="https://avatars.githubusercontent.com/u/10566080?s=280&v=4"
        alt="logo"
        role="button"
        onClick={() => {
          router.push("/about");
        }}
      />

      <NavBtnGroup />
    </div>
  );
}
export function NavBtnGroup({}) {
  return (
    <div className=" flex items-center">
      <Button variant="outlined">Primary</Button>
    </div>
  );
}
export default Navbar;
