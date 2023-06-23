import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "../CarCard";
import "./index.css";
import {
  Form,
  Image,
  Container,
  Row,
  Col,
  Collapse,
  Button,
} from "react-bootstrap";

function FindCarComponent() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}&price=${price}&status=${status}&category=${category}`;
    axios
      .get(api)
      .then((res) => setData(res.data.cars))
      .catch((err) => console.log(err));
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();

  const goToSearch = (id) => navigate(`/detail/${id}`);

  return (
    <>
      <Container className="container-form">
        <div className="search-pad">
          <form onSubmit={(e) => onSubmit(e)}>
            <Row>
              <Col md={3}>
                <label>Nama Mobil</label>
                <Form.Control
                  type="string"
                  id="inputEmail4"
                  aria-label="Search"
                  placeholder="Ketik nama/tipe mobil"
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Col>

              <Col md={3}>
                <label>Kapasitas</label>
                <Form.Select
                  id="inputState"
                  className="form-select"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" selected disabled hidden>
                    Kapasitas Mobil
                  </option>
                  <option value="small">2 - 4 Orang</option>
                  <option value="medium">4 - 6 Orang</option>
                  <option value="large">6 - 8 Orang</option>
                </Form.Select>
              </Col>

              <Col md={2}>
                <label>Harga</label>
                <Form.Control
                  type="string"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Harga"
                  onChange={(e) => setPrice(e.target.value)}
                ></Form.Control>
              </Col>

              <Col md={2}>
                <label>Status</label>
                <Form.Select
                  id="inputState"
                  className="form-select"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="" selected disabled hidden>
                    Pilih Status
                  </option>
                  <option value="true">Disewakan</option>
                  <option value="false">Tidak Disewa</option>
                </Form.Select>
              </Col>

              <Col md={2}>
                <label></label>
                <Form>
                  <Button className=" btn btn-success" onClick={getData}>
                    Cari Mobil
                  </Button>
                </Form>
              </Col>
            </Row>
          </form>
        </div>
      </Container>

      <Container>
        <Row>
          <div className="row justify-content-center result">
            {data.length
              ? data.map((item) => (
                  <div className="col car">
                    <CarCard
                      carname={item.name}
                      carcategory={item.category}
                      carprice={item.price}
                      carimage={item.image}
                      cardetail={() => goToSearch(item.id)}
                    />
                  </div>
                ))
              : null}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default FindCarComponent;
