import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Banner = ({ description }) => {
  return (
    <div>
      <Container className="banner">
        <div className="banner-css text-center">
          <h1>{description.title}</h1>
          <p>{description.subtitle}</p>
          <Button className="button-testi" variant="warning">
            Mulai Sewa Mobil
          </Button>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Banner;
