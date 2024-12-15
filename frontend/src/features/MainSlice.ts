import { createSlice } from "@reduxjs/toolkit";

// Stato iniziale per la slice
interface MainState {
  isToggleMenuOpen: boolean;
}

const initialState: MainState = {
  isToggleMenuOpen: false,
};

// Configura la slice
const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    // Reducer per cambiare lo stato di isToggleMenuOpen
    toggleMenu: (state) => {
      state.isToggleMenuOpen = !state.isToggleMenuOpen;
    },
  },
});

// Esporta le azioni e il reducer
export const { toggleMenu } = MainSlice.actions; // Esporta l'azione
export default MainSlice.reducer; // Esporta il reducer
