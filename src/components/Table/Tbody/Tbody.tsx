import { useAppSelector } from "../../../store/hook";
import { transactionsData } from "../../../store/slices/transactionsSlices";
import TbodyListContentRow from "./TbodyListContentRow/TbodyListContentRow";

const Tbody = () => {
  const transactions = useAppSelector(transactionsData) || [];

  return (
    <tbody>
      {transactions.map((transaction) => {
        return (
          <TbodyListContentRow key={transaction.id} transaction={transaction} />
        );
      })}
    </tbody>
  );
};

export default Tbody;
