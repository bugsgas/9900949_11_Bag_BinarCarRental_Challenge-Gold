import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Showcase = ({ description }) => {
  return (
    <div className="showcase-css">
      <Container className="justify-content-evenly">
        <Row>
          <Col sm>
            <h1>{description.title}</h1>
            <p>{description.subtitle}</p>
            <Button variant="success">Mulai Sewa Mobil</Button>{" "}
          </Col>
          <Col sm fluid>
            <img src="src/assets/img_car.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Showcase;
