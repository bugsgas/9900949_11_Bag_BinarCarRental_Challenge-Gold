import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";

const Footer = ({ contactUs, menu, social }) => {
  return (
    <div className="footer">
      <Container className="">
        <Row className="">
          <Col sm={3} className="">
            <div className="contact-us">
              <p>{contactUs.address}</p>
              <p>{contactUs.email}</p>
              <p>{contactUs.phone}</p>
            </div>
          </Col>
          <Col sm={3} className="">
            <div className="footer-list">
              {menu.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </Col>
          <Col sm={3} className="">
            <div>
              <h6>Connect with us</h6>
              {social.map((item) => (
                <Image fluid className="social-icon" src={item}></Image>
              ))}
            </div>
          </Col>
          <Col sm={3} className="">
            <div className="">
              <h6>Copyright Binar</h6>
              <Image fluid src="src/assets/Rectangle 74.png"></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
