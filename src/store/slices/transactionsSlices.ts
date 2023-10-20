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
  },
});

export const { addNewTransaction, removeTransaction } = transactionsDataSlice.actions;

const selectTransactions = (state: RootState) =>
  state.reducer.transactions.transactionsData;

export const selectTransactionEntities = createSelector(
  [selectTransactions],
  (transactionsState) => Object.values(transactionsState.entities)
);

export default transactionsDataSlice.reducer;
