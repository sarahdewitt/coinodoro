"use client";
import React from "react";
import CompletionGraph from "../components/organisms/Graph";
import TitleHeader from "../components/atoms/TitleHeader";
import { NavReport } from "../components/molecules/Nav";

export default function page() {
  return (
    <div className="">
      <NavReport />
      <div className="px-5">
        <TitleHeader
          title={"Report"}
          subtitle={"Acitivity summary of your focus hours here at pomodropo"}
        />
        <div className="px-5">
          <CompletionGraph />
        </div>
      </div>
    </div>
  );
}
