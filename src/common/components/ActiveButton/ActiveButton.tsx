import { Button } from "react-bootstrap";
import {
  capitalizeFirstLetter,
  removeDashSymbolInWord,
} from "../../utilsCommon";
import { IActiveButton } from "../../../interface";

const ActiveButton = ({ open, toggleOpen, label }: IActiveButton) => {
  const labelWithCaptalizeFirstLetter = capitalizeFirstLetter(
    removeDashSymbolInWord(label)
  );

  return (
    <Button
      onClick={toggleOpen}
      aria-expanded={open}
      active={open}
      variant="light"
      size="lg"
      type="button"
      className={`${label}__button-active`}
    >
      {labelWithCaptalizeFirstLetter}
    </Button>
  );
};

export default ActiveButton;
