import { Card, Stack } from "react-bootstrap";
import { insertDecimalPlace } from "../../../common/utilsCommon";
import { ICardItem } from "../../../interface";

const CardItem = ({ label, value, className, colorValue }: ICardItem) => {
  return (
    <Stack direction="horizontal">
      <Card.Text>{label}</Card.Text>
      <Card.Text
        className={`mb-3 ms-auto ${className}`}
        style={{ color: colorValue }}
      >
        {insertDecimalPlace(value)}
      </Card.Text>
    </Stack>
  );
};

export default CardItem;
