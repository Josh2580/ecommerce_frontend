import React from "react";
import { AccountHeaderStyle } from "../../pages/Customers/AccountHeader";
import { NavLink } from "react-router-dom";

const MobileMenu = (props) => {
  return (
    <AccountHeaderStyle>
      <NavLink onClick={props.onClick}>
        <span>Home</span>
      </NavLink>
      <NavLink onClick={props.onClick}>
        <span>Category's</span>
      </NavLink>
      <NavLink onClick={props.onClick}>
        <span>About</span>
      </NavLink>
      <NavLink onClick={props.onClick}>
        <span>Contact</span>
      </NavLink>
    </AccountHeaderStyle>
  );
};

export default MobileMenu;
