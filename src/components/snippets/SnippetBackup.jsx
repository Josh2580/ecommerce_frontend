import React from "react";
import styled from "styled-components";
import {
  BsStarFill,
  BsStarHalf,
  BsCartPlus,
  BsCartPlusFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Snippet = ({ props }) => {
  const navigate = useNavigate();

  // console.log(props);
  const urlHandler = () => {
    navigate(`/product/${props.id}/${props.category}`);
    // console.log(`${id} url handler`);
  };

  return (
    <SnipStyle>
      <img src={props.image} alt="SnipImg" onClick={() => urlHandler()} />
      <div className="details">
        <p className="categoryName">{props.category_name}</p>

        <p className="name">{props.title}</p>
        <p className="price">{props.price}</p>
        {/* <div className="review">
          <div className="icon">
            <BsStarFill className="fullStar" />
            <BsStarFill className="fullStar" />
            <BsStarFill className="fullStar" />
            <BsStarHalf className="halfStar" />
            <BsStarFill className="emptyStar" />
          </div>

          <p className="reviewNumber"></p>
        </div> */}
        <BsCartPlusFill />
      </div>
    </SnipStyle>
  );
};

const SnipStyle = styled.div`
  box-shadow: 0px 0px 7px -1px #96969653;
  /* text-align: center; */
  max-width: 400px;
  max-height: 400px;

  img {
    min-width: 200px;
    width: 100%;
    max-height: 200px;
    @media (max-width: 550px) {
      min-width: 120px;
    }
  }
  .details {
    padding: 5px 10px 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    .categoryName {
      font-size: 0.9em;
      color: gray;
    }
    .price {
      color: purple;
    }
    .review {
      display: flex;
      padding-top: 5px;
      /* display: none; */
      /* justify-content: center; */
      gap: 0.5em;
      .icon {
        color: #ff990094;
        .emptyStar {
          color: lightgray;
        }
      }
    }
  }
`;

export default Snippet;
