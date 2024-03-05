import { createSlice } from "@reduxjs/toolkit";

export const searchBarReducer = createSlice({
  name: "search",
  initialState: {
    value: "",
    page: 1,
    context: "all",
  },
  reducers: {
    set: (state, { payload }) => {
      state.value = payload;
    },
    setP: (state, { payload }) => {
      // on place un if plutot qu'une condition ternaire afin d'eviter de perdre le controle sur les
      // données qui sont set , en effet ici le conde ne fera l'instruction que si la condition est vérifier .
      if (payload.pageTest > 0 && payload.pageTest <= payload.pageMax) {
        state.page = payload.pageTest;
      }
    },
    setC: (state, { payload }) => {
      state.context = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, setP, setC } = searchBarReducer.actions;

export default searchBarReducer.reducer;
