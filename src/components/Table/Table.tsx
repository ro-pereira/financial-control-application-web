import { useAppSelector } from "../../store/hook";
import {
  selectFilteredTransactions,
  selectTransactionEntities,
} from "../../store/slices/transactionsSlices";
import MessageControlTable from "./MessageControlTable/MessageControlTable";
import "./table.sass";
import Tbody from "./Tbody/Tbody";
import Thead from "./Thead/Thead";

const Table = () => {
  const filteredData = useAppSelector(selectFilteredTransactions);
  
  const filters = useAppSelector(
    (state) => state.reducer.filters.activeFilters
  );

  const transactionsSize =
    useAppSelector(selectTransactionEntities).length || 0;

  return (
    <>
      <table className="table">
        <Thead />
        <Tbody />
      </table>
      <MessageControlTable
        arraySize={transactionsSize}
        activeFilter={!filters.activeFilter}
        message={"Add new transaction"}
      />
      <MessageControlTable
        arraySize={filteredData.length}
        activeFilter={filters.activeFilter}
        message={"Filter not found"}
      />
    </>
  );
};

export default Table;
