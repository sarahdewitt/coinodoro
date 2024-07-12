"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect } from "react";
import CompletionGraph from "./components/organisms/Graph";
import Button from "./components/atoms/Button";
import IconButton from "./components/atoms/IconButton";
import ButtonGroup from "./components/molecules/ButtonGroup";
import Timer from "./components/atoms/Timer";
import Footer from "./components/organisms/Footer";

const Pomodoro = dynamic(() => import("./components/organisms/Pomodoro"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
      const formattedName = selectedTheme.replace(/[\s"']/g, "").toLowerCase();
      document.body.className = formattedName;
    }
  }, []);
  return (
    <div>
      <Pomodoro />
      <Footer/>
    </div>
  );
}
