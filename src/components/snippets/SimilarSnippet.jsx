import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AddToCartHandler } from "../ManageCart";
import ProImg from "../../assets/product-1.jpg";

const SimilarSnippet = ({ props, maxDescriptionLength = 50 }) => {
  const { id, title, description, price, image } = props;
  const navigate = useNavigate();

  // console.log(image);

  // console.log(props);
  const urlHandler = () => {
    navigate(`/product/${props.id}/${props.category}`);
    // console.log(`${id} url handler`);
  };

  return (
    <SnipStyle className="product-card">
      <Row className="my_row">
        <Col xs={12} md={12} lg={12} className="">
          <Card.Img
            variant="top"
            src={id == 1 ? image : ProImg}
            alt={title}
            className="product-image"
            onClick={() => urlHandler()}
          />
        </Col>
        <Col xs={12} md={12} lg={12} className=" py-0 m-0">
          <Card.Body className="py-2">
            <Card.Title
              as="p"
              className="fs-6 text-truncate my-0"
              onClick={() => urlHandler()}
              style={{ color: "#575656", fontSize: "14px" }}
            >
              {title}
            </Card.Title>
            <Card.Text
              className="fs-6 product-price d-md-block p-0 m-0"
              style={{ color: "#575656", fontSize: "14px" }}
            >
              ${price}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </SnipStyle>
  );
};

export default SimilarSnippet;

const SnipStyle = styled(Card)`
  /* Add this CSS in your styles or App.css file */
  max-width: 18rem;
  /* margin: 2rem; */
  height: fit-content;

  .my_row {
    display: flex;
    /* justify-content: space-between; */
    /* height: 100%; */
    /* background: yellow; */
  }
  .product-card {
    /* width: 18rem; */
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .product-description {
    color: #555;
    font-size: 14px;
  }

  .product-price {
    font-weight: bold;
  }

  .add-to-cart-btn {
    background-color: #4caf50;
    border: none;
    &:hover {
      background-color: #45a049;
    }
  }

  /* Add this CSS in your styles or App.css file */

  .product-image {
    max-width: 100%;
    height: 150px; /* Adjust as needed */

    max-height: 200px; /* Adjust as needed */
    object-fit: cover; /* Maintain aspect ratio */
    @media (max-width: 550px) {
      max-height: 120px;
    }
  }
`;
