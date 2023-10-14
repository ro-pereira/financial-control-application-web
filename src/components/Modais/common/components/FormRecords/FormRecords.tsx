import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ButtonApllyDefault from "../../../../../common/components/ButtonApplyDefault/ButtonApplyDefault";
import ButtonResetDefault from "../../../../../common/components/ButtonResetDefault/ButtonResetDefault";
import CategoriesChips from "../../../../../common/components/CategoriesChips/CategoriesChips";
import TransactionTypeChip from "../../../../../common/components/TransactionTypeChips/TransactionTypeChips";
import { handleChipSelection } from "../../../../../common/utilsCommon";
import { IFormRecords, IInputFieldConfig } from "../../../../../interface";
import { useAppSelector } from "../../../../../store/hook";
import {
  getAddFormInitialData,
  getInputsConfig,
  handleActionsForm,
} from "../../../utilsModais";
import FormControlValidation from "./FormControlValidatinho";
import FormField from "./FormField";

const FormRecords = ({
  form,
  setForm,
  id,
  setId,
  submitForm,
}: IFormRecords) => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const newId = id + 1;
  const {
    currentTransactionTypeModalRecords,
    currentCategoryModalRecords,
    isCategorySelected,
  } = useAppSelector((state) => state.reducer.modal);

  const categories = useAppSelector(
    (state) => state.reducer.categoriesAndTransactionStatus.categories
  );

  const {
    handleChangeInputsRecords,
    handleCloseAddModal,
    handleChangeTransactionTypeSelected,
    handleChangeCategorySelectedAddTransaction,
  } = handleActionsForm(dispatch, form, setForm);

  const inputFieldsConfig = getInputsConfig(
    form,
    handleChangeInputsRecords,
    isCategorySelected
  );

  useEffect(() => {
    const isCategorySelected = currentCategoryModalRecords !== "";
    handleChangeCategorySelectedAddTransaction(currentCategoryModalRecords);

    dispatch({
      type: "modal/setIsCategorySelected",
      payload: isCategorySelected,
    });
  }, [currentCategoryModalRecords]);

  useEffect(() => {
    handleChangeTransactionTypeSelected(currentTransactionTypeModalRecords);
  }, [currentTransactionTypeModalRecords, form.transactionType]);

  const { handleSelectedTransactionModal, handleSelectedCategoryModal } =
    handleChipSelection();

  const handleCloseModal = () => {
    handleCloseAddModal();
    setForm(getAddFormInitialData(newId));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const formCheck = event.currentTarget;

    if (!formCheck.checkValidity()) {
      setValidated(true);
      return;
    }

    submitForm();
    // const newId = id + 1;
    setForm(getAddFormInitialData(newId));
    setId(newId);
    handleCloseModal();
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="d-flex flex-column gap-5"
    >
      {inputFieldsConfig &&
        Object.keys(inputFieldsConfig).map((fieldName: string) => {
          const config =
            inputFieldsConfig[fieldName as keyof IInputFieldConfig];
          return (
            <Form.Group
              className="d-flex flex-column"
              controlId={`validationCustom${fieldName}`}
              key={fieldName}
            >
              <FormField fieldName={fieldName} config={config} />
              {fieldName === "category" && categories.length > 0 && (
                <div
                  className={`modal__body__form-category d-flex flex-column gap-2 ${
                    !isCategorySelected && "mt-5"
                  }`}
                >
                  <CategoriesChips
                    categoriesSelected={[currentCategoryModalRecords]}
                    title="Existing categories"
                    onSelectCategory={handleSelectedCategoryModal}
                  />
                </div>
              )}
              <FormControlValidation fieldName={fieldName} />
            </Form.Group>
          );
        })}

      <Form.Group>
        <div className=" d-flex flex-column gap-2">
          <TransactionTypeChip
            title="Transaction Type"
            transactionsTypeSelected={[currentTransactionTypeModalRecords]}
            onSelectTransactionType={handleSelectedTransactionModal}
          />
        </div>
      </Form.Group>

      <Col className="modal__footer d-flex flex-row align-items-center justify-content-between">
        <ButtonResetDefault label="Close" actionReset={handleCloseModal} />
        <ButtonApllyDefault label="Save Changes" />
      </Col>
    </Form>
  );
};

export default FormRecords;
