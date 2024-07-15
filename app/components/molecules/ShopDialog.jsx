import { useTheme } from "../../hooks/useTheme";
import React, { useState } from "react";
import TitleHeader from "../atoms/TitleHeader";
import { Card } from "./Card";
import { Shop } from "../atoms/Icons";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Coins from "../atoms/Coins";
import useTimer from "../../hooks/useTimer";

export default function ShopDialog({coins}) {
  const { themes, purchaseTheme } = useTheme();

  const shopThemes = themes.filter((theme) => theme.id !== 0);

  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Shop />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={"relative z-50"}
      >
        <DialogBackdrop className={"fixed inset-0 bg-black/30"}>
          <div className="fixed inset-0 w-screen overflow-y-auto py-6">
            <div className="flex min-h-full items-center justify-center">
              <DialogPanel
                className={
                  "dialogbg md:w-1/2 shadow-xl p-5 md:p-10 rounded-xl"
                }
              >
                <Coins coins={coins} />
                <TitleHeader
                  title={"Pomo Shop"}
                  subtitle={"Purchase themes with your collected drops"}
                />
                <div className="grid grid-cols-1 gap-10">
                  {shopThemes.map((theme) => (
                    <Card
                      key={theme.id}
                      name={theme.name}
                      cost={theme.cost}
                      buyAction={() => purchaseTheme(theme)}
                      color={theme.name.replace(" ", "").toLowerCase()}
                      label={"Purchase"}
                    />
                  ))}
                </div>
              </DialogPanel>
            </div>
          </div>
        </DialogBackdrop>
      </Dialog>
    </>
  );
}
