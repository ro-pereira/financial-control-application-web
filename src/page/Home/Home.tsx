import { useState } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import ActiveButton from "../../common/components/ActiveButton/ActiveButton";
import CardResume from "../../components/CardResume/CardResume";
import Table from "../../components/Table/Table";
import "./home.sass";

const Home = () => {
  const [openModalAddTransaction, setOpenModalAddTransaction] = useState(false);

  const toggleOpenAddTrnsactionModal = () => {
    setOpenModalAddTransaction(!openModalAddTransaction);
  };

  return (
    <main className="home">
      <Row className="home__container justify-content-center">
        <Col className="home__container__table d-fex" sm={12} lg={8}>
          <Table />
        </Col>
        <Col sm={12} lg={3}>
          <Stack gap={2}>
            <CardResume />
            <ActiveButton
              open={openModalAddTransaction}
              toggleOpen={toggleOpenAddTrnsactionModal}
              label="add-transaction"
            />
          </Stack>
        </Col>
      </Row>
    </main>
  );
};

export default Home;
