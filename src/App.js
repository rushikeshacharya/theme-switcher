import React, { useState } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ThemeState from "./Context/ThemeState";

const App = () => {
  return (
      <ThemeState>
        <Header />
        <HeroSection />
      </ThemeState>
  );
};

export default App;
