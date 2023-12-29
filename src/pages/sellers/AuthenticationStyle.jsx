import styled from "styled-components";
// import ResponsiveStyle from "./ResponsiveStyle";
import { Link } from "react-router-dom";

export const Login = styled.div`
  margin: auto;

  width: 100%;
  border: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  span {
    font-size: 14px;
  }

  @media (max-width: 550px) {
    width: 85%;
    max-width: 400px;
  }
`;

export const RegisterStyle = styled(Login)`
  height: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const DetailForm = styled.form`
  /* background: #96c8ec; */
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 1rem 0rem;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  /* box-shadow: 0px 0px 8px 2px #c7c7c7; */
  p {
    text-align: right;
    padding-top: 1rem;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  padding-top: 1rem;
  gap: 0.5rem;
  input,
  select {
    border-radius: 10px;
    font-size: 1rem;
    padding: 10px;
    border: 1px solid #909090;
  }
`;

export const TheButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #634b78;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #642c94;
  font-weight: bolder;
`;
