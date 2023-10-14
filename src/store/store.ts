import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "../store/slices/modalSlice";
import transactionReducer from "../store/slices/transactionsSlices";
import categoriesAndTransactionStatusReducer from "../store/slices/categoriesAndTransactionStatusSlice"

const rootReducer = combineReducers({
  transactions: transactionReducer,
  modal: modalReducer,
  categoriesAndTransactionStatus: categoriesAndTransactionStatusReducer
});

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
