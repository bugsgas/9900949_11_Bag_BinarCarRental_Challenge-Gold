import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CardDetail() {
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
          <Col md={7}>
            <Card className="details-col">
              <div className="detail-div">
                <h4 className="tentang">Tentang Paket</h4>
                <div className="first">
                  <h6>Include</h6>
                  <ul>
                    <li>
                      "Apa saja yang termasuk dalam paket misal durasi max 12
                      jam"
                    </li>
                    <li>"Sudah termasuk bensin selama 12 jam"</li>
                    <li>"Sudah termasuk Tiket Wisata"</li>
                    <li>"Sudah termasuk pajak"</li>
                  </ul>
                </div>

                <div className="second">
                  <h6>Exclude</h6>
                  <ul>
                    <li>"Tidak termasuk biaya makan sopir Rp 75.000/hari"</li>
                    <li>
                      "Jika overtime lebih dari 12 jam akan ada tambahan biaya
                      Rp 20.000/jam"
                    </li>
                    <li>"Tidak termasuk akomodasi penginapan"</li>
                  </ul>
                </div>

                <div className="third">
                  <h6>Refund, Reschedule, Overtime</h6>
                  <ul>
                    <li>"Tidak termasuk biaya makan sopir Rp 75.000/hari"</li>
                    <li>
                      "Jika overtime lebih dari 12 jam akan ada tambahan biaya
                      Rp 20.000/jam"
                    </li>
                    <li>"Tidak termasuk akomodasi penginapan"</li>
                    <li>"Tidak termasuk biaya makan sopir Rp 75.000/hari"</li>
                    <li>
                      "Jika overtime lebih dari 12 jam akan ada tambahan biaya
                      Rp 20.000/jam"
                    </li>
                    <li>"Tidak termasuk akomodasi penginapan"</li>
                    <li>"Tidak termasuk biaya makan sopir Rp 75.000/hari"</li>
                    <li>
                      "Jika overtime lebih dari 12 jam akan ada tambahan biaya
                      Rp 20.000/jam"
                    </li>
                    <li>"Tidak termasuk akomodasi penginapan"</li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={5} className="d-flex justify-content-center align-items-top">
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
