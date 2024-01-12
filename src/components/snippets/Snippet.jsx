import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AddToCartHandler } from "../ManageCart";

const Snippet = ({ props, maxDescriptionLength = 50 }) => {
  const { id, title, description, price, image } = props;
  const navigate = useNavigate();

  // console.log(image);

  const truncatedDescription =
    description.length > maxDescriptionLength
      ? `${description.slice(0, maxDescriptionLength)}...`
      : description;

  // console.log(props);
  const urlHandler = () => {
    navigate(`/product/${props.id}/${props.category}`);
    // console.log(`${id} url handler`);
  };

  return (
    <SnipStyle
      className="product-card  "
      style={{ border: "none", boxShadow: "0px 4px 6px rgba(51, 51, 51, 0.1)" }}
    >
      <Row className="my_row ">
        <Col xs={12} md={12} lg={12} className="">
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            className="product-image"
            onClick={() => urlHandler()}
          />
        </Col>
        <Col xs={12} md={12} lg={12} className=" py-0 m-0">
          <Card.Body className="py-2">
            <Card.Title
              className="fs-5 d-none d-md-block text-truncate"
              onClick={() => urlHandler()}
              style={{ color: "#575656" }}
            >
              {title}
            </Card.Title>
            <Card.Title
              as="p"
              className="fs-6 d-md-none d-block text-truncate my-1 "
              onClick={() => urlHandler()}
              style={{ color: "#575656" }}
            >
              {title}
            </Card.Title>
            <Card.Text className="product-description d-none d-md-block lh-2 p-0 m-0 mb-1">
              {/* <Card.Text className={`product-description text-${cyan - 500}`}> */}
              {truncatedDescription}
            </Card.Text>
            <Card.Text
              className="product-price d-none d-md-block p-0 m-0"
              style={{ color: "#575656" }}
            >
              ${price}
            </Card.Text>
            <Card.Text
              className="product-price d-md-none fs-6 d-block"
              style={{ color: "#575656" }}
            >
              ${price}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col xs={12}>
          <Card.Body className="py-0 py-0">
            <Button
              variant="primary"
              className="add-to-cart-btn mb-3 w-100 bg-success"
            >
              <AddToCartHandler
                prodId={id}
                prodQty={1}
                navCart={false}
                product={title}
              />
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </SnipStyle>
  );
};

export default Snippet;

const SnipStyle = styled(Card)`
  /* Add this CSS in your styles or App.css file */
  max-width: 18rem;
  /* margin: 2rem; */
  height: fit-content;

  .my_row {
    display: flex;
  }
  .product-card {
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
  }
`;
