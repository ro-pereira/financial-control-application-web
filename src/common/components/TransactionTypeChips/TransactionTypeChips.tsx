import { Stack } from "react-bootstrap";
import { ITransactionTypeChip } from "../../../interface";
import { useAppSelector } from "../../../store/hook";
import {
  handleVariantForItem,
  insertDashSymbolInWord,
} from "../../utilsCommon";
import Chip from "../Chip/Chip";

const TransactionTypeChip = ({
  title,
  transactionsTypeSelected,
  onSelectTransactionType,
}: ITransactionTypeChip) => {
  const originOfTheStyle = insertDashSymbolInWord(title);

  const transactionType = useAppSelector(
    (state) => state.reducer.categoriesAndTransactionStatus.transactionTypes
  );

  const handleSelectTransactionType = (item: string) => {
    onSelectTransactionType(item);
  };

  return (
    <>
      <div className={`transactionType-chips__title-${originOfTheStyle}`}>
        <span
          className={`transactionType-chips__title__span-${originOfTheStyle}`}
        >
          {title}
        </span>
      </div>
      <Stack
        direction="horizontal"
        gap={3}
        className={`d-flex flex-wrap transactionType-chips__container-${originOfTheStyle}`}
      >
        {transactionType.map((item) => {
          const variant = handleVariantForItem(
            item,
            transactionsTypeSelected.includes(item)
          );
          return (
            <Chip
              key={item}
              item={item}
              onSelectedChip={handleSelectTransactionType}
              variant={variant}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default TransactionTypeChip;
