import { createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../../interface";

const initialState: IModalState = {
  openModalAddTransaction: false,
  currentTransactionTypeModalRecords: "deposit",
  currentCategoryModalRecords: "",
  isCategorySelected: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleOpenAddTrnsactionModal: (state, action) => {
      state.openModalAddTransaction = action.payload.openOfClose;
    },
    setCurrentTransctionTypeModalRecords: (state, action) => {
      state.currentTransactionTypeModalRecords = action.payload.transactionType;
    },
    setIsCategorySelected: (state, action) => {
      state.isCategorySelected = action.payload;
    },
    setCurrentCategorylModalRecords: (state, action) => {
      state.currentCategoryModalRecords = action.payload.category;
    },
  },
});

export const {
  toggleOpenAddTrnsactionModal,
  setCurrentTransctionTypeModalRecords,
  setIsCategorySelected,
  setCurrentCategorylModalRecords,
} = modalSlice.actions;
export default modalSlice.reducer;
