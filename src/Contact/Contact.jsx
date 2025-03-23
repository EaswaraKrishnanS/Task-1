import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-icon">📩</div>
          <h2>
            Join <span className="sync-text">SyNC</span>{" "}
            <span className="newsletter-highlight">Newsletter!</span>
          </h2>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your e-mail address"
              className="newsletter-input"
            />
            <button className="send-button">Send</button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Container fluid className="contact-section">
        <h3 className="h3c">
          <span className="highlight-text">Connect</span> to SyNC
        </h3>

        <Row className="align-items-center justify-content-center">
          {/* Map Section */}
          <Col md={6} className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Jayanagar%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Col>

          {/* Contact Form */}
          <Col md={6} className="form-container">
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    className="contact-input"
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="email"
                    placeholder="Enter your e-mail address"
                    className="contact-input"
                  />
                </Col>
              </Row>
              <Form.Control
                type="text"
                placeholder="Enter the Subject"
                className="contact-input"
              />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                className="contact-input"
              />
              <Button className="send-message-button">
                Send your Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
