import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";

const Root = () => {
  return (
    <RootStyle>
      <div>
        <Header />
        <div className="render">
          <Container fluid="lg" className="my-auto mt-5 pt-3  pt-md-5 pt-lg-4 ">
            <Outlet />
          </Container>
        </div>
      </div>
      <Footer />
    </RootStyle>
  );
};

const RootStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100%; */
  /* background: gray; */

  .render {
    height: 100%;
  }
`;

export default Root;
