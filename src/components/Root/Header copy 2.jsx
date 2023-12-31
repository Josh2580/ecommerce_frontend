import React, { useState } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

//
//
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
} from "react-bootstrap";

import { useGetAllCategoryQuery } from "../../source/api/CategoryApi";
import Logout from "./Logout";

const Header = () => {
  const [show, setShow] = useState(false);
  const { data } = useGetAllCategoryQuery() || [];

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
        expand="md"
        // style={{ background: "#218B5A" }}
        style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        fixed="top"
        // data-bs-theme="dark"
        className="bg-body-tertiary justify-content-center mx-auto "
        // className="justify-content-center mx-auto"
      >
        <Container fluid="lg" style={{ background: "none" }}>
          <div className="d-flex align-items-md-center justify-content-between w-100">
            <div className="d-flex flex-column flex-md-row gap-1 align-items-md-center justify-content-md-between w-100">
              <div className="d-flex align-items-md-center justify-content-md-between">
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  style={{
                    border: "none", // Remove the border
                    fontSize: "1rem", // Change the font size

                    color: "white", // Change the text color

                    paddingLeft: "0px",
                    marginTop: "10px",
                    marginRight: "10px",

                    height: "max-content",
                    padding: "0px", // Adjust padding for size
                  }}
                />
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
              </div>
              <Navbar.Collapse id="basic-navbar-nav">
                <div className="d-flex flex-column gap-md-2 flex-md-row justify-content-end w-100">
                  <Form className="d-flex align-items-center ">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2 "
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>

                  <Nav className=" my-2 my-lg-0" navbarScroll>
                    <NavDropdown
                      className="ms-2 flex-row d-none d-md-flex"
                      // title="Account"
                      title={
                        <span>
                          <FaRegUser size={20} className="me-2" />
                          Account
                        </span>
                      }
                      id="navbarScrollingDropdown"
                      as="h6"
                    >
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        {/* <h6>Logout</h6> */}
                        <Logout />
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Button
                      variant="none"
                      className=" d-md-none text-start px-0"
                      onClick={() => setShow(true)}
                      size="md"
                      style={{ width: "max-content" }}
                      as="h6"
                    >
                      My Account{" "}
                      <MdKeyboardArrowRight size={20} className="me-2" />
                    </Button>
                    <Modal
                      show={show}
                      onHide={() => setShow(false)}
                      dialogClassName="modal-50w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        {/* <Modal.Title id="example-custom-modal-styling-title">
                          Custom Modal Styling
                        </Modal.Title> */}
                      </Modal.Header>
                      <Modal.Body>
                        <Nav.Link href="/customer/profile">
                          <h6>My Account</h6>
                        </Nav.Link>
                        <Nav.Link href="/customer/orders">
                          {" "}
                          <h6>Orders</h6>
                        </Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link>
                          {/* <h6>Logout</h6> */}

                          <Logout />
                        </Nav.Link>
                      </Modal.Body>
                    </Modal>
                  </Nav>
                </div>
                <CategoryList />
              </Navbar.Collapse>
            </div>
            <div className="d-flex gap-3">
              <Nav.Link href="#" className=" d-md-none mt-1">
                <IoSearch size={20} color="#171717" />
              </Nav.Link>
              <Nav.Link href="/customer/profile" className=" d-md-none mt-1">
                <FaRegUser size={20} color="#171717" />
              </Nav.Link>
              <Nav.Link href="/cart" className="ms-1 mt-2 mt-md-0">
                <div className="d-flex gap-1" style={{ color: "#171717" }}>
                  <MdOutlineShoppingCart className="headIcon" size={20} />
                  <h6 className="mr-1 d-none d-md-block">Cart</h6>
                </div>
              </Nav.Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

const Left = styled.div`
  display: flex;
  gap: 1rem;
  a {
    text-decoration: none;
  }
  .the_burger {
    display: none;
  }
  .mobile_nav {
    display: none;
  }
  @media (max-width: 990px) {
    .nav {
      display: none;
    }
    .mobile_nav {
      display: block;
    }
    .the_burger {
      display: block;
      font-size: 25px;
      z-index: 5;
      /* padding: 16px; */
    }
  }
`;

const Right = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    .headIcon {
      font-size: 25px;
    }
    span {
      font-size: 12px;
      visibility: visible;
    }
  }
  a:hover > span {
    visibility: visible;
  }
`;

const MobileNavigationStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ccc6c6;
  position: absolute;
  width: 100%;
  height: 100vh;
  max-width: 300px;
  left: 0px;
  top: 0px;
  padding-top: 3rem;
  transform: translateX(${(props) => props.translate});
  transition: transform 2s 1s ease-in-out;
`;

const MobileHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span:hover {
    /* color: red; */
  }
`;

const SpanHead = styled.span`
  border-bottom: ${(props) => props.borderbottom};

  width: 100%;
  padding: 10px 16px;
  /* color: red; */
  /* background: white; */
`;

const NavigationStyle = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 20px;
  a {
    text-decoration: none;
  }
`;

export default Header;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  background: #e7ccac;
  padding: 10px 0px;
  z-index: 4;
`;

const MyNavbar = styled(Navbar)`
  display: flex;
  justify-content: space-between;
`;
