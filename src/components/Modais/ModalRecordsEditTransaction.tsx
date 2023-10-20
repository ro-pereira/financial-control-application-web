import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ITransactionData } from "../../interface";
import { useAppSelector } from "../../store/hook";
import { selectTransactionEntities } from "../../store/slices/transactionsSlices";
import FormRecords from "./common/components/FormRecords/FormRecords";
import ModalHeader from "./common/components/ModalHeader/ModalHeader";
import {
  getAddFormInitialData,
  handleActionsForm,
  handleSubmitForm,
} from "./utilsModais";

const ModalRecordsEditTransaction = () => {
  const dispatch = useDispatch();

  const currentIndex = useAppSelector(
    (state) => state.reducer.modal.currentIndexTransactionEdit
  );

  const [editId, setEditId] = useState<number>(currentIndex || 0);

  const formDefault = getAddFormInitialData(editId);

  const [formEdit, setFormEdit] = useState<ITransactionData>(formDefault);

  const { editFormPopulation } = handleActionsForm(
    dispatch,
    formEdit,
    setFormEdit
  );

  const openModalEdittransaction = currentIndex !== undefined;

  const categories = useAppSelector(
    (state) => state.reducer.categoriesAndTransactionStatus.categories
  );

  const transactions = useAppSelector(selectTransactionEntities) || [];

  const transactionEdit: ITransactionData | undefined =
    transactions[currentIndex as number];

  useEffect(() => {
    if (transactionEdit) editFormPopulation(transactionEdit);
  }, [transactionEdit, formEdit]);

  const { handleSubmitOfFormEditModal } = handleSubmitForm(
    dispatch,
    formEdit,
    categories,
    transactionEdit,
    transactions
  );

  return (
    <Modal show={openModalEdittransaction} size="sm">
      <ModalHeader title="Edit records" />
      <Modal.Body className="modal__body">
        <FormRecords
          form={formEdit}
          setForm={setFormEdit}
          id={editId}
          setId={setEditId}
          submitForm={handleSubmitOfFormEditModal}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalRecordsEditTransaction;
