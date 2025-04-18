import React from "react";
import {
  ButtonGroup,
  Navbar,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function NavLanding() {
  return (
    <div>
      <Navbar className="navbar-custom py-4" expand="lg">
        <Link to="/" className="ms-5 text-decoration-none">
          <h1 className="brand-heading">ArtisanConnect</h1>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <div className="nav-buttons d-flex gap-3 align-items-center pe-4">
            {/* About and Contact Text Links */}
            <Link to="/about" className="nav-link-text text-decoration-none">
              About
            </Link>
            <Link to="/contact" className="nav-link-text text-decoration-none">
              Contact Us
            </Link>

            {/* Become a Seller Dropdown */}
            <DropdownButton
              variant="outline-light"
              title="Become an Artisan"
              className="seller-btn"
            >
              <Dropdown.Item as={Link} to="/artisan/login">
                Login
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/artisan/register">
                Register
              </Dropdown.Item>
            </DropdownButton>

            {/* Login and Signup Buttons */}
            <ButtonGroup>
              <DropdownButton
                as={ButtonGroup}
                variant="outline-light"
                title="Login"
                className="login-btn"
              >
                <Dropdown.Item as={Link} to="/buyer/login">
                  Buyer
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/deliveryagent/login">
                  Delivery Agents
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/login">
                  Administrator
                </Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                as={ButtonGroup}
                variant="light"
                title="Sign Up"
                className="signup-btn"
              >
                <Dropdown.Item as={Link} to="/buyer/register">
                  Buyer
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/deliveryagent/register">
                  Delivery Agents
                </Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavLanding;
