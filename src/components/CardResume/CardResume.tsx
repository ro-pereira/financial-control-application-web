import { Card } from "react-bootstrap";
import { getTransactionColor } from "../../common/utilsCommon";
import { useAppSelector } from "../../store/hook";
import { transactionsData } from "../../store/slices/transactionsSlices";
import CardHeade from "./CardHeade/CardHeade";
import CardItem from "./CardItem/CardItem";
import "./cardResume.sass";
import { filterType, handleColorValue } from "./utilsCardResume";

const CardResume = () => {
  const transactions = useAppSelector(transactionsData) || [];
  const deposit = filterType(transactions, "deposit");
  const cashout = filterType(transactions, "cashout");
  const colorValue = handleColorValue(deposit, cashout);
  const colorDeposit = getTransactionColor("deposit");
  const colorCashout = getTransactionColor("cashout");

  return (
    <Card className="card__resume" border="light" text="white">
      <CardHeade title="Resume" />
      <Card.Body>
        <CardItem
          label="Deposit"
          value={deposit}
          className="card__resume__deposit"
          colorValue={colorCashout}
        />
        <CardItem
          label="Cashout"
          value={cashout}
          className="card__resume__cashout"
          colorValue={colorDeposit}
        />
      </Card.Body>
      <Card.Footer>
        <CardItem
          label="Balance"
          value={deposit - cashout}
          className="card__resume__foorter"
          colorValue={colorValue}
        />
      </Card.Footer>
    </Card>
  );
};

export default CardResume;
