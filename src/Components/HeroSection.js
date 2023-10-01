import React, { useContext, useState } from "react";
import AppTheme from "../Color";
import ThemeContext from "../Context/ThemeContext";
const HeroSection = () => {
  const theme = useContext(ThemeContext);
  console.log('theme', theme);
  const currentTheme = AppTheme[theme.themeState];

  console.log('Current Thene', currentTheme);
  return (
    <div
      style={{
        padding: "1",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API Theme Toggler</h1>
      <p>This is the Theme Switcher Implementation</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}
        onClick={() => {
          theme.updateThemeState(theme.themeState === "light" ? "dark" : "light");
        }}
      >
        Change the Theme
      </button>
    </div>
  );
};

export default HeroSection;
