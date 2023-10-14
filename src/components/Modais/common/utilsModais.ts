import { format } from "date-fns";
import { IInputFieldsConfig, ITransactionData } from "../../../interface";
import { ChangeEvent, Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { addNewTransaction } from "../../../store/slices/transactionsSlices";
import { toggleOpenAddTrnsactionModal } from "../../../store/slices/modalSlice";

export const getAddFormInitialData = (newId: number) => {
  return {
    id: newId,
    date: format(new Date(), "yyyy-MM-dd"),
    category: "",
    description: "",
    transactionType: "",
    value: "",
  };
};

export const getInputsConfig = (
  form: ITransactionData,
  handleChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void,
  isCategorySelected?: boolean
) => {
  const { date, category, description, value } = form;

  const inputFieldsConfig: IInputFieldsConfig = {
    date: {
      type: "Date",
      placeholder: "00/00/000",
      maxLength: 10,
      rows: 2,
      required: false,
      value: date,
      onChange: handleChangeInputs,
    },
    category: {
      type: "text",
      placeholder: "compras...",
      maxLength: 20,
      required: true,
      value: category,
      onChange: handleChangeInputs,
      disabeButton: isCategorySelected ? "controlDisplay" : "d-flex",
    },
    description: {
      type: "textarea",
      placeholder: "...",
      maxLength: 80,
      rows: 2,
      required: false,
      value: description,
      onChange: handleChangeInputs,
    },
    value: {
      type: "number",
      placeholder: "100,00",
      required: true,
      value: value,
      onChange: handleChangeInputs,
    },
  };

  return inputFieldsConfig;
};

export const handleActionsForm = (
  dispatch: any,
  form: ITransactionData,
  setForm: React.Dispatch<React.SetStateAction<ITransactionData>>
) => {
  const handleChangeInputsRecords = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedField = { [event.target.name]: event.target.value };
    try {
      const dateValue = form.date;
      if (dateValue && !isNaN(new Date(dateValue).getTime())) {
        setForm({ ...form, ...updatedField });
      } else {
        console.error("Data inválida!");
      }
    } catch (error) {
      console.error("Erro ao analisar a data:", error);
    }
  };

  const handleCloseAddModal = () => {
    dispatch(toggleOpenAddTrnsactionModal({ openOfClose: false }));
    return;
  };

  return { handleChangeInputsRecords, handleCloseAddModal };
};

export const handleSubmitForm = (
  dispatch: Dispatch<AnyAction>,
  form: ITransactionData
) => {
  const { category } = form;

  const handleSubmitOfFormAddModal = () => {
    try {
      dispatch(addNewTransaction(form));
      console.log("Transação adicionada com sucesso!");
      // if (!checkNewItemBelongsToList(category)) {
      //   dispatch(addNewCategory(category));
      //   return;
      // }
    } catch (error) {
      console.error("Erro ao adicionar transação:", error);
    }
  };

  return { handleSubmitOfFormAddModal };
};
