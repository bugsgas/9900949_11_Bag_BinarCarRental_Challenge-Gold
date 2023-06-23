import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import CardDetail from "./CardDetail";

const Details = ({ include, exclude, info }) => {
  return (
    <div className="">
      <Container className="">
        <Row>
          <Col className="details-col">
            <div className="detail-div">
              <div>
                <h6>Include</h6>
                <ul>
                  {include.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h6>Exclude</h6>
                <ul>
                  {exclude.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h6>Exclude</h6>
                <ul>
                  {info.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
