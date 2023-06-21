import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = ({ contactUs, menu, social }) => {
  return (
    <div className="footer">
      <Container className="">
        <Row className="">
          <Col sm className="d-flex justify-content-center">
            <div className="contact-us">
              <p>{contactUs.address}</p>
              <p>{contactUs.email}</p>
              <p>{contactUs.phone}</p>
            </div>
          </Col>
          <Col sm className="d-flex justify-content-center">
            <div className="footer-list">
              {menu.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </Col>
          <Col sm className="d-flex justify-content-center">
            <div>
              <h6>Connect with us</h6>
              {social.map((item) => (
                <img className="social-icon" src={item}></img>
              ))}
            </div>
          </Col>
          <Col sm className="d-flex justify-content-center">
            <div>
              <h6>Copyright Binar</h6>
              <img src="src/assets/Rectangle 74.png"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
