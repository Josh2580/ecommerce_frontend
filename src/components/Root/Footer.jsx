import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      {/* <Container>
        <Row>
          <Col lg={4}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
          <Col lg={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col>
            <p className="text-center">
              &copy; 2023 Your Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12} className="text-left text-sm-center">
            <h6 className="small">Contact Us</h6>
            <div className="d-flex flex-column gap-1 fs-6">
              <span className="small">Email: jochuks10@gmail.com</span>
              <span className="small">Phone: +234 706 570-4850</span>
            </div>
          </Col>
          <Col lg={4} md={6} className="text-left text-sm-center mt-3 mt-lg-0">
            <h6 className="small">Follow Us</h6>
            <div className="social-icons d-flex justify-content-sm-center gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
          {/* <Col lg={4} md={12}>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col> */}
        </Row>
        <hr className="my-3" />
        <Row>
          <Col>
            <p className="text-center small ">
              &copy; 2023 Your Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
