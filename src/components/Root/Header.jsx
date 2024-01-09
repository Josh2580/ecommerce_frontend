// Importing Icons
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
// Importing React Bootstrap Components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
//
import Logout from "./Logout";

function Header() {
  let expand = "md";
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        variant="primary"
        className="bg-body-tertiary mb-3"
        // className="bg-body-tertiary mb-3 shadow-sm"
        style={{ boxShadow: "0px 4px 6px rgba(54, 54, 54, 0.1)" }}
      >
        <Container fluid="lg">
          <Nav className="d-flex flex-row gap-2">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
          </Nav>
          <Nav className="d-flex flex-row gap-3 d-md-none">
            <Nav.Link href="#" className="">
              <IoSearch size={20} color="#171717" />
            </Nav.Link>
            <Nav.Link href="/customer/profile" className="">
              <FaRegUser size={20} color="#171717" />
            </Nav.Link>
            <Nav.Link href="/cart" className="">
              <MdOutlineShoppingCart
                className="headIcon"
                size={20}
                color="#171717"
              />
            </Nav.Link>
          </Nav>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <h4>LOGO</h4>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <NavDropdown
                  title={
                    <span>
                      <FaRegUser size={20} className="me-1" />
                      Account
                    </span>
                  }
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="mx-md-3"
                >
                  <NavDropdown.Item href="/customer/profile">
                    <h6>My Account</h6>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/customer/orders">
                    <h6>Orders</h6>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Logout />
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  href="/cart"
                  className="d-none d-md-flex gap-1 mt-1 mx-0"
                >
                  <MdOutlineShoppingCart
                    className="headIcon"
                    size={20}
                    color="#171717"
                  />
                  <span>Cart</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
