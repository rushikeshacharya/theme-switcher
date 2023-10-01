import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = (props) => {
    const [themeState, setThemeState] = useState('light');
    const updateThemeState = (newState) =>{
        setThemeState(newState);
    }
    return(
        <ThemeContext.Provider value={{themeState, updateThemeState}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;