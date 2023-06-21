import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

function Testimonial({ description }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testimonial">
      <Container className="">
        <div className="">
          <h1>{description.title}</h1>
          <p>{description.subtitle}</p>
        </div>

        <div className="">
          <Carousel className="" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="carousel">
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
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
