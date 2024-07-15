import React from "react";

export default function TitleHeader({title, subtitle}) {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm md:text-base">
        {subtitle}
      </p>
    </div>
  );
}
