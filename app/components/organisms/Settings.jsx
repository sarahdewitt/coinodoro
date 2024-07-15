import React from "react";
import TitleHeader from "../atoms/TitleHeader";
import { ThemeCard } from "../molecules/Card";
import { useTheme } from "@/app/hooks/useTheme";

export default function Settings() {
  const { themes, purchasedThemes, applyTheme } = useTheme();
  return (
    <div>
      <TitleHeader title={"My Themes"} />
      <div className="grid grid-cols-1 gap-">
        {themes
          .filter((theme) => purchasedThemes.includes(theme.id))
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
    </div>
  );
}
