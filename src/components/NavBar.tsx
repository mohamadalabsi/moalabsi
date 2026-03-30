import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/NavBar.css";

class NavBar extends React.Component<any, any> {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Mohammad Al Absi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="mailto:mohamadalabsi2001@icloud.com">
                <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
              </Nav.Link>
              <Nav.Link href="https://github.com/mohamadalabsi" target="_blank" rel="noreferrer">
                <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/mohammad-al-absi/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
