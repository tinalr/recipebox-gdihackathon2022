import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row
} from "reactstrap";
import { NavLink } from "react-router-dom";
import banner from '../assets/imgs/banner.png'

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>



      <Navbar {...args} className='navbar-expand-md container-fluid' fixed='top' style={{
        backgroundColor: '#123B1F',
        padding: '0',
        boxShadow: '2px 0px 10px black'
      }}>
        <NavbarBrand href="/"
          style={{
            color: 'white',
            fontFamily: 'Vibur, cursive',
            fontSize: '3rem',
            padding: '1rem',
            textShadow: '2px 2px 1rem black'
          }}
        >Note to Chef</NavbarBrand>
        <NavbarToggler className="navbar-dark" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto mb-2 mb-lg-0 mx-3" navbar
            style={{}}
          >
            <NavItem className="me-3"
            >
              <NavLink to="/" className='navlink'
                style={{
                  // color: 'white',
                  // fontFamily: 'Vibur, cursive',
                  // fontSize: '1.5rem',
                  // textDecoration: 'none'
                }}
              >HOME</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink className='navlink' to="about">ABOUT</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink className='navlink' to="collections">COLLECTIONS</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink className='text-success btnhover navlink' to='login'>LOGIN</NavLink>
            </NavItem>

            {/* Commenting out the 'recipes' tab because we don't want users to navigate there directly, we want them to arrive there from the landing page after making selections */}
            {/* <NavItem>
              <NavLink to="recipes">Recipes</NavLink>
            </NavItem> */}

            {/* for testing only */}
            {/* <NavItem>
              <NavLink to='detail'>Detail-TESTING</NavLink>
            </NavItem> */}
            {/* for testing only */}

          </Nav>
        </Collapse>
      </Navbar>

      <Container fluid style={{
        backgroundColor: '#123B1F',
        backgroundImage: `url(${banner})`,
        backgroundSize: '100%',
        padding: '0',
        height: '15rem',
        marginBottom: '3rem',

      }}>

      </Container>


      {/* <Row className="" style={{
        height: '15rem',
      }}></Row> */}
    </div>
  );
}

export default Header;
