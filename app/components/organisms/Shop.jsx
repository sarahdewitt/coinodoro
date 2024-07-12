"use client";
import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Card, ThemeCard } from "../molecules/Card";
import TitleHeader from "../atoms/TitleHeader";
import { NavShop } from "../molecules/Nav";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const themes = [
  { id: 1, name: "Dark Theme", cost: 200 },
  { id: 2, name: "Pink Theme", cost: 200 },
  { id: 3, name: "Green Theme", cost: 200 },
  { id: 4, name: "Blue Theme", cost: 300 },
];

export default function Shop() {
  const [coins, setCoins] = useLocalStorage("coins", 0);
  const [purchasedThemes, setPurchasedThemes] = useLocalStorage(
    "purchasedThemes",
    []
  );
  const [selectedTheme, setSelectedTheme] = useLocalStorage(
    "selectedTheme",
    ""
  );

  const purchaseTheme = (theme) => {
    if (coins >= theme.cost && !purchasedThemes.includes(theme.id)) {
      setCoins(coins - theme.cost);
      setPurchasedThemes([...purchasedThemes, theme.id]);
    } else if (purchasedThemes.includes(theme.id)) {
      alert("You already own this theme.");
    } else {
      alert("Not enough coins.");
    }
  };

  const applyTheme = (theme) => {
    if (purchasedThemes.includes(theme.id)) {
      console.log("Original theme name:", theme.name); // Log the original theme name
      const formattedName = theme.name.replace(/[\s"']/g, "").toLowerCase();
      console.log("Formatted theme name:", formattedName); // Log the formatted theme name
      setSelectedTheme(theme.name);
      document.body.className = formattedName;
    } else {
      alert("You need to purchase this theme first.");
    }
  };

  return (
    <div>
      <NavShop coins={coins} />
      <TabGroup className={"px-5 py-10"}>
        <TabList
          className={
            "flex gap-10 font-semibold bg-light-gray p-5 rounded-full text-black"
          }
        >
          <Tab className={"rounded-full px-5 py-2"}>Pomo Shop</Tab>
          <Tab className={"rounded-full px-5 py-2"}>My Themes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={"px-5"}>
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
          </TabPanel>
          <TabPanel className={"px-5"}>
            <div>
              <TitleHeader title={"My Themes"} />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {themes
                  .filter((theme) => purchasedThemes.includes(theme.id))
                  .map((theme) => (
                    <ThemeCard
                      key={theme.id}
                      name={theme.name}
                      buyAction={() => applyTheme(theme)}
                      label={"apply"}
                      color={theme.name.replace(" ", "").toLowerCase()}
                    />
                  ))}
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      <div className="px-5"></div>
    </div>
  );
}
