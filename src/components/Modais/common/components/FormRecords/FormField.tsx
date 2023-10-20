import { Form } from "react-bootstrap";
import { IFormField } from "../../../../../interface";
import "../../../modais.sass";
import { capitalizeFirstLetter } from "../../../../../common/utilsCommon";

const FormField = ({ fieldName, config }: IFormField) => {
  const configType = config.type === "textarea" ? "textarea" : undefined;

  const label = capitalizeFirstLetter(fieldName);

  return (
    <>
      <Form.Label className={config.disabeButton}>{label}</Form.Label>
      <Form.Control
        type={config.type}
        as={configType}
        name={fieldName}
        placeholder={config.placeholder}
        autoFocus
        maxLength={config.maxLength}
        rows={config.rows}
        required={config.required}
        value={config.value}
        onChange={config.onChange}
        className={config.disabeButton}
      />
    </>
  );
};

export default FormField;
