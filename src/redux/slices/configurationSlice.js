import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("selectedLang") || navigator.language,
  desplegables: 
  {
    programa:  true,
    echoes:  false,
    noticias:  false
  }
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("selectedLang", action.payload);
    },
    setDesplegablesPrograma: (state,action) => {
      state.desplegables.programa = action.payload;
      state.desplegables.echoes = false;
      state.desplegables.noticias = false;
    },
    setDesplegablesEchoes: (state,action) => {
      state.desplegables.echoes = action.payload;
      state.desplegables.programa = false;
      state.desplegables.noticias = false;
    },
    setDesplegablesNoticias: (state,action) => {
      state.desplegables.noticias = action.payload;
      state.desplegables.echoes = false;
      state.desplegables.programa = false;
    },
  },
});

export const { setLanguage, setDesplegablesPrograma, setDesplegablesEchoes , setDesplegablesNoticias} = configurationSlice.actions;
