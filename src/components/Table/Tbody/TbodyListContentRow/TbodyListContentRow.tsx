import { useState } from "react";
import { Stack } from "react-bootstrap";
import iconDelete from "../../../../assets/icon-delete.png";
import iconEdit from "../../../../assets/icon-edit.png";
import {
    getTransactionColor,
    insertDecimalPlace,
    replacePeriodWithComma,
} from "../../../../common/utilsCommon";
import { ITbodyListContetRow } from "../../../../interface";
import ButtonIconTbody from "./ButtonIconTbody/ButtonIconTbody";
import CardDelete from "./CardDelete/CardDelete";

const TbodyListContentRow = ({ transaction }: ITbodyListContetRow) => {
  const value = replacePeriodWithComma(
    insertDecimalPlace(Number(transaction?.value))
  );

  const [currentTransactionDelete, setCurrentTransactionDelete] = useState<
    number | undefined
  >(undefined);

  const transactionTypeColor = getTransactionColor(
    transaction?.transactionType
  );

  const handleDeleteTransaction = (id: number | undefined) => {
    setCurrentTransactionDelete(id);
  };

  return (
    <tr>
      <td>{transaction?.date}</td>
      <td>{transaction?.category}</td>
      <td>{transaction?.description}</td>
      <td style={{ color: transactionTypeColor }}>{value}</td>
      <td style={{ position: "relative" }} scope="col">
        <Stack className="list-of-transaction__td__buttons flex-row justify-content-around align-items-center">
          <ButtonIconTbody
            icon={iconEdit}
            name="edit"
            id={transaction?.id}
            actionButton={() => {}}
          />
          <ButtonIconTbody
            icon={iconDelete}
            name="delete"
            id={transaction?.id}
            actionButton={handleDeleteTransaction}
          />
          {currentTransactionDelete === transaction?.id && (
            <CardDelete
              setCurrentTransactionDelete={setCurrentTransactionDelete}
            />
          )}
        </Stack>
      </td>
    </tr>
  );
};

export default TbodyListContentRow;
