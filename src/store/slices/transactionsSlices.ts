import {
  PayloadAction,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { ITransactionData, ITransactionsDataSlice } from "./../../interface";

const transactionsAdapter = createEntityAdapter<ITransactionData>({
  selectId: (transactionsData) => transactionsData.id,
});

const initialState: ITransactionsDataSlice = {
  transactionsData: transactionsAdapter.getInitialState(),
};

export const transactionsDataSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addNewTransaction: (state, action: PayloadAction<ITransactionData>) => {
      transactionsAdapter.addOne(state.transactionsData, action.payload);
    },
    removeTransaction: (state, action: PayloadAction<number>) => {
      transactionsAdapter.removeOne(state.transactionsData, action.payload);
    },
    updateTransaction: (state, action: PayloadAction<ITransactionData>) => {
      transactionsAdapter.updateOne(state.transactionsData, {
        id: action.payload.id,
        changes: { ...action.payload },
      });
    },
  },
});

export const { addNewTransaction, removeTransaction, updateTransaction } =
  transactionsDataSlice.actions;

const selectTransactions = (state: RootState) =>
  state.reducer.transactions.transactionsData;

const selectFilters = (state: RootState) => state.reducer.filters.activeFilters;

export const selectTransactionEntities = createSelector(
  [selectTransactions],
  (transactionsState) => Object.values(transactionsState.entities)
);

export default transactionsDataSlice.reducer;

export const selectFilteredTransactions = createSelector(
  [selectTransactionEntities, (state: RootState) => selectFilters(state)],
  (transactionEntities, filters) => {
    const { transactionType, categories } = filters;

    const allTransactions = Object.values(transactionEntities);

    if (!transactionType && !categories.length) {
      return allTransactions;
    }

    return allTransactions.filter((transaction) => {
      const matchesTransactionType =
        transactionType.length === 0 ||
        (transaction && transactionType.includes(transaction.transactionType));

      const matchesCategories =
        categories.length === 0 ||
        (transaction && categories.includes(transaction.category));

      return matchesTransactionType && matchesCategories;
    });
  }
);
