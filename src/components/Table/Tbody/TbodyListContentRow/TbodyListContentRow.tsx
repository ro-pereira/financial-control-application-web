import {
  getTransactionColor,
  insertDecimalPlace,
  replacePeriodWithComma,
} from "../../../../common/utilsCommon";
import { ITbodyListContetRow } from "../../../../interface";

const TbodyListContentRow = ({ transaction }: ITbodyListContetRow) => {
  const valeu = replacePeriodWithComma(
    insertDecimalPlace(Number(transaction?.value))
  );

  const transactionTypeColor = getTransactionColor(
    transaction?.transactionType
  );

  return (
    <tr>
      <td>{transaction?.date}</td>
      <td>{transaction?.category}</td>
      <td>{transaction?.description}</td>
      <td style={{ color: transactionTypeColor }}>{valeu}</td>
    </tr>
  );
};

export default TbodyListContentRow;
