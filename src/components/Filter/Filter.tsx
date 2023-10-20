import { useEffect, useState } from "react";
import { Col, Collapse, Row, Stack } from "react-bootstrap";
import ActiveButton from "../../common/components/ActiveButton/ActiveButton";
import CategoriesChips from "../../common/components/CategoriesChips/CategoriesChips";
import TransactionTypeChip from "../../common/components/TransactionTypeChips/TransactionTypeChips";
import { handleChipSelectionFilter } from "../../common/utilsCommon";
import ButtonApllyDefault from "../../common/components/ButtonApplyDefault/ButtonApplyDefault";
import ButtonResetDefault from "../../common/components/ButtonResetDefault/ButtonResetDefault";
import { useDispatch } from "react-redux";
import { changeFilters, clearAllFilters } from "../../store/slices/filterSlice";
import "./filter.sass";

const Filter = () => {
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);
  const [categoriesSelected, setCaregoriesSelected] = useState<string[]>([]);
  const [currentTransactionType, setCurrentTransactionType] = useState<
    string[]
  >([]);

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  const { handleSelectCategoryFilter, handleSelectTransactionTypeFilter } =
    handleChipSelectionFilter(
      categoriesSelected,
      setCaregoriesSelected,
      setCurrentTransactionType,
      currentTransactionType
    );

  const applyFilters = () => {
    dispatch(
      changeFilters({
        categories: categoriesSelected,
        transactionType: currentTransactionType,
        activeFilter: true,
      })
    );
  };

  const cleanFilter = () => {
    dispatch(clearAllFilters());
    setCaregoriesSelected([]);
    setCurrentTransactionType([]);
  };

  return (
    <Stack gap={4} className="filter">
      <Col>
        <ActiveButton
          open={openFilter}
          toggleOpen={handleOpenFilter}
          label="filters"
        />
      </Col>

      <Collapse in={openFilter}>
        <Row className="filter__dropdown">
          <Col
            sm={12}
            lg={6}
            className="filter__dropdown__container__categories"
          >
            <CategoriesChips
              title="Categorias"
              categoriesSelected={categoriesSelected}
              onSelectCategory={handleSelectCategoryFilter}
              style="filter content"
            />
          </Col>

          <Col lg={4} className="filter__dropdown__container__transactionType">
            <TransactionTypeChip
              title="Transaction type"
              transactionsTypeSelected={currentTransactionType}
              onSelectTransactionType={handleSelectTransactionTypeFilter}
              style="filter content"
            />
          </Col>

          <Col
            lg={2}
            style={{ padding: "1rem" }}
            className="d-flex justify-content-center"
          >
            <Row sm={2} lg={5} className="d-flex justify-content-center">
              <Stack
                gap={4}
                className="d-flex justify-content-center align-items-center"
              >
                <ButtonApllyDefault label="Apply" actionApply={applyFilters} />
                <ButtonResetDefault label="Clean" actionReset={cleanFilter} />
              </Stack>
            </Row>
          </Col>
        </Row>
      </Collapse>
    </Stack>
  );
};

export default Filter;
