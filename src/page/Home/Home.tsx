import { Col, Row } from "react-bootstrap";
import Table from "../../components/Table/Table";
import "./home.sass";

const Home = () => {
  return (
    <main className="home">
      <Row className="home__container justify-content-center">
        <Col className="home__container__table d-fex" sm={12} lg={8}>
          <Table />
        </Col>
      </Row>
    </main>
  );
};

export default Home;
