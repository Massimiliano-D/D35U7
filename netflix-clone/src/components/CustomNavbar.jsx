import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function CustomNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#">
        <img src="assets/logo.png" width="100" height="55" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#" active>
            TV Shows
          </Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Nav>
        <Nav.Link href="#">
          <Icon.Search color="white" />
        </Nav.Link>
        <Nav.Link href="#">KIDS</Nav.Link>
        <Nav.Link href="#">
          <Icon.BellFill color="white" />
        </Nav.Link>
      </Nav>

      <Nav.Link href="#">
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop`}
            size="sm"
            variant="black"
            title={
              <>
                <img src="assets/avatar.png" width="55" height="55" alt="logo" />
              </>
            }
          >
            <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
          </DropdownType>
        ))}
      </Nav.Link>
    </Navbar>
  );
}

export default CustomNavbar;
