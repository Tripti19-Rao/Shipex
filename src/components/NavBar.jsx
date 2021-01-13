import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
} from "mdbreact";

function NavBar(props) {
  return (
    <div>
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Shipex</strong>
      </MDBNavbarBrand>
      <MDBCollapse id="navbarCollapse3" navbar>
        <MDBNavbarNav right>
          <MDBNavItem>   
           <MDBNavLink
              className="waves-effect waves-light"
              to={props.navLink.path}
            >
            {props.navLink.label}
           </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    </div>
  ); 
}

export default NavBar;
