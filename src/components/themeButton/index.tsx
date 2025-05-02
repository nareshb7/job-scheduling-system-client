import { ThemeType } from "authContext/types";
import Button from "common/button";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export interface ThemeButtonProps {
  toggleTheme: () => void;
  theme: ThemeType;
}

const ThemeButton = ({ toggleTheme, theme }: ThemeButtonProps) => {
  const isDark = theme === "dark";

  return (
    <Button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition ${
        isDark
          ? "bg-gray-700 hover:bg-gray-600 text-white"
          : "bg-gray-300 hover:bg-gray-400 text-black"
      }`}
    >
      {isDark ? <MdDarkMode size={22} /> : <MdLightMode size={22} />}
    </Button>
  );
};

export default ThemeButton;
