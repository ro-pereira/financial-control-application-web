import { Col, Row, Stack } from "react-bootstrap";
import Table from "../../components/Table/Table";
import "./home.sass";
import CardResume from "../../components/CardResume/CardResume";

const Home = () => {
  return (
    <main className="home">
      <Row className="home__container justify-content-center">
        <Col className="home__container__table d-fex" sm={12} lg={8}>
          <Table />
        </Col>
        <Col sm={12} lg={3}>
          <Stack gap={2}>
            <CardResume />
          </Stack>
        </Col>
      </Row>
    </main>
  );
};

export default Home;
