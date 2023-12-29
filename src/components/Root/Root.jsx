import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const Root = () => {
  return (
    <RootStyle>
      <div>
        <Header />
        <div className="render">
          <Outlet />
        </div>
      </div>
      <h2>Footer This is the root component for Footer</h2>
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
