import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar className="my-navbar" light expand="md">
        <div className="container">
          <NavbarBrand className="my-brand" href="/">
            React Restaurant
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
