import { Button } from "react-bootstrap";
import { IButtonResetDefault } from "../../../interface";

const ButtonResetDefault = ({ label, actionReset }: IButtonResetDefault) => {
  return (
    <Button variant="outline-dark" type="reset" onClick={actionReset}>
      {label}
    </Button>
  );
};

export default ButtonResetDefault;
