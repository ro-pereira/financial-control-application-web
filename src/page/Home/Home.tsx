import { Col, Row, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ActiveButton from "../../common/components/ActiveButton/ActiveButton";
import CardResume from "../../components/CardResume/CardResume";
import Table from "../../components/Table/Table";
import { useAppSelector } from "../../store/hook";
import { toggleOpenAddTrnsactionModal } from "../../store/slices/modalSlice";
import "./home.sass";
import ModalRecordsAddTransaction from "../../components/Modais/ModalRecordsAddTransaction";
import ModalRecordsEditTransaction from "../../components/Modais/ModalRecordsEditTransaction";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  const dispatch = useDispatch();

  const openModalAddTransaction = useAppSelector(
    (state) => state.reducer.modal.openModalAddTransaction
  );

  const handleToggleOpenAddTrnsactionModal = () => {
    dispatch(toggleOpenAddTrnsactionModal({ openOfClose: true }));
  };

  return (
    <main className="home">
      <Stack gap={5}>
        <Col>
          <Filter />
        </Col>
        <Row className="home__container justify-content-center">
          <Col className="home__container__table d-fex" sm={12} lg={8}>
            <Table />
          </Col>
          <Col sm={12} lg={3}>
            <Stack gap={2}>
              <CardResume />
              <ActiveButton
                open={openModalAddTransaction}
                toggleOpen={handleToggleOpenAddTrnsactionModal}
                label="add-transaction"
              />
            </Stack>
          </Col>
        </Row>
      </Stack>

      <ModalRecordsAddTransaction
        openModalAddTransaction={openModalAddTransaction}
      />
      <ModalRecordsEditTransaction />
    </main>
  );
};

export default Home;
