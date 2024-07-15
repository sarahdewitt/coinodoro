import React, { useState } from "react";
import { Report } from "../atoms/Icons";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import TitleHeader from "../atoms/TitleHeader";
import CompletionGraph from "../organisms/Graph";

export default function ReportDialog() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Report />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={"relative z-50"}
      >
        <DialogBackdrop className={"fixed inset-0 bg-black/30"}>
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex flex-1 min-h-full items-center justify-center w-full">
              <DialogPanel
                className={
                  "dialogbg w-5/6 md:w-1/2 shadow-xl p-5 md:p-10 rounded-xl"
                }
              >
                <TitleHeader
                  title={"Report"}
                  subtitle={
                    "Acitivity summary of your focus hours here at pomodropo"
                  }
                />
                <div className="px-5">
                  <CompletionGraph />
                </div>
              </DialogPanel>
            </div>
          </div>
        </DialogBackdrop>
      </Dialog>
    </>
  );
}
