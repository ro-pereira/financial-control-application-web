import { createSlice } from "@reduxjs/toolkit";
import { IFilterSlice } from "../../interface";

const initialState: IFilterSlice = {
  activeFilters: {
    categories: [],
    transactionType: [],
    activeFilter: false,
  },
};

export const transactionsDataSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      state.activeFilters = action.payload;
    },
    clearAllFilters: (state) => {
      state.activeFilters = initialState.activeFilters;
    },
  },
});

export const { changeFilters, clearAllFilters } = transactionsDataSlice.actions;

export default transactionsDataSlice.reducer;
