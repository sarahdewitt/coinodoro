import React from "react";

export default function Timer({ minutes, seconds, color }) {
  return (
    <div
      className={`h-72 w-72 md:h-96 md:w-96 rounded-full flex items-center justify-center timerbg`}
    >
      <h1 className={`text-4xl md:text-5xl font-extrabold timertext`}>
        {minutes}:{seconds}
      </h1>
    </div>
  );
}
