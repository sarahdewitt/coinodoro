import React from "react";
import SmallButton from "../atoms/SmallButton";

export const Card = ({ name, cost, buyAction, color, label }) => {
  return (
    <div className="flex flex-col ">
      <div className={`h-40 w-full ${color} rounded-md shadow-inner`}></div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 py-3">
          <p className="text-sm md:text-base font-semibold">{name}</p>
          <p className="text-sm md:text-base font-semibold">{cost} Coins</p>
        </div>
        <SmallButton onClick={buyAction} label={label} />
      </div>
    </div>
  );
};

export const ThemeCard = ({ name, buyAction, color, label }) => {
  return (
    <div className="flex flex-col ">
      <div className={`h-40 w-full ${color} rounded-md shadow-inner`}></div>
      <div className="flex items-center gap-4 py-3">
        <p className="text-sm md:text-base font-semibold">{name}</p>
      </div>
      <SmallButton onClick={buyAction} label={label} />
    </div>
  );
};
