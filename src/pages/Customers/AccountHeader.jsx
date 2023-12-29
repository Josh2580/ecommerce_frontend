import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const AccountHeader = (props) => {
  return (
    <AccountHeaderStyle>
      <NavLink onClick={props.onClick} to="/customer/dashboard">
        <span>Dashboard</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/customer/dashboard/orders">
        <span>My Orders</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/customer/wishlist">
        <span>Wishlist</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/customer/profile">
        <span>Profile</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/customer/address">
        <span>Address</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/customer/change-password">
        <span>Change Password</span>
      </NavLink>
      <NavLink onClick={props.onClick}>
        <span>Logout</span>
      </NavLink>
    </AccountHeaderStyle>
  );
};

export const AccountHeaderStyle = styled.div`
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

export default AccountHeader;

export const AccountMainHeader = (props) => {
  return (
    <AccountMainHeaderStyle>
      <NavLink to="/customer/dashboard">
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/customer/dashboard/orders">
        <span>My Orders</span>
      </NavLink>
      <NavLink to="/customer/wishlist">
        <span>Wishlist</span>
      </NavLink>
      <NavLink to="/customer/profile">
        <span>Profile</span>
      </NavLink>
      <NavLink to="/customer/address">
        <span>Address</span>
      </NavLink>
      <NavLink to="/customer/change-password">
        <span>Change Password</span>
      </NavLink>
      <NavLink>
        <span>Logout</span>
      </NavLink>
    </AccountMainHeaderStyle>
  );
};

const AccountMainHeaderStyle = styled.div`
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
