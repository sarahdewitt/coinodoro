"use client";
import React, { useState } from "react";
import Coins from "../atoms/Coins";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

export default function CoinsNav({coins}) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Coins coins={coins} />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            className={
              "bg-white-smoke md:w-1/2 shadow-xl p-5 md:p-10 rounded-xl"
            }
          >
            <DialogTitle className={"text-xl md:text-2xl font-semibold pb-5"}>
              Earn Coins While You Focus
            </DialogTitle>
            <p className="text-sm font-semibold pb-2">What are Coins?</p>
            <p className="text-sm pb-5">
              Coins are a fun and rewarding way to boost your productivity using
              the Pomodoro technique. Each time you complete a focused work
              session, you earn Pomodough Coins, which you can then use to
              enhance and customize your app experience.
            </p>
            <p className="text-sm font-semibold pb-2">How do Coins work?</p>
            <ul className="text-sm list-inside list-decimal">
              <li>
                Earn Coins
                <ul className="pl-8 list-disc">
                  <li>
                    Every time you complete a 25-minute work session (a
                    Pomodoro), you earn 100 Coins.
                  </li>
                </ul>
              </li>
              <li>
                Spend Coins
                <ul className="pl-8 list-disc">
                  <li>
                    Use your earned Coins to unlock various new color themes.
                  </li>
                </ul>
              </li>
            </ul>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
