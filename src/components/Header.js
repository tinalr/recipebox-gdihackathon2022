import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { NavLink } from "react-router-dom";
import banner from '../assets/imgs/banner.png'

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

        

      <Navbar {...args} className='navbar-expand-lg container-fluid bg-light' fixed='top' style={{
        
      }}>
        <NavbarBrand href="/">Note to Chef</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto mb-2 mb-lg-0 mx-3" navbar>
            <NavItem className="me-3">
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink to='login'>Login</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink to="collections">Collections</NavLink>
            </NavItem>

            {/* Commenting out the 'recipes' tab because we don't want users to navigate there directly, we want them to arrive there from the landing page after making selections */}
            {/* <NavItem>
              <NavLink to="recipes">Recipes</NavLink>
            </NavItem> */}

            {/* for testing only */}
            <NavItem>
              <NavLink to='detail'>Detail-TESTING</NavLink>
            </NavItem>
            {/* for testing only */}

          </Nav>
        </Collapse>
      </Navbar>

      <Container fluid style={{
        backgroundColor: '#123B1F',
        backgroundImage: `url(${banner})`,
        backgroundSize: '100%',
        padding: '0',
        height: '15rem'
     }}>
        {/* <img alt='decorative banner' className='img-fluid h-100' src={banner} style={{
        }} /> */}
     </Container>

    </div>
  );
}

export default Header;
