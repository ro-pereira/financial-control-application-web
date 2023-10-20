import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalHeader from "../common/components/ModalHeader/ModalHeader";
import FormRecords from "../common/components/FormRecords/FormRecords";
import {
  IModalRecordsAddTransaction,
  ITransactionData,
} from "../../../interface";
import { getAddFormInitialData, handleSubmitForm } from "../utilsModais";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/hook";
import "../modais.sass";

const ModalRecordsAddTransaction = ({
  openModalAddTransaction,
}: IModalRecordsAddTransaction) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const formDefault = getAddFormInitialData(id);
  const [formAdd, setFormAdd] = useState<ITransactionData>(formDefault);
  const categories = useAppSelector(
    (state) => state.reducer.categoriesAndTransactionStatus.categories
  );
  const { handleSubmitOfFormAddModal } = handleSubmitForm(
    dispatch,
    formAdd,
    categories
  );

  return (
    <Modal show={openModalAddTransaction} className="modal" size="sm">
      <ModalHeader title="Add records" />
      <Modal.Body className="modal__body">
        <FormRecords
          form={formAdd}
          setForm={setFormAdd}
          id={id}
          setId={setId}
          submitForm={handleSubmitOfFormAddModal}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalRecordsAddTransaction;
