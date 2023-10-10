import "./table.sass";
import Tbody from "./Tbody/Tbody";
import Thead from "./Thead/Thead";

const Table = () => {
  return (
    <table className="table">
      <Thead />
      <Tbody />
    </table>
  );
};

export default Table;
