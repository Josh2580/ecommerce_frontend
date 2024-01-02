import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import AccountHeader from "../../pages/Customers/AccountHeader";
import MobileMenu from "./MobileMenu";
import SellersHeader from "../../pages/sellers/SellersHeader";
//
//
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Header = () => {
  const [hamburger, setHamburger] = useState(true);
  const [menu, setMenu] = useState(true);
  const [account, setAccount] = useState(false);
  const [seller, setSeller] = useState(false);

  const MobileHeadHandler = (e) => {
    let value = e.target.id;
    // alert(value);
    switch (value) {
      case "mobile_head_menu":
        setMenu(true);
        setAccount(false);
        setSeller(false);

        break;

      case "mobile_head_account":
        setMenu(false);
        setAccount(true);
        setSeller(false);

        break;

      case "mobile_head_seller":
        setMenu(false);
        setAccount(false);
        setSeller(true);

        break;

      default:
        break;
    }
  };

  const BurgerHandler = () => {
    setHamburger(!hamburger);
  };

  const MobileNavigation = () => {
    return (
      <MobileNavigationStyle
        translate={hamburger ? "-105%" : "0px"}
        id="for_mobile_burger"
      >
        <MobileHead>
          <SpanHead
            borderbottom={menu ? "2px solid red" : "none"}
            id="mobile_head_menu"
            onClick={(e) => MobileHeadHandler(e)}
          >
            Menu
          </SpanHead>
          <SpanHead
            borderbottom={account ? "2px solid red" : "none"}
            id="mobile_head_account"
            onClick={(e) => MobileHeadHandler(e)}
          >
            Account
          </SpanHead>
          <SpanHead
            borderbottom={seller ? "2px solid red" : "none"}
            id="mobile_head_seller"
            onClick={(e) => MobileHeadHandler(e)}
          >
            Seller
          </SpanHead>
        </MobileHead>
        {account && <AccountHeader onClick={BurgerHandler} />}
        {seller && <SellersHeader onClick={BurgerHandler} />}

        {menu && <MobileMenu onClick={BurgerHandler} />}
      </MobileNavigationStyle>
    );
  };

  const Navigation = () => {
    return (
      <NavigationStyle>
        <NavLink>Home</NavLink>
        <NavLink>Category's</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </NavigationStyle>
    );
  };

  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        className="bg-body-tertiary justify-content-center mx-auto"
      >
        <Container fluid="lg">
          <div className="d-flex align-items-md-center justify-content-between w-100">
            <div className="d-flex flex-column flex-md-row gap-1 align-items-md-center justify-content-md-between w-100">
              <div className="d-flex align-items-md-center justify-content-md-between">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
              </div>
              <Navbar.Collapse id="navbarScroll">
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
                      className="ms-1 flex-row"
                      title="Account"
                      id="navbarScrollingDropdown"
                      as="h6"
                    >
                      <NavDropdown.Item href="#action3">
                        <h6>My Account</h6>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        {" "}
                        <h6>Orders</h6>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        <h6>Logout</h6>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </div>
            <Nav.Link href="/cart" className="ms-1 mt-2 mt-md-0">
              {" "}
              <div className="d-flex gap-1" style={{ color: "#171717" }}>
                <BsCart className="headIcon" />
                <h6 className="mr-1">Cart</h6>
              </div>
            </Nav.Link>
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
