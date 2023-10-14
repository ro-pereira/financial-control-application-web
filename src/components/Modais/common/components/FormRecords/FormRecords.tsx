import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { IFormRecords, IInputFieldConfig } from "../../../../../interface";
import {
  getAddFormInitialData,
  getInputsConfig,
  handleActionsForm,
} from "../../utilsModais";
import FormField from "./FormField";
import FormControlValidation from "./FormControlValidatinho";
import ButtonApllyDefault from "../../../../../common/components/ButtonApplyDefault/ButtonApplyDefault";
import ButtonResetDefault from "../../../../../common/components/ButtonResetDefault/ButtonResetDefault";
import { useDispatch } from "react-redux";

const FormRecords = ({
  form,
  setForm,
  id,
  setId,
  submitForm,
}: IFormRecords) => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const { handleChangeInputsRecords, handleCloseAddModal } = handleActionsForm(
    dispatch,
    form,
    setForm
  );

  const inputFieldsConfig = getInputsConfig(form, handleChangeInputsRecords);

  const handleCloseModal = () => {
    handleCloseAddModal();
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
    const newId = id + 1;
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
              <FormControlValidation fieldName={fieldName} />
            </Form.Group>
          );
        })}

      <Col className="modal__footer d-flex flex-row align-items-center justify-content-between">
        <ButtonResetDefault label="Close" actionReset={handleCloseModal} />
        <ButtonApllyDefault label="Save Changes" />
      </Col>
    </Form>
  );
};

export default FormRecords;
