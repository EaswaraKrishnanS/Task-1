import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./PostCard.css";
import sampleImage from "../Images/main-2.png";

const PostCard = () => {
  return (
    <Container fluid className="post-card-container">
      <Row className="align-items-center post-card">
        <Col md={6} className="image-container-pc">
          <img src={sampleImage} alt="Team" className="post-image" />
        </Col>

        <Col md={6} className="text-container-pc">
          <blockquote className="quote">
            <span className="quote-mark">“</span> Taking inspiration directly
            from the founders of Positive Psychology Abraham Maslow and Martin
            Seligman, we believe in human greatness and the ability of each
            person to realize their best self. We will support you to live your
            life to the fullest.
          </blockquote>
          <div className="underline"></div>
          <Button className="sync-button">SyNC Positive.</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCard;
