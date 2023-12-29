import { styled } from "styled-components";

export const ButtonStyle = styled.button`
  width: ${(props) => props.width || "200px"};
  padding: 0.5rem 2rem;
  font-size: 16px;
  background: none;
`;
