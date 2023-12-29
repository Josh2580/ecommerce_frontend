import React from "react";
import { AccHeader, UserDiv } from "./UsersDashboard";
import { AccountMainHeader } from "./AccountHeader";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Address = () => {
  return (
    <UserDiv>
      <AccHeader>
        <AccountMainHeader />
      </AccHeader>
      <AddressStyle>
        <TotalStyle>
          <h3>Billing Address</h3>
          <p>name</p>
          <p>company</p>
          <p>name</p>
          <p>name</p>
          <p>name</p>
          <NavLink to="/customer/address">
            <span>edit</span>
          </NavLink>
        </TotalStyle>
        <TotalStyle>
          <h3>Shippping Address</h3>
          <p>name</p>
          <p>company</p>
          <p>name</p>
          <p>name</p>
          <p>name</p>

          <NavLink to="/customer/address">
            <span>edit</span>
          </NavLink>
        </TotalStyle>
      </AddressStyle>
    </UserDiv>
  );
};

const TotalStyle = styled.div`
  /* text-align: center; */
  box-shadow: 0px 0px 5px 0px #c4bfbf;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  height: max-content;
  a {
    /* text-decoration: none; */
  }
  h3 {
    margin-bottom: 1rem;
  }
`;

const AddressStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export default Address;
