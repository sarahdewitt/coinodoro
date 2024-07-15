"use client";
import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [coins, setCoins] = useLocalStorage("coins", 0);
  const [purchasedThemes, setPurchasedThemes] = useLocalStorage(
    "purchasedThemes",
    [0] // Light Theme included by default
  );
  const [selectedTheme, setSelectedTheme] = useLocalStorage(
    "selectedTheme",
    "Light Theme" // Default selected theme
  );

  useEffect(() => {
    if (selectedTheme) {
      const formattedName = selectedTheme.replace(/[\s"']/g, "").toLowerCase();
      document.body.className = formattedName;
    }
  }, [selectedTheme]);

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
    if (purchasedThemes.includes(theme.id) || theme.id === 0) {
      const formattedName = theme.name.replace(/[\s"']/g, "").toLowerCase();
      setSelectedTheme(theme.name);
      document.body.className = formattedName;
      localStorage.setItem('selectedTheme', theme.name); // Save the selected theme to localStorage
    } else {
      alert("You need to purchase this theme first.");
    }
  };

  // Function to update coins from useTimer
  const updateCoins = (newCoins) => {
    setCoins(newCoins);
  };

  return (
    <ThemeContext.Provider
      value={{
        coins,
        setCoins,
        updateCoins, // Add updateCoins function
        purchasedThemes,
        setPurchasedThemes,
        selectedTheme,
        setSelectedTheme,
        purchaseTheme,
        applyTheme,
        themes: [
          { id: 0, name: "Light Theme", cost: 0 },
          { id: 1, name: "Dark Theme", cost: 100 },
          { id: 2, name: "Pink Theme", cost: 200 },
          { id: 3, name: "Green Theme", cost: 200 },
          { id: 4, name: "Blue Theme", cost: 300 },
        ],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
