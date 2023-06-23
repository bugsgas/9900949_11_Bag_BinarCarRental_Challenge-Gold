import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Image, Row, Col, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarMain({ menu }) {
  return (
    <div className="navbar-bg">
      <Container>
        {["sm"].map((expand) => (
          <Navbar key={expand} expand={expand} className="nav-pad">
            <Container fluid>
              <Navbar.Brand href="#">
                <Link to={"/"}>
                  <Image src="../src/assets/Rectangle 74.png"></Image>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {menu.map((item) => (
                      <Nav.Link href="#action1">{item}</Nav.Link>
                    ))}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </Container>

      {/* <Navbar sticky="top" collapseOnSelect expand="lg" className="navbar-bg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={"/"}>
              <Image src="../src/assets/Rectangle 74.png"></Image>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            {menu.map((item) => (
              <Nav>
                <Nav.Link>{item}</Nav.Link>
              </Nav>
            ))}
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
}
