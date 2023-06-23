import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image, Container, Row, Col, Collapse } from "react-bootstrap";

function Testimonial({ testiList }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testimonial">
      <Container className="justify-content-center align-items-center">
        <Row>
          <Col className="text-center">
            <h1>Testimonial?</h1>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </Col>
        </Row>
        <Row>
          <Carousel className="" activeIndex={index} onSelect={handleSelect}>
            {testiList.map((item) => (
              <Carousel.Item className="carousel">
                <Carousel.Caption>
                  <div className="photo">
                    <Image fluid src={item.pic}></Image>
                  </div>
                  <div className="text">
                    <h6>{item.text}</h6>
                    <p>{item.person}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
    // <div className="testimonial">
    //   <Container d-flex>
    //     <div className="text-center">
    //       <h1>{description.title}</h1>
    //       <p>{description.subtitle}</p>
    //     </div>

    //     <div className="div"></div>

    //     <Carousel className="" activeIndex={index} onSelect={handleSelect}>
    //       <Carousel.Item className="carousel">
    //         <Carousel.Caption>
    //           <h3>First slide label</h3>
    //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>

    //       <Carousel.Item className="carousel">
    //         <Carousel.Caption>
    //           <h3>First slide label</h3>
    //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>

    //       <Carousel.Item className="carousel">
    //         <Carousel.Caption>
    //           <h3>First slide label</h3>
    //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     </Carousel>
    //   </Container>
    // </div>
  );
}

export default Testimonial;
