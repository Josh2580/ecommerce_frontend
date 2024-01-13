import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  useGetOrderByIdQuery,
  useGetOrderAddressQuery,
} from "../source/api/OrderApi";
import { useGetUserProfileQuery } from "../source/api/authenticationApi";
// import "./OrderDetailsPage.css"; // Add your custom styles here

const OrderDetailsPage = ({ order }) => {
  // Assuming 'order' is an object containing order details, customer info, and payment info

  // Get the current location object
  const location = useLocation();

  // Extract the query parameters from the location object
  const queryParams = new URLSearchParams(location.search);

  // Access individual query parameters
  const orderId = queryParams.get("o_id");
  const status = queryParams.get("status");
  const txRef = queryParams.get("tx_ref");

  const { data, error, isLoading } = useGetOrderByIdQuery(orderId);
  const [orderData, setOrderData] = useState();
  const [userDataState, setUserDataState] = useState();
  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useGetUserProfileQuery();

  console.log(userData);
  console.log(orderData);

  useEffect(() => {
    setOrderData(data);
    setUserDataState(userData);
  }, [data, userData]);

  return (
    <Container className="order-details-container">
      <h1>Order Details</h1>
      {data && orderData && (
        <>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h2>Order Status</h2>
                </Card.Header>
                <Card.Body>
                  <p>Status: {status}</p>
                  {/* Add more status-related information */}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>
                  <h2>Customer Information</h2>
                </Card.Header>
                <Card.Body>
                  <p>Name: {userDataState.first_name}</p>
                  <p>Email: {userDataState.email}</p>
                  {/* Add more customer-related information */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header variant="primary">
                  <h2>Payment Information</h2>
                </Card.Header>
                <Card.Body>
                  <p>Payment Method: {orderData.payment_method}</p>
                  <p>Total Amount: {orderData.total_price}</p>
                  {/* Add more payment-related information */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default OrderDetailsPage;
