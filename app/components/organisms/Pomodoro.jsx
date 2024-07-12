"use client";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Timer from "../atoms/Timer";
import ButtonGroup from "../molecules/ButtonGroup";
import useTimer from "../../hooks/useTimer";
import { Nav } from "../molecules/Nav";
import Mode from "../atoms/Mode";

const WORK_DURATION = 1500;
const SHORT_BREAK_DURATION = 300; // 5 minutes
const LONG_BREAK_DURATION = 900; // 15 minutes
const POMODORO_CYCLE = 4; // Number of work sessions before a long break
const COINS_REWARD = 100;

export default function Pomodoro() {
  const { mode, coins, startTimer, resetTimer, minutes, seconds } = useTimer();

  const getColor = (mode) => {
    if (mode === "work") {
      return "#DF5858";
    } else if (mode === "shortBreak" || mode === "longBreak") {
      return "#E4CC5A";
    } else {
      return "#DF5858";
    }
  };
  return (
    <section className="h-screen">
      <Nav coins={coins} />
      <div className="flex flex-col items-center gap-10 h-5/6 justify-center">
        <Mode color={getColor(mode)}>
          {mode === "work"
            ? "Work"
            : mode === "shortBreak"
            ? "Short Break"
            : "Long Break"}
        </Mode>
        <Timer minutes={minutes} seconds={seconds} />
        <ButtonGroup
          startAction={startTimer}
          resetAction={resetTimer}
          startText={"Start"}
        />
      </div>
    </section>
  );
}