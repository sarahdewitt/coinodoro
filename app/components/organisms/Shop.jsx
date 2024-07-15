"use client";
import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Card, ThemeCard } from "../molecules/Card";
import TitleHeader from "../atoms/TitleHeader";
import { NavShop } from "./Nav";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useTheme } from "@/app/hooks/useTheme";

const themes = [
  { id: 1, name: "Dark Theme", cost: 200 },
  { id: 2, name: "Pink Theme", cost: 200 },
  { id: 3, name: "Green Theme", cost: 200 },
  { id: 4, name: "Blue Theme", cost: 300 },
];

export default function Shop() {
  const { themes, purchaseTheme, coins } = useTheme();

  return (
    <div>
      <NavShop coins={coins} />
      <div className={"px-5"}>
        <TitleHeader
          title={"Pomo Shop"}
          subtitle={"Purchase themes with your collected drops"}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {themes.map((theme) => (
            <Card
              key={theme.id}
              name={theme.name}
              cost={theme.cost}
              buyAction={() => purchaseTheme(theme)}
              color={theme.name.replace(" ", "").toLowerCase()}
              label={"buy"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
