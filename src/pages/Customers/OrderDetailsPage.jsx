// OrderDetailsPage.jsx
import React from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const OrderDetailsPage = ({ match }) => {
  // const orderId = match.params.id; // Get order ID from the route parameter
  const { id: orderId } = useParams();

  // Simulate fetching detailed order data based on orderId
  // Replace this with actual API call or database fetch
  const getOrderDetails = () => {
    // Simulated order details
    return {
      id: orderId,
      status: "successful",
      date: "2023-01-01",
      total: 50.0,
      // Add more details as needed
    };
  };

  const order = getOrderDetails();

  return (
    <Container className="mt-4">
      <h2>Order Details</h2>
      <Card>
        <Card.Body>
          <Card.Title>Order #{order.id}</Card.Title>
          <Card.Text>
            <strong>Status:</strong> {order.status}
          </Card.Text>
          <Card.Text>
            <strong>Date:</strong> {order.date}
          </Card.Text>
          <Card.Text>
            <strong>Total:</strong> ${order.total.toFixed(2)}
          </Card.Text>
          {/* Add more order details here */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderDetailsPage;
