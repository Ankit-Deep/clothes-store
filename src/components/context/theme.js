import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// Provider for context
export const ThemeProvider = ThemeContext.Provider;

// Custom hook 
export default function useTheme(){
    return useContext(ThemeContext);
}