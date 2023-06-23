import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CardDetail(include, exclude, info) {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getDetailedData = () => {
    const api = `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`;
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  // using useEffect so it can be rendered when the page is loaded
  useEffect(() => {
    getDetailedData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card className="carcard" style={{ width: "333px" }}>
              <Card.Img
                fluid
                className="card-img"
                variant="top"
                src={data?.image}
                style={{ width: "auto", height: "250px" }}
              />
              <Card.Body>
                <Card.Title>
                  <h5>{data?.name}</h5>
                </Card.Title>
                <Card.Text>
                  <h6>Rp {data?.price} / hari</h6>
                </Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
