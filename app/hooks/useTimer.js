import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useTheme } from "./useTheme";

const WORK_DURATION = 5; //1500
const SHORT_BREAK_DURATION = 5; // 300 secs 5 minutes
const LONG_BREAK_DURATION = 900; // 15 minutes
const POMODORO_CYCLE = 4; // Number of work sessions before a long break
const COINS_REWARD = 100;

export default function useTimer() {
  const { coins, updateCoins } = useTheme(); // Get updateCoins from useTheme
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("work"); //work, shortBreak, longBreak
  const [cycles, setCycles] = useState(0);
  const [isHandlingComplete, setIsHandlingComplete] = useState(false);

  const alarm = new Audio("audio/alarm.mp3");

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0 && !isHandlingComplete) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isHandlingComplete) {
      handleComplete();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isHandlingComplete]);

  const handleComplete = () => {
    setIsHandlingComplete(true);
    alarm.play();

    const completionDate = new Date().toISOString().split("T")[0];
    let completionLog = JSON.parse(localStorage.getItem("completionLog")) || {};

    if (completionLog[completionDate]) {
      completionLog[completionDate] += 1;
    } else {
      completionLog[completionDate] = 1;
    }

    localStorage.setItem("completionLog", JSON.stringify(completionLog));

    alarm.onended = () => {
      if (mode === "work") {
        setCycles((prevCycles) => {
          const newCycles = prevCycles + 1;
          const newCoins = coins + COINS_REWARD;
          updateCoins(newCoins); // Call updateCoins to synchronize coins

          if (newCycles === POMODORO_CYCLE) {
            setMode("longBreak");
            setTimeLeft(LONG_BREAK_DURATION);
            setCycles(0);
          } else {
            setMode("shortBreak");
            setTimeLeft(SHORT_BREAK_DURATION);
          }
          setIsHandlingComplete(false);
          return newCycles;
        });
      } else {
        setMode("work");
        setTimeLeft(WORK_DURATION);
        setIsHandlingComplete(false);
      }
    };
  };

  const startTimer = () => setIsActive(true);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(WORK_DURATION);
    setMode("work");
    setCycles(0);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return {
    mode,
    coins, // Expose coins so it can be displayed in the Nav component
    startTimer,
    resetTimer,
    minutes,
    seconds,
  };
}
