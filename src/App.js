import React, {useState} from 'react';
import Header from './Components/Header';
import ThemeContext from './Context/ThemeContext';
import HeroSection from './Components/HeroSection';
import './App.css';

function App() {
  const themeHook = useState("light")    
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
