'use client'
import React, { useState } from "react";
import TitleHeader from "../atoms/TitleHeader";
import { ThemeCard } from "./Card";
import { Settings } from "../atoms/Icons";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useTheme } from "../../hooks/useTheme";

export default function SettingsDialog() {
  const { themes, purchasedThemes, applyTheme } = useTheme();
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Settings />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={"relative z-50"}
      >
        <DialogBackdrop className={"fixed inset-0 bg-black/30"}>
          <div className="fixed inset-0 w-screen overflow-y-auto py-5">
            <div className="flex min-h-full items-center justify-center">
              <DialogPanel
                className={
                  "dialogbg w-5/6 md:w-1/2 shadow-xl p-5 md:p-10 rounded-xl"
                }
              >
                <TitleHeader title={"Settings"} />
                <p className="pb-5 text-xl font-semibold">My Themes</p>
                <div className="grid grid-cols-1 gap-5">
                  {/* <ThemeCard name={'Light Theme'} buyAction={() => {applyTheme({ id: 0, name: 'Light Theme', cost: 0 });}} label={"Apply"} color={'lighttheme'}/> */}
                  {themes
                    .filter((theme) => purchasedThemes.includes(theme.id)) // Ensure Light Theme is included
                    .map((theme) => (
                      <ThemeCard
                        key={theme.id}
                        name={theme.name}
                        buyAction={() => applyTheme(theme)}
                        label={"Apply"}
                        color={theme.name.replace(" ", "").toLowerCase()}
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
