import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalHeader from "../common/components/ModalHeader/ModalHeader";
import FormRecords from "../common/components/FormRecords/FormRecords";
import {
  IModalRecordsAddTransaction,
  ITransactionData,
} from "../../../interface";
import { getAddFormInitialData } from "../common/utilsModais";

const ModalRecordsAddTransaction = ({
  openModalAddTransaction,
}: IModalRecordsAddTransaction) => {
  const [id, setId] = useState(0);
  const formDefault = getAddFormInitialData(id);
  const [formAdd, setFormAdd] = useState<ITransactionData>(formDefault);

  return (
    <Modal show={openModalAddTransaction} size="sm">
      <ModalHeader title="Add records" />
      <Modal.Body>
        <FormRecords
          form={formAdd}
          setForm={setFormAdd}
          id={id}
          setId={setId}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalRecordsAddTransaction;
