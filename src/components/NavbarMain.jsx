import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarMain({ menu }) {
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="navbar-bg">
        <Container className="nav-pad">
          <Navbar.Brand href="#home">
            <img src="src/assets/Rectangle 74.png"></img>
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
      </Navbar>
    </>
  );
}
