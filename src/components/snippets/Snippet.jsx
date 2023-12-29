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
    <SnipStyle className="product-card">
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            className="product-image"
            onClick={() => urlHandler()}
          />
        </Col>
        <Col xs={12} md={12} lg={12}>
          <Card.Body>
            <Card.Title onClick={() => urlHandler()}>{title}</Card.Title>
            <Card.Text className="product-description">
              {truncatedDescription}
            </Card.Text>
            <Card.Text className="product-price">${price}</Card.Text>
            <Button variant="primary" className="add-to-cart-btn">
              <AddToCartHandler prodId={id} prodQty={1} />
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
    margin-bottom: 10px;
  }

  .product-price {
    font-weight: bold;
    margin-bottom: 15px;
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
