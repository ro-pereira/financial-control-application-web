export interface ITransactionData {
  id: number;
  date: string;
  category: string;
  description?: string;
  transactionType: string;
  value: string;
}

export interface ITbodyListContetRow {
  transaction: ITransactionData | undefined;
}
