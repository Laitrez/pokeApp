import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./layout/searchBar.reducer";
export default configureStore({
  reducer: {
    search: searchBarReducer,
  },
});
