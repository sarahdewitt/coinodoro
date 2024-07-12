import React from "react";

export default function Button({ action, text }) {
  return (
    <button
      onClick={action}
      className="btnColor rounded-full px-12 py-5 text-base font-semibold"
    >
      {text}
    </button>
  );
}
