import { useAppSelector } from "../../../store/hook";
import {
  selectTransactionEntities
} from "../../../store/slices/transactionsSlices";
import TbodyListContentRow from "./TbodyListContentRow/TbodyListContentRow";

const Tbody = () => {
  const transactions = useAppSelector(selectTransactionEntities) || [];

  return (
    <tbody>
      {transactions.map((transaction) => {
        return (
          <TbodyListContentRow
            key={transaction?.id}
            transaction={transaction}
          />
        );
      })}
    </tbody>
  );
};

export default Tbody;
