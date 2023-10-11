import { Form } from "react-bootstrap";

const FormControlValidation = ({ fieldName }: any) => {
  return (
    <Form.Control.Feedback type="invalid" className="text-alert">
      Please provide a valid {fieldName}
    </Form.Control.Feedback>
  );
};

export default FormControlValidation;
