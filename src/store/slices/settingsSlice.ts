import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  language: string;
  theme:  "dark" | "light";
}

const initialState: SettingsState = {
  language: "EN",
  theme: "dark",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    toggleTheme: state => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setLanguage, toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
