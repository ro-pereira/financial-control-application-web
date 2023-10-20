import { format } from "date-fns";
import { IInputFieldsConfig, ITransactionData } from "../../interface";
import { ChangeEvent, Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import {
  addNewTransaction,
  updateTransaction,
} from "../../store/slices/transactionsSlices";
import {
  handleCurrentIndexTransactionEdit,
  setCurrentCategorylModalRecords,
  setCurrentTransctionTypeModalRecords,
  toggleOpenAddTrnsactionModal,
} from "../../store/slices/modalSlice";
import {
  addCategory,
  removeCategory,
} from "../../store/slices/categoriesAndTransactionStatusSlice";

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
  isCategorySelected: boolean
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

  const handleChangeCategorySelectedAddTransaction = (
    categorySelected: string
  ) => {
    dispatch(setCurrentCategorylModalRecords({ category: categorySelected }));
    setForm({
      ...form,
      category: categorySelected,
    });
  };

  const handleChangeTransactionTypeSelected = (
    transactionTypeSelected: string
  ) => {
    setForm({
      ...form,
      transactionType: transactionTypeSelected,
    });
  };

  const handleCloseAddModal = () => {
    dispatch(handleCurrentIndexTransactionEdit({ id: undefined }));
    dispatch(setCurrentCategorylModalRecords({ category: "" }));
    dispatch(
      setCurrentTransctionTypeModalRecords({ transactionType: "deposit" })
    );
    dispatch(toggleOpenAddTrnsactionModal({ openOfClose: false }));
    return;
  };

  const editFormPopulation = (transactionEdit: ITransactionData) => {
    if (transactionEdit && form.value === "") {
      setForm((prevEditForm) => ({
        ...prevEditForm,
        id: transactionEdit.id,
        date: format(new Date(transactionEdit.date), "yyyy-MM-dd"),
        category: transactionEdit.category,
        description: transactionEdit.description,
        transactionType: transactionEdit.transactionType,
        value: transactionEdit.value,
      }));

      dispatch(
        setCurrentTransctionTypeModalRecords({
          transactionType: transactionEdit.transactionType,
        })
      );

      dispatch(
        setCurrentCategorylModalRecords({ category: transactionEdit.category })
      );
    }
  };

  return {
    handleChangeInputsRecords,
    handleCloseAddModal,
    handleChangeTransactionTypeSelected,
    handleChangeCategorySelectedAddTransaction,
    editFormPopulation,
  };
};

export const handleSubmitForm = (
  dispatch: Dispatch<AnyAction>,
  form: ITransactionData,
  categories: string[],
  transactionEdit?: ITransactionData | undefined,
  transactions?: (ITransactionData | undefined)[]
) => {
  const checkIfTheListHasDuplicateItems = (
    list?: (ITransactionData | undefined)[],
    item?: string
  ) => {
    const listFiltered = list?.filter((e) => e?.category === item);
    return listFiltered?.length;
  };

  const checkNewItemBelongsToList = (item: string) => {
    return categories.includes(item);
  };
  const { category } = form;

  const handleSubmitOfFormAddModal = () => {
    try {
      dispatch(addNewTransaction(form));
      if (!checkNewItemBelongsToList(category)) {
        dispatch(addCategory(category));
        return;
      }
    } catch (error) {
      console.error("Erro ao adicionar transação:", error);
    }
  };

  const handleSubmitOfFormEditModal = () => {
    try {
      dispatch(updateTransaction(form));
      if (transactionEdit) {
        if (!checkNewItemBelongsToList(category)) {
          if (
            checkIfTheListHasDuplicateItems(
              transactions,
              transactionEdit.category
            ) === 1
          ) {
            dispatch(removeCategory(transactionEdit.category));
          }
          dispatch(addCategory(category));
        } else {
          if (
            checkIfTheListHasDuplicateItems(
              transactions,
              transactionEdit.category
            ) === 1
          ) {
            dispatch(removeCategory(transactionEdit.category));
          }
        }
      }
    } catch (error) {
      console.error("Erro ao editar transação:", error);
    }
  };

  return { handleSubmitOfFormAddModal, handleSubmitOfFormEditModal };
};
