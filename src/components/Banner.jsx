import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Banner = ({ description }) => {
  return (
    <div>
      <Container className="banner">
        <div className="banner-css text-center">
          <h1>{description.title}</h1>
          <p>{description.subtitle}</p>
          <Link to={"/Cars"}>
            <Button className="button-testi" variant="warning">
              Mulai Sewa Mobil
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
