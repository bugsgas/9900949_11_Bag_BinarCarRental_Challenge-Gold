import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "react-bootstrap";

const Faq = ({ question }) => {
  return (
    <>
      <Container className="faq">
        <Row>
          <Col sm={5}>
            <h3>Frequently Ask Questions</h3>
            <p>Lorem Ipsum Dolor</p>
          </Col>
          <Col sm={7}>
            {question.map((item, key) => (
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={key}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
