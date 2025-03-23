import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={6} className="footer-icons">
            <FaInstagram className="footer-icon" />
            <FaFacebookF className="footer-icon" />
            <FaXTwitter className="footer-icon" />
            <FaLinkedinIn className="footer-icon" />
          </Col>
          <Col xs={6} className="footer-text text-end">
            © syncpsychiatry.com | All rights reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
