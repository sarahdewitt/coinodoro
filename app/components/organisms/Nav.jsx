import React, { useState } from "react";
import Logo from "../atoms/Logo";
import Coins from "../atoms/Coins";
import { Report, Shop } from "../atoms/Icons";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import Link from "next/link";
import CoinsNav from "../molecules/CoinsNav";
import ShopDialog from "../molecules/ShopDialog";
import SettingsDialog from "../molecules/SettingsDialog";
import { useTheme } from "../../hooks/useTheme";
import ReportDialog from "../molecules/ReportDialog";

export const Nav = ({coins}) => {
  return (
    <div className="flex items-center justify-between w-full py-3 px-5 nav border-b-[1px] borderColor">
      <Logo />
      <div className="flex items-center gap-7">
        <CoinsNav coins={coins} />
        <ShopDialog coins={coins} />
        <ReportDialog/>
        <SettingsDialog />
      </div>
    </div>
  );
};

export const NavShop = () => {
  const { coins } = useTheme();
  return (
    <div className="flex items-center justify-between w-full py-3 px-5 border-b-[1px] border-light-gray">
      <Logo />
      <div className="flex items-center gap-6">
        <Coins coins={coins} />
        <Link href={"/settings"}>Settings</Link>
      </div>
    </div>
  );
};

export const NavReport = () => {
  return (
    <div className="flex items-center justify-between w-full py-3 px-5 border-b-[1px] border-light-gray">
      <Logo />
      <div className="flex items-center gap-6">
        <Shop />
      </div>
    </div>
  );
};
