import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";

const Footer = ({ contactUs, menu }) => {
  return (
    <div className="footer">
      <Container className="">
        <Row>
          <Col sm={3}>
            <div className="contact-us">
              <p>{contactUs.address}</p>
              <p>{contactUs.email}</p>
              <p>{contactUs.phone}</p>
            </div>
          </Col>
          <Col sm={3}>
            <div className="footer-list">
              {menu.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </Col>
          <Col sm={3}>
            <div className="">
              <h6>Connect with us</h6>
              <Image
                className="social-icon"
                fluid
                src="../src/assets/icon_facebook.png"
              ></Image>
              <Image
                className="social-icon"
                fluid
                src="../src/assets/icon_instagram.png"
              ></Image>
              <Image
                className="social-icon"
                fluid
                src="../src/assets/icon_mail.png"
              ></Image>
              <Image
                className="social-icon"
                fluid
                src="../src/assets/icon_twitter.png"
              ></Image>
              <Image
                className="social-icon"
                fluid
                src="../src/assets/icon_twitch.png"
              ></Image>
            </div>
          </Col>
          <Col sm={3}>
            <div>
              <h6>Copyright Binar</h6>
              <Image fluid src="../src/assets/Rectangle 74.png"></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
