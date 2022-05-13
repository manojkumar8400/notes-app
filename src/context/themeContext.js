import React from 'react';
import { createContext } from 'react';
import { useContext, useState } from 'react';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { useTheme, ThemeProvider }