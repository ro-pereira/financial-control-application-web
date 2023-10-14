import { Form } from "react-bootstrap";
import { IFormField } from "../../../../../interface";
import "../../../modais.sass";

const FormField = ({ fieldName, config }: IFormField) => {
  return (
    <>
      <Form.Label className={config.disabeButton}>
        {fieldName[0].toUpperCase() + fieldName.substring(1)}
        {/* EM ALGUM LUGAR TEM ESSA MESMA FUNCIONALIDADE, COLOCAR EM COMMOM */}
      </Form.Label>
      <Form.Control
        type={config.type}
        as={config.type === "textarea" ? "textarea" : undefined}
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
