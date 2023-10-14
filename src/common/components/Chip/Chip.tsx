import { Button } from "react-bootstrap";
import { IChip } from "../../../interface";
import "./chip.sass";

const Chip = ({ item, onSelectedChip: handleSelectedChip, variant }: IChip) => {
  return (
    <Button
      className="button__crips"
      key={item}
      variant={variant}
      onClick={() => handleSelectedChip(item)}
    >
      {item}
    </Button>
  );
};

export default Chip;
