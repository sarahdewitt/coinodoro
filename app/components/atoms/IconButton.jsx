import React from "react";
import { Reset } from "./Icons";

export default function IconButton({ action }) {
  return (
    <button onClick={action} className="btnResetColor rounded-full p-5">
      <Reset />
    </button>
  );
}
