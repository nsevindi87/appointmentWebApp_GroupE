import React, { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loggedIn, setLoggedIn } = useContext(UsersContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <Navbar bg="light" variant="light" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img alt="logo" style={{ width: "5rem" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-1 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to={loggedIn ? "/appointment" : "/login"}>
                Appointment
              </Nav.Link>
              {loggedIn && (
                <>
                  <Nav.Link as={NavLink} to="/doctors">
                    Doctors
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link onClick={handleSignOut}>Sign out</Nav.Link>
                </>
              )}
              {!loggedIn && (
                <>
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/signup">
                    Sign up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
