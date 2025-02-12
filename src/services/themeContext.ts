import { createContext } from "react";

// Define the shape of the context value
export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Create the context with an undefined initial value
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
