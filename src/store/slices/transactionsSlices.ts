import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { ITransactionData } from "./../../interface";

const initialState: ITransactionData[] = [
  {
    id: 0,
    date: "11/01/2022",
    category: "compras",
    description: "test",
    transactionType: "cashout",
    value: "24.00",
  },
  {
    id: 1,
    date: "11/01/2022",
    category: "compras",
    description: "test",
    transactionType: "deposit",
    value: "22.10",
  },
];

export const transactionsDataSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
});

export const transactionsData = (state: RootState) => state.transactions;
export default transactionsDataSlice.reducer;
