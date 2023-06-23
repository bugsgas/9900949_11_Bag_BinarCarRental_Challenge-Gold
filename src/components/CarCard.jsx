import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CarCard = ({}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const goSearch = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const api = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}&category=${category}`;

    axios
      .get(api)
      .then((res) => {
        setData(res.data.cars);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          {data.map((item) => (
            <Card className="carcard" style={{ width: "333px" }}>
              <Card.Img
                fluid
                className="card-img"
                variant="top"
                src={item.image}
                style={{ width: "auto", height: "250px" }}
              />
              <Card.Body>
                <Card.Title>
                  <h5>{item.name}</h5>
                </Card.Title>
                <Card.Text>
                  <h6>Rp {item.price} / hari</h6>
                </Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </Card.Body>
              <Button
                variant="success"
                className="card-button"
                onClick={() => goSearch(item.id)}
              >
                Detail
              </Button>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CarCard;
