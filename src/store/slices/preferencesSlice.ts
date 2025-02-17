import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreferencesState {
  language: string;
  theme: "dark" | "light";
  activeMenu: string;
}

const initialState: PreferencesState = {
  language: "EN",
  theme: "dark",
  activeMenu: "AboutMe",
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    toggleTheme: state => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setActiveMenu: (state, action: PayloadAction<string>) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { setLanguage, toggleTheme, setActiveMenu } = preferencesSlice.actions;
export default preferencesSlice.reducer;
