import { ITransactionData } from "../../interface";

export const filterType = (datas: (ITransactionData | undefined)[], type: string) => {
    const filterValue = datas.filter((data) => {
      return data?.transactionType === type;
    });
  
    return filterValue.reduce(
      (acc, valorAtual) => Number(acc) + Number(valorAtual?.value),
      0
    );
  };

  export const handleColorValue = (deposit: number, cashout: number) => {
    if (deposit - cashout < 0) return "rgb(187, 0, 0)";
  
    return "rgb(0, 85, 85)";
  };
  