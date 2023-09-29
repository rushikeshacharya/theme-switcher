import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
        <p title="switch theme">{themeMode === "light"? "Turn Off": "Turn On"}</p>
    </div>
  );
};

export default ThemeToggler;
