import React from "react";
import { styled } from "styled-components";
import { InputStyle } from "./myModules/Inputs";

const PaymentMethodComp = () => {
  return (
    <PaymentMethodStyle>
      <p>Choose Payment Method</p>
      <Methods>
        <PayGroup>
          <InputStyle
            type="radio"
            id="directBankTransfer"
            name="paymentMethod"
          />
          <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
        </PayGroup>
        <PayGroup>
          <InputStyle type="radio" id="cashOnDelivery" name="paymentMethod" />
          <label htmlFor="cashOnDelivery">Cash on Delivery</label>
        </PayGroup>
        <PayGroup>
          <InputStyle type="radio" id="creditCard" name="paymentMethod" />
          <label htmlFor="creditCard">Credit Card</label>
        </PayGroup>
      </Methods>
    </PaymentMethodStyle>
  );
};

export const PaymentMethodStyle = styled.div`
  /* width: max-content; */

  /* background: yellowgreen; */
  padding: 1rem;
  box-shadow: 0px 4px 7px 1px #dbdbdb;

  p {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #cfcdcd;
  }
`;

export const PayGroup = styled.div`
  display: flex;
  /* background: yellowgreen; */
  width: fit-content;
  gap: 0.2rem;
  /* border-bottom: 1px solid #cfcdcd; */
  padding: 0.5rem;

  label {
    font-size: 1rem;
  }
`;

export const Methods = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
`;

export default PaymentMethodComp;
