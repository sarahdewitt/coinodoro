import React from "react";

export default function SmallButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 bg-pastel-yellow text-sm font-semibold rounded-full w-fit uppercase"
    >
      {label}
    </button>
  );
}
