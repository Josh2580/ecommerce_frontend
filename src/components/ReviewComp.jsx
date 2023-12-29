import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { styled } from "styled-components";

const ReviewComp = () => {
  return (
    <ReviewStyle>
      <BsStarFill size={15} className="full" />
      <BsStarFill size={15} className="full" />
      <BsStarFill size={15} className="full" />
      <BsStarHalf size={15} className="half" />
      <BsStarFill size={15} className="empty" />
    </ReviewStyle>
  );
};

const ReviewStyle = styled.div`
  display: flex;
  gap: 3px;
  .full,
  .half {
    color: goldenrod;
  }
  .empty {
    color: lightgray;
  }
`;

export default ReviewComp;
