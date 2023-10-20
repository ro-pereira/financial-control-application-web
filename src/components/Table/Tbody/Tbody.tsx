import { ITransactionData } from "../../../interface";
import { useAppSelector } from "../../../store/hook";
import { selectFilteredTransactions } from "../../../store/slices/transactionsSlices";
import TbodyListContentRow from "./TbodyListContentRow/TbodyListContentRow";

const Tbody = () => {
  const transactions = useAppSelector(selectFilteredTransactions) || [];

  return (
    <tbody>
      {transactions.map((transaction: ITransactionData | undefined) => {
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
