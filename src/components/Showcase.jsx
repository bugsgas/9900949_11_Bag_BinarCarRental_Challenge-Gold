import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

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
            <Image src="src/assets/img_car.png" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Showcase;
