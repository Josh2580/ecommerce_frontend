import React from "react";
import { SellersMainHeader } from "./SellersHeader";
import { AccHeader, UserDiv } from "./SellersDashboard";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SellersReport = () => {
  return (
    <UserDiv>
      <AccHeader>
        <SellersMainHeader />
      </AccHeader>
      <SellersReportStyle>
        <TotalStyle>
          <h3>Daily Report</h3>
          <NavLink to="/customer/dashboard/orders">
            <span>View</span>
          </NavLink>
        </TotalStyle>
        <TotalStyle>
          <h3>Monthly Report</h3>
          <NavLink>
            <span>View</span>
          </NavLink>
        </TotalStyle>
        <TotalStyle>
          <h3>Yearly Report</h3>
          <NavLink>
            <span>View</span>
          </NavLink>
        </TotalStyle>
      </SellersReportStyle>
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

const SellersReportStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export default SellersReport;
