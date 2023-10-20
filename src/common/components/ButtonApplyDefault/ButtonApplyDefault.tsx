import { Button } from "react-bootstrap";
import { IButtonApllyDefault } from "../../../interface";

const ButtonApllyDefault = ({ label, actionApply }: IButtonApllyDefault) => {
  return (
    <Button variant="warning" type="submit" onClick={actionApply}>
      {label}
    </Button>
  );
};

export default ButtonApllyDefault;
