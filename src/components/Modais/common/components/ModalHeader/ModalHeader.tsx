import { Modal } from "react-bootstrap";
import { IModalHeader } from "../../../../../interface";

const ModalHeader = ({ title }: IModalHeader) => {
  return (
    <Modal.Header className="modal__header">
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
};

export default ModalHeader;
