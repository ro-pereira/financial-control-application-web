import { Button, Card, Stack } from "react-bootstrap";
import { ICardDelete } from "../../../../../interface";
import { useAppDispatch, useAppSelector } from "../../../../../store/hook";
import { removeCategory } from "../../../../../store/slices/categoriesAndTransactionStatusSlice";
import {
  removeTransaction,
  selectTransactionEntities,
} from "../../../../../store/slices/transactionsSlices";
import "./cardDelete.sass";

const CardDelete = ({
  setCurrentTransactionDelete,
  currentTransactionDelete,
}: ICardDelete) => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactionEntities) || [];
  const confirmDeleteTransacion = (): void => {
    if (currentTransactionDelete === undefined) return;

    dispatch(removeTransaction(currentTransactionDelete));

    const transactionToBeDeleted = transactions.find(
      (e) => e?.id === currentTransactionDelete
    );

    if (!transactionToBeDeleted) return;

    const isCategoryUsedByOtherTransactions = transactions.some(
      (t) =>
        t?.category === transactionToBeDeleted.category &&
        t.id !== currentTransactionDelete
    );

    if (!isCategoryUsedByOtherTransactions) {
      dispatch(removeCategory(transactionToBeDeleted.category));
    }
  };

  return (
    <div className="card__delete">
      <div className="card__delete__arrowUp" />
      <Card border="danger" className="card__delete__content">
        <Card.Header style={{ color: "black" }}>
          Do you really want to delete?
        </Card.Header>
        <Card.Body className="flex-row layout-space-between">
          <Stack gap={2}>
            <Button variant="danger" onClick={confirmDeleteTransacion}>
              Delete
            </Button>
            <Button
              variant="primary"
              onClick={() => setCurrentTransactionDelete(undefined)}
            >
              Cancel
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDelete;
