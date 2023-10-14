import { createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../../interface";

const initialState: IModalState = {
  openModalAddTransaction: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleOpenAddTrnsactionModal: (state, action) => {
      state.openModalAddTransaction = action.payload.openOfClose;
    },
  },
});

export const { toggleOpenAddTrnsactionModal } = modalSlice.actions;
export default modalSlice.reducer;
