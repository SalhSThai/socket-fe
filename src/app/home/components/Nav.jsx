"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import React from "react";

function Nav({ className }) {
  const router = useRouter();

  return (
    <div className={`sticky top-0 w-full h-[10vh] flex justify-between items-center px-10 z-10 bg-black shadow-md shadow-slate-300 ${className}`}>
      <img
        className="w-16 h-16"
        src="https://avatars.githubusercontent.com/u/10566080?s=280&v=4"
        alt="logo"
        role="button"
        onClick={() => {
          router.push("/");
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
export default Nav;
