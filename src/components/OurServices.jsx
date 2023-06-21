import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const OurServices = ({ description, list }) => {
  return (
    <div className="pad-our">
      <Container>
        <Row>
          <Col>
            <img src="src/assets/img_service.svg" />
          </Col>

          <Col>
            <div>
              <h1>{description.title}</h1>
              <p>{description.subtitle}</p>
            </div>

            {list.map((item) => (
              <div classname="">
                <img src="src/assets/Group53.svg" />
                <p>{item.title}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
