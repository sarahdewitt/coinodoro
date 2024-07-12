"use client";
import React from "react";
import { Coin } from "./Icons";

export default function Coins({ coins }) {
  return (
    <div className="flex items-center text-sm font-semibold gap-1 cursor-pointer" suppressHydrationWarning>
      <Coin />
      {coins}
    </div>
  );
}
