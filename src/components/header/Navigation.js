import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

class Navigation extends Component {
  state = {
    isNavOpen: false,
  };

  navToggler = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar className="my-navbar" light expand="md">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <NavbarBrand href="/" className="my-brand">
                  React Restaurant
                </NavbarBrand>
                <NavbarToggler
                  onClick={this.navToggler}
                  style={{ float: "right" }}
                />
              </div>

              <div className="col-md-8">
                <Collapse
                  isOpen={this.state.isNavOpen}
                  navbar
                  className="navbar"
                >
                  <Nav style={{ textAlign: "center" }} navbar>
                    <NavItem>
                      <NavLink to="/" className="nav-link">
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/menu" className="nav-link">
                        Menu
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/about" className="nav-link">
                        About
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/contact" className="nav-link">
                        Contact
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
