import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const Benefit = ({ description, list }) => {
  const img = [];

  return (
    <div className="pad-ben">
      <Container>
        <div className="text-center">
          <h1>{description.title}</h1>
          <p>{description.subtitle}</p>
        </div>
        <Row>
          {list.map((item) => (
            <Col className="justify-content-center">
              <Card className="card-pad" style={{ width: "300px" }}>
                <Card.Body>
                  <img className="icon-pad" src={item.icon}></img>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Col className="">
          {list.map((item) => (
            <Card className="card-pad" style={{ width: "300px" }}>
              <Card.Body>
                <img className="icon-pad" src={item.icon}></img>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col> */}

        {/* <div className="d-flex justify-content-between">
        {list.map((item) => (
          <Card className="card-pad" style={{ width: "300px" }}>
            <Card.Body>
              <img className="icon-pad" src={item.icon}></img>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div> */}
      </Container>
    </div>
  );
};

export default Benefit;
