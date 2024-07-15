import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./hooks/useTheme";

export const metadata = {
  title: "Coinodoro",
  description: "A Gamified Pomodoro App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
