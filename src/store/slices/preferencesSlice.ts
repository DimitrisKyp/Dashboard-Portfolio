import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreferencesState {
  theme: "dark" | "light";
  activeMenu: string;
}

const initialState: PreferencesState = {
  theme: "dark",
  activeMenu: "homeSection",
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setActiveMenu: (state, action: PayloadAction<string>) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { toggleTheme, setActiveMenu } = preferencesSlice.actions;
export default preferencesSlice.reducer;
