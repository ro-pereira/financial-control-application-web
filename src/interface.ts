import { ChangeEvent } from "react";

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

export interface ICardHeade {
  title: string;
}

export interface ICardItem {
  label: string;
  value: number;
  className: string;
  colorValue?: string;
}

export interface IActiveButton {
  open: boolean;
  toggleOpen: () => void;
  label: string;
}

export interface IModalHeader {
  title: string;
}

export interface IInputFieldConfig {
  type: string;
  placeholder: string;
  maxLength?: number;
  rows?: number;
  required: boolean;
  value: string | undefined;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  disabeButton?: string;
}

export interface IInputFieldsConfig {
  [key: string]: IInputFieldConfig;
}


export interface IFormRecords {
  form: ITransactionData;
  setForm: React.Dispatch<React.SetStateAction<ITransactionData>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
}

export interface IModalRecordsAddTransaction {
  openModalAddTransaction: boolean
}
