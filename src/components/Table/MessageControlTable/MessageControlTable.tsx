import { IMessageControlTable } from "../../../interface";
import "./messageControlTable.sass";

const MessageControlTable = ({
  arraySize,
  activeFilter,
  message,
}: IMessageControlTable) => {
  return (
    <>
      {arraySize === 0 && activeFilter && (
        <div className="message-control d-flex justify-content-md-center align-items-center">
          <span className="message-control__title">{message}</span>
        </div>
      )}
    </>
  );
};

export default MessageControlTable;
