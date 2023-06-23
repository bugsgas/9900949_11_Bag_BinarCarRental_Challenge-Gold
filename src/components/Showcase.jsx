import React from "react";
import { Button, Image, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Showcase = ({ showButton, showText, showImg, description }) => {
  return (
    <div className="showcase-css">
      <Container className="justify-content-evenly">
        <Row>
          <Col sm>
            {showText && (
              <div>
                <h1>{description.title}</h1>
                <p>{description.subtitle}</p>
              </div>
            )}
            <Link to={"/Cars"}>
              {showButton && (
                <Button variant="success">Mulai Sewa Mobil</Button>
              )}
            </Link>
          </Col>
          <Col sm fluid>
            {showImg && <Image src="src/assets/img_car.png" fluid />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Showcase;
