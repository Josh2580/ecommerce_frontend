import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SellersHeader = (props) => {
  return (
    <SellersHeaderStyle>
      <NavLink onClick={props.onClick} to="/seller/dashboard">
        <span>Dashboard</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/seller/products">
        <span>Products</span>
      </NavLink>

      <NavLink onClick={props.onClick} to="/seller/add-products">
        <span>Add Products</span>
      </NavLink>

      <NavLink onClick={props.onClick} to="/seller/orders">
        <span>Orders</span>
      </NavLink>

      <NavLink onClick={props.onClick} to="/seller/customers">
        <span>Customers</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/seller/reports">
        <span>Reports</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/seller/change-password">
        <span>Change Password</span>
      </NavLink>
      <NavLink onClick={props.onClick}>
        <span>Logout</span>
      </NavLink>
    </SellersHeaderStyle>
  );
};

export const SellersHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* font-size: 16px; */
  width: 100%;
  /* max-width: 300px; */
  /* box-shadow: 0px 0px 5px 0px #c4bfbf; */
  /* margin: 1rem; */

  a {
    text-decoration: none;
    border-top: 1px solid #ebebeb;
    padding: 10px 0px;
    span {
      padding: 0px 16px;
    }
  }
`;

export default SellersHeader;

export const SellersMainHeader = (props) => {
  return (
    <SellersMainHeaderStyle>
      <NavLink to="/seller/dashboard">
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/seller/products">
        <span>Products</span>
      </NavLink>
      <NavLink to="/seller/add-products">
        <span>Add Products</span>
      </NavLink>
      <NavLink to="/seller/orders">
        <span>Orders</span>
      </NavLink>
      <NavLink to="/seller/customers">
        <span>Customers</span>
      </NavLink>
      <NavLink to="/seller/reports">
        <span>Reports</span>
      </NavLink>
      <NavLink to="/seller/change-password">
        <span>Change Password</span>
      </NavLink>
      <NavLink>
        <span>Logout</span>
      </NavLink>
    </SellersMainHeaderStyle>
  );
};

const SellersMainHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* font-size: 16px; */
  width: 100%;
  /* max-width: 300px; */
  /* box-shadow: 0px 0px 5px 0px #c4bfbf; */
  /* margin: 1rem; */

  a {
    text-decoration: none;
    border-top: 1px solid #ebebeb;
    padding: 10px 0px;
    span {
      padding: 0px 16px;
    }
  }
`;
