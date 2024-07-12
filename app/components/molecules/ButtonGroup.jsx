import React from "react";
import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";

export default function ButtonGroup({ startAction, resetAction, startText }) {
  return (
    <div className="flex items-center gap-5">
      <Button action={startAction} text={startText} />
      <IconButton action={resetAction} />
    </div>
  );
}
