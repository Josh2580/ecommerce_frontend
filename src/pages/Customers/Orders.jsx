// Orders.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderDetailsPage from "./OrderDetailsPage"; // Import the new component
import { Pagination } from "react-bootstrap";

const Orders = () => {
  const itemsPerPage = 2;
  // Simulated order data
  const ordersData = [
    { id: 1, status: "successful", date: "2023-01-01", total: 50.0 },
    { id: 2, status: "pending", date: "2023-02-01", total: 75.0 },
    // Add more orders as needed
  ];

  const [orders, setOrders] = useState(ordersData);

  // Function to cancel an order
  const cancelOrder = (orderId) => {
    // Implement cancellation logic (e.g., update order status)
    // For now, let's simulate removing the order from the list
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-4">
      <h2>Order History</h2>
      {orders.map((order) => (
        <Card key={order.id} className="mb-3">
          <Card.Body>
            <Row>
              <Col>
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
              </Col>
              <Col className="text-end">
                <Link
                  to={`/customer/order/${order.id}`}
                  className="btn btn-primary me-2"
                >
                  View Details
                </Link>
                <Button variant="danger" onClick={() => cancelOrder(order.id)}>
                  Cancel Order
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
      <Pagination>
        {[...Array(Math.ceil(orders.length / itemsPerPage)).keys()].map(
          (number) => (
            <Pagination.Item
              key={number + 1}
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </Container>
  );
};

export default Orders;
