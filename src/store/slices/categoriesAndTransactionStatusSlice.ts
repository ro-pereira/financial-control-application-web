import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [] as string[],
  transactionTypes: ["deposit", "cashout"],
};

export const categoriesAndTransactionsSlice = createSlice({
  name: "categoriesAndTransactions",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const newCategory = action.payload;
      state.categories.push(newCategory);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category !== action.payload
      );
    },
  },
});

export const { addCategory, removeCategory } =
  categoriesAndTransactionsSlice.actions;

export default categoriesAndTransactionsSlice.reducer;
