import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Title() {
  return (
    <Row className="justify-content-between">
      <Col xs="auto">
        <span className="mb-4 me-5 fs-1 text-secondary">TV Shows</span>
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            className="pb-2"
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop`}
            size="sm"
            variant="dark"
            title={
              <>
                <span>Generi</span>
              </>
            }
          >
            <Dropdown.Item eventKey="1">Azione</Dropdown.Item>
            <Dropdown.Item eventKey="2">Animazione</Dropdown.Item>
          </DropdownType>
        ))}
      </Col>
    </Row>
  );
}
export default Title;
