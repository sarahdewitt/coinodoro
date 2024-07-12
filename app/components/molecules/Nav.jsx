import React, { useState } from "react";
import Logo from "../atoms/Logo";
import Coins from "../atoms/Coins";
import { Report, Shop } from "../atoms/Icons";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export const Nav = ({ coins }) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between w-full py-3 px-5 nav">
      <Logo />
      <div className="flex items-center gap-7">
        <button onClick={() => setIsOpen(true)}>
          <Coins coins={coins} />
        </button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className={"bg-white-smoke md:w-1/2 shadow-xl p-5 md:p-10 rounded-xl"}>
              <DialogTitle className={"text-xl md:text-2xl font-semibold pb-5"}>
                Earn Coins While You Focus
              </DialogTitle>
              <p className="text-sm font-semibold pb-2">What are Coins?</p>
              <p className="text-sm pb-5">
                Coins are a fun and rewarding way to boost your productivity
                using the Pomodoro technique. Each time you complete a focused
                work session, you earn Pomodough Coins, which you can then use
                to enhance and customize your app experience.
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
        <Shop />
        <Report />
      </div>
    </div>
  );
};

export const NavShop = ({ coins }) => {
  return (
    <div className="flex items-center justify-between w-full py-3 px-5">
      <Logo />
      <div className="flex items-center gap-6">
        <Coins coins={coins} />
      </div>
    </div>
  );
};

export const NavReport = () => {
  return (
    <div className="flex items-center justify-between w-full py-3 px-5">
      <Logo />
      <div className="flex items-center gap-6">
        <Shop />
      </div>
    </div>
  );
};
