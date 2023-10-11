import { Card } from "react-bootstrap";
import { ICardHeade } from "../../../interface";

const CardHeade = ({ title }: ICardHeade) => (
  <Card.Header>
    <Card.Text className="text-center card__resume__header">{title}</Card.Text>
  </Card.Header>
);

export default CardHeade;
