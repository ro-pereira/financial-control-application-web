import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { IFormRecords, IInputFieldConfig } from "../../../../../interface";
import { getInputsConfig, handleActionsForm } from "../../utilsModais";
import FormField from "./FormField";
import FormControlValidation from "./FormControlValidatinho";

const FormRecords = ({ form, setForm, id, setId }: IFormRecords) => {
  const [validated, setValidated] = useState(false);

  const { handleChangeInputsRecords } = handleActionsForm(form, setForm);

  const inputFieldsConfig = getInputsConfig(form, handleChangeInputsRecords);

  return (
    <Form noValidate validated={validated} className="d-flex flex-column gap-5">
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
    </Form>
  );
};

export default FormRecords;
