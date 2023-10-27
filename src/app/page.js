"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();
  router.push("/home");
  return <div className="text-red-500"></div>;
}

export default Page;
