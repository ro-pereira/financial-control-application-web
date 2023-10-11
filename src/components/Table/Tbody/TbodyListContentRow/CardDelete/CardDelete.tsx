import React from "react";
import { Button, Card } from "react-bootstrap";
import "./cardDelete.sass";
import { ICardDelete } from "../../../../../interface";

const CardDelete = ({
  setCurrentTransactionDelete,
}: ICardDelete) => {

  return (
    <div className="card__delete">
      <div className="card__delete__arrowUp" />
      <Card border="danger" className="card__delete__content">
        <Card.Header style={{ color: "black" }}>
          Do you really want to delete?
        </Card.Header>
        <Card.Body className="flex-row layout-space-between">
          <Button variant="danger">
            Delete
          </Button>
          <Button
            variant="primary"
            onClick={() => setCurrentTransactionDelete(undefined)}
          >
            Cancel
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDelete;
