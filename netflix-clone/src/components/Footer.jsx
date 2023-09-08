import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="text-center mt-5">
          <Col xs={6} className="offset-3">
            <Row>
              <Col xs={12} className="text-left mb-2">
                <i className="fa fa-facebook footer-icon"></i>
                <i className="fa fa-instagram footer-icon"></i>
                <i className="fa fa-twitter footer-icon"></i>
                <i className="fa fa-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p>Audio and Subtitles</p>
                    <p>Media Center</p>
                    <p>Privacy</p>
                    <p>Contact us</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p>Audio Description</p>
                    <p>Investor Relations</p>
                    <p>Legal Notices</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={12} className="footer-links">
                    <p>Gift Cards</p>
                    <p>Terms of Use</p>
                    <p>Corporate Information</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="text-left mb-2">
                <Button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="text-left mb-2 mt-2 copyright">
                © 1997-2022 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
