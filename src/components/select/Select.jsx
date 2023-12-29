import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

// export const QtySelect = ({ size, placeHolder }) => {
//   let arr = new Array(size);

//   {
//     /* Arrray Constructor for changing the QTY to an array of Numbers*/
//   }
//   // {
//   //   [...Array(size).keys()].map((x) => console.log(x));
//   // }

//   return (
//     <SelectStyled>
//       {/* Arrray Constructor for changing the QTY to an array of Numbers*/}
//       {[...Array(size).keys()].map((x) => (
//         <option key={x} value={x + 1}>
//           {x + 1}
//         </option>
//       ))}
//     </SelectStyled>
//   );
// };

export const SelectStyled = styled.select`
  width: 150px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  background: none;
`;
