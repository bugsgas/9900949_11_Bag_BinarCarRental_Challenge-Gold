import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";

const OurServices = ({ description, list }) => {
  return (
    <div className="pad-our">
      <Container>
        <Row>
          <Col sm>
            <Image fluid src="src/assets/img_service.svg" />
          </Col>

          <Col sm>
            <div>
              <h1>{description.title}</h1>
              <p>{description.subtitle}</p>
            </div>

            <div>
              {" "}
              {list.map((item) => (
                <ul className="icon-list">
                  <li>{item.title}</li>
                </ul>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
