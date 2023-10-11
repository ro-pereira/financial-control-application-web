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

export interface IButtonIconTbody {
  icon: string;
  name: string;
  id: number | undefined;
  actionButton: (id: number | undefined) => void;
}

export interface ICardDelete {
  setCurrentTransactionDelete: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}

