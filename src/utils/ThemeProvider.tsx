import { useEffect, ReactNode } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/slices/preferencesSlice";
import { RootState } from "../store/store";
import { createContext } from "react";
interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.preferences.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme: () => dispatch(toggleTheme()) }}>{children}</ThemeContext.Provider>;
};
