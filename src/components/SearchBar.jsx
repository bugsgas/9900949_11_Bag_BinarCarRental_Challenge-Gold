import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = ({ search, clicked }) => {
  return (
    <>
      <Container className="search-menu">
        <div className="search-pad">
          <Row>
            {/* 1 */}
            <Col md={2}>
              <h6>Nama Mobil</h6>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Nama/Tipe mobil"
                  className="me-2"
                  aria-label="Search"
                  onChange={search}
                />
              </Form>
            </Col>

            {/* 2 */}
            <Col md={2}>
              <h6>Kategori</h6>
              <Form.Select name="category">
                <option value="" selected disabled hidden>
                  Kapasitas Mobil
                </option>
                <option value="small">2 - 4 orang</option>
                <option value="medium">4 - 6 orang</option>
                <option value="large">6 - 8 orang</option>
              </Form.Select>
            </Col>

            {/* 3 */}
            <Col md={2}>
              <h6>Harga Minimum</h6>
              <Form.Control
                type="search"
                placeholder="Minimum Harga"
                aria-label="Search"
                name="minPrice"
                onChange={search}
              />
            </Col>

            {/* 4 */}
            <Col md={2}>
              <h6>Harga Maksimal</h6>
              <Form.Control
                type="search"
                placeholder="Maximum Harga"
                aria-label="Search"
                name="maxPrice"
                onChange={search}
              />
            </Col>

            {/* 5 */}
            <Col md={2}>
              <h6>Status</h6>
              <Form.Select name="status" defaultValue="status">
                <option value="" selected disabled hidden>
                  Status Sewa
                </option>
                <option value="true">Sudah Disewa</option>
                <option value="false">Belum Disewa</option>
              </Form.Select>
            </Col>

            {/* 6 */}
            <Col md={2}>
              <Button variant="success" onClick={clicked}>
                Mulai Sewa Mobil
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SearchBar;
