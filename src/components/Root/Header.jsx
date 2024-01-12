import { useState } from "react";
import { useSelector } from "react-redux";
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
//
import { useGetAllCategoryQuery } from "../../source/api/CategoryApi";
import { useGetCartItemsFromIdQuery } from "../../source/api/CartApi";
import { useGetSearchAllProductQuery } from "../../source/api/ProductsApi";

function Header() {
  let expand = "md";

  const { cartId } = useSelector((state) => state.cart);

  // console.log(cartId);

  const state_cart_id = cartId.cart_id;

  const { data } = useGetAllCategoryQuery() || [];
  const { data: cartItemsData } =
    useGetCartItemsFromIdQuery(state_cart_id) || [];

  const [searchInput, setSearchInput] = useState("");
  let searchValue = "?search=" + searchInput;
  console.log(searchValue);

  const { data: productsData } = useGetSearchAllProductQuery(searchValue) || [];
  console.log(productsData);

  const CategoryList = () => {
    return (
      <div className="d-flex gap-2 d-md-none flex-column">
        <h6 className="fw-bold">Our Categories</h6>
        {data &&
          data.map((val) => (
            <Nav.Link key={val.id} href={`/category/${val.id}`}>
              {val.name}
              <MdKeyboardArrowRight
                size={20}
                className="me-2"
                color={"#7F8285"}
              />
            </Nav.Link>
          ))}
      </div>
    );
  };

  return (
    <>
      <Navbar
        key={expand}
        fixed="top"
        expand={expand}
        variant="primary"
        className="bg-body-tertiary mb-3"
        // className="bg-body-tertiary mb-3 shadow-sm"
        style={{ boxShadow: "0px 4px 6px rgba(54, 54, 54, 0.1)" }}
      >
        <Container fluid="lg">
          <Nav className="d-flex flex-row gap-2">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="/">
              {" "}
              <strong>
                {" "}
                L<span className="text-warning">O</span>G
                <span className="text-warning">O</span>
              </strong>
            </Navbar.Brand>
          </Nav>
          <Nav className="d-flex flex-row gap-3 d-md-none">
            <Nav.Link href="#" className="">
              <IoSearch size={20} color="#171717" />
            </Nav.Link>
            <Nav.Link href="/customer/profile" className="">
              <FaRegUser size={20} color="#171717" />
            </Nav.Link>
            <Nav.Link href="/cart" className="">
              <div className=" position-relative">
                <MdOutlineShoppingCart
                  className="headIcon"
                  size={20}
                  color="#171717"
                />
                {cartItemsData && (
                  <span
                    className="bg-warning px-1 rounded-5 "
                    style={{
                      fontSize: "10px",
                      position: "absolute",
                      right: "-2px",
                      top: "-3px",
                    }}
                  >
                    {cartItemsData.length}
                  </span>
                )}
              </div>
            </Nav.Link>
          </Nav>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Nav.Link href="/">
                  <strong>
                    {" "}
                    L<span className="text-warning">O</span>G
                    <span className="text-warning">O</span>
                  </strong>
                </Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                variant="warning"
                className="justify-content-end flex-grow-1"
              >
                <Form className="d-flex">
                  <input
                    type="search"
                    placeholder="Search"
                    className="me-2 px-2 bg-white rounded border-light-subtle"
                    aria-label="Search"
                    variant="warning"
                    style={{ outline: "none" }}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <Button variant="warning">Search</Button>
                </Form>
                <NavDropdown
                  title={
                    <span>
                      <FaRegUser size={20} className="me-1" />
                      Account
                    </span>
                  }
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="mx-md-3 my-3 my-md-0"
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
                  <div className=" position-relative">
                    <MdOutlineShoppingCart
                      className="headIcon"
                      size={20}
                      color="#171717"
                    />
                    {cartItemsData && (
                      <span
                        className="bg-warning px-1 rounded-5 "
                        style={{
                          fontSize: "10px",
                          position: "absolute",
                          right: "-2px",
                          top: "-3px",
                        }}
                      >
                        {cartItemsData.length}
                      </span>
                    )}
                  </div>
                  <span>Cart</span>
                </Nav.Link>
                <CategoryList />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
