import React from "react";

export default function SmallButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-1 bg-light-gray text-sm font-semibold rounded-full w-fit text-black"
    >
      {label}
    </button>
  );
}
