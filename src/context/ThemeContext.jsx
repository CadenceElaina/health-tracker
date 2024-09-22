import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('');

    const updateTheme = () => {
        const hour = new Date().getHours();

        if (hour >= 6 && hour < 12) {
            setTheme('morning');
        } else if (hour >= 12 && hour < 18) {
            setTheme('afternoon');
        } else if (hour >= 18 && hour < 21) {
            setTheme('evening');
        } else {
            setTheme('night');
        }
    };

    useEffect(() => {
        updateTheme(); // Initial theme set
        const interval = setInterval(updateTheme, 3600000); // Update every hour
        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`theme-container ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
