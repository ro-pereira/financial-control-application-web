import { EntityState } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";

export interface ITransactionData {
  id: number;
  date: string;
  category: string;
  description?: string;
  transactionType: string;
  value: string;
}

export interface ITransactionsDataSlice {
  transactionsData: EntityState<ITransactionData>;
}

export interface IModalState {
  openModalAddTransaction: boolean;
  // openModalEditTransaction: boolean;
  currentIndexTransactionEdit: number | undefined;
  currentTransactionTypeModalRecords: string;
  currentCategoryModalRecords: string;
  isCategorySelected: boolean;
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
  currentTransactionDelete: number | undefined;
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
  submitForm: () => void;
}

export interface IModalRecordsAddTransaction {
  openModalAddTransaction: boolean;
}

export interface IButtonApllyDefault {
  label: string;
  actionApply: any
}

export interface IButtonResetDefault {
  label: string;
  actionReset: any;
}

export interface IChip {
  item: string;
  onSelectedChip: (e: string) => void;
  selectedItems?: string[];
  variant: string;
}

export interface ITransactionTypeChip {
  title: string;
  transactionsTypeSelected: string[];
  onSelectTransactionType: (item: string) => void;
  style?: string
}

export interface ICategoriesChips {
  title: string;
  categoriesSelected: string[];
  onSelectCategory: (item: string) => void;
  style?: string
}

export interface IFormField {
  fieldName: string;
  config: IInputFieldConfig;
}


export interface IFilterSlice {
  activeFilters: IFilters;
}

export interface IFilters {
  categories: string[];
  transactionType: string[];
  activeFilter: boolean;
}