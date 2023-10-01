import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      onClick={() => {
        theme.updateThemeState(theme.themeState === "light" ? "dark" : "light");
      }}
    >
      <p title="switch theme">
        {theme.themeState === "light" ? "Turn Off" : "Turn On"}
      </p>
    </div>
  );
};

export default ThemeToggler;
