export const insertDecimalPlace = (value: number) => {
  return value.toFixed(2).toString();
};

export const replacePeriodWithComma = (value: string | undefined) => {
  return value?.replace(".", ",");
};

export const getTransactionColor = (transactionType: string | undefined) => {
  return transactionType === "deposit" ? "rgb(0, 85, 85)" : "rgb(187, 0, 0)";
};
