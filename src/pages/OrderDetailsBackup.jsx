import React from "react";
import styled from "styled-components";
import { FaSpinner, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { ButtonStyle } from "../components/myModules/Button";
import { NavLink, useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <OrderSuccessStyle>
      <FaCheckCircle className="icon" />
      <h1>Thanks for the Order</h1>
      <TheLinks>
        <ButtonStyle onClick={() => navigate("/")}>Home</ButtonStyle>
        <ButtonStyle onClick={() => navigate("/customer/dashboard")}>
          Dashboard
        </ButtonStyle>
      </TheLinks>
    </OrderSuccessStyle>
  );
};

const OrderSuccessStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 100px 0px 100px;
  padding: 16px;
  box-shadow: 0px 0px 5px 0px #c4bfbf;
  .icon {
    color: green;
    font-size: 30px;
  }
`;

const TheLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export default OrderSuccess;
