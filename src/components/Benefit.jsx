import React from "react";
import Card from "react-bootstrap/Card";
import { Image, Container, Row, Col } from "react-bootstrap";

const Benefit = ({ description, list }) => {
  const img = [];

  return (
    <div className="pad-ben">
      <Container>
        <div className="text-center">
          <h1>{description.title}</h1>
          <p>{description.subtitle}</p>
        </div>
        <Row className="justify-content-evenly">
          {list.map((item) => (
            <Col sm={3}>
              <Card className="card-pad" style={{ width: "300px" }}>
                <Card.Body>
                  <Image fluid className="icon-pad" src={item.icon}></Image>
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
