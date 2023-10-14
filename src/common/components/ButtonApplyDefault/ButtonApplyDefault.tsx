import { Button } from "react-bootstrap";
import { IButtonApllyDefault } from "../../../interface";

const ButtonApllyDefault = ({ label }: IButtonApllyDefault) => {
  return (
    <Button variant="warning" type="submit">
      {label}
    </Button>
  );
};

export default ButtonApllyDefault;
