import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = ({ description }) => {
  return (
    <div>
      <Container className="search-menu">
        <div className="floating-menu">
          <Row>
            {/* 1 */}
            <Col>
              <h6>Nama Mobil</h6>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Ketik nama/tipe mobil"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>

            {/* 2 */}
            <Col>
              <h6>Kategori</h6>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Masukan Kapasitas Mobil"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>

            {/* 3 */}
            <Col>
              <h6>Harga</h6>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Masukan Harga Sewa per Hari"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>

            {/* 4 */}
            <Col>
              <h6>Status</h6>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Disewa"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>

            {/* 5 */}
            <Col>
              <Button variant="success">Mulai Sewa Mobil</Button>{" "}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
