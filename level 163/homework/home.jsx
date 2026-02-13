import { createContext, useContext, useState } from "react";

// * create context
// * create provider
// * create custom hook

// 1) 
const ThemeContext = createContext(null);

// 2)
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => setTheme(p => p === 'dark' ? 'light' : 'dark');
    const setDark = () => setTheme('dark');
    const setLight = () => setTheme('light');

    const isDark = theme === 'dark';
    const isLight = theme === 'light';

    const value = {
        theme,
        setTheme,
        toggleTheme,
        setDark,
        setLight,
        isDark,
        isLight
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

// 3) 
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within themeProvider');
    return context;
}