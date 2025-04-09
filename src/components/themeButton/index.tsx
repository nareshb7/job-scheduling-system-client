import { ThemeType } from "authContext/types";
import Button from "common/button";
import React from "react";
import { MdDarkMode, MdLightMode, MdOutlineLightMode } from "react-icons/md";

export interface ThemeButtonProps {
  toggleTheme: () => void;
  theme: ThemeType;
}

const ThemeButton = ({ toggleTheme, theme }: ThemeButtonProps) => {
  return (
    <Button
      onClick={toggleTheme}
      className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
    >
      {theme === "dark" ? (
        <MdDarkMode fontSize={22} />
      ) : (
        <MdLightMode fontSize={22} />
      )}
    </Button>
  );
};

export default ThemeButton;
