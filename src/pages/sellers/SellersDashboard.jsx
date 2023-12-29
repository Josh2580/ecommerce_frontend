import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { SellersMainHeader } from "./SellersHeader";

const SellersDashboard = () => {
  return (
    <UserDiv>
      <AccHeader>
        <SellersMainHeader />
      </AccHeader>

      <SellerStyle>
        <TotalStyle>
          <h3>Total Products</h3>
          <NavLink to="/customer/dashboard/orders">
            <span>132</span>
          </NavLink>
        </TotalStyle>
        <TotalStyle>
          <h3>Total Orders</h3>
          <NavLink>
            <span>129</span>
          </NavLink>
        </TotalStyle>
        <TotalStyle>
          <h3>Total Customers</h3>
          <NavLink>
            <span>12</span>
          </NavLink>
        </TotalStyle>
      </SellerStyle>
    </UserDiv>
  );
};

const TotalStyle = styled.div`
  text-align: center;
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

const SellerStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const AccHeader = styled.div`
  width: 100%;
  max-width: 300px;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

export default SellersDashboard;
