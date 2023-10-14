// import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../../store/store";

// export const categoriesAndTransactionsAdapter = createEntityAdapter<{
//   category: string;
//   transactionsType: ["deposit", "cashout"];
// }>({
//   selectId: (item) => item.category,
// });

// const initialState = categoriesAndTransactionsAdapter.getInitialState();

// export const categoriesAndTransactionsSlice = createSlice({
//   name: "categoriesAndTransactions",
//   initialState,
//   reducers: {
//     addNewCategoryAndTransaction: categoriesAndTransactionsAdapter.addOne,
//     removeCategory: categoriesAndTransactionsAdapter.removeOne,
//   },
// });

// export const { addNewCategoryAndTransaction, removeCategory } =
//   categoriesAndTransactionsSlice.actions;

// export default categoriesAndTransactionsSlice.reducer;

// export const { selectAll: allCategoriesAndTransactions } =
//   categoriesAndTransactionsAdapter.getSelectors(
//     (state: RootState) => state.reducer.categoriesAndTransactionStatus
//   );

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

const initialState = {
  categories: [] as string[],
  transactionTypes: ["deposit", "cashout"],
};

export const categoriesAndTransactionsSlice = createSlice({
  name: "categoriesAndTransactions",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      console.log(action);
      const newCategory = action.payload
      // console.log(state.categories.push);

      state.categories.push(newCategory);
      // state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category !== action.payload
      );
    },
    // addTransactionType: (state, action) => {
    //   state.transactionTypes.push(action.payload);
    // },
    // removeTransactionType: (state, action) => {
    //   state.transactionTypes = state.transactionTypes.filter(
    //     (type) => type !== action.payload
    //   );
    // },
  },
});

export const {
  addCategory,
  removeCategory,
  // addTransactionType,
  // removeTransactionType,
} = categoriesAndTransactionsSlice.actions;

// export const selectCategories = (state) => state.reducer.

export default categoriesAndTransactionsSlice.reducer;
