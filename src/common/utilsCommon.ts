import { useDispatch } from "react-redux";
import { setCurrentCategorylModalRecords, setCurrentTransctionTypeModalRecords } from "../store/slices/modalSlice";
import { useAppSelector } from "../store/hook";

export const insertDecimalPlace = (value: number) => {
  return value.toFixed(2).toString();
};

export const replacePeriodWithComma = (value: string | undefined) => {
  return value?.replace(".", ",");
};

export const getTransactionColor = (transactionType: string | undefined) => {
  const currentColor =
    transactionType === "cashout" ? "rgb(187, 0, 0)" : "rgb(0, 85, 85)";
  return currentColor;
};

export const removeDashSymbolInWord = (label: string) => {
  return label.replace(/-/g, " ");
};

export const capitalizeFirstLetter = (label: string) => {
  return label.charAt(0).toUpperCase() + label.substring(1);
};

export const handleChipSelection = () => {
  const dispatch = useDispatch();
  const { currentCategoryModalRecords } = useAppSelector(
    (state) => state.reducer.modal
  );


  const handleSelectedTransactionModal = (item: string) => {
    return dispatch(
      setCurrentTransctionTypeModalRecords({ transactionType: item })
    );
  };

  const handleSelectedCategoryModal = (item: string) => {
    return dispatch(
      setCurrentCategorylModalRecords({
        category: currentCategoryModalRecords === item ? "" : item,
      })
    );
  };

  return {
    handleSelectedTransactionModal,
    handleSelectedCategoryModal,
  };
};

// }

export const handleVariantForItem = (item: string, selectedItem: boolean) => {
  const variantMap: Record<string, string> = {
    cashout: "danger",
    deposit: "success",
  };

  const variantOutLineMap: Record<string, string> = {
    cashout: "outline-danger",
    deposit: "outline-success",
  };

  if (selectedItem && item) {
    return variantMap[item] || "secondary";
  }

  return variantOutLineMap[item] || "outline-secondary";
};

export const insertDashSymbolInWord = (label: string) => {
  return label.split(" ").join("-").toLocaleLowerCase();
};
