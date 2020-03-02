import React, { useState } from "react";
import cookie from 'js-cookie'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    const handleChangeLanguage = lang=>{
        if (cookie.get('language') === lang) {
            return
        }else{
            cookie.set('language',lang)
            window.location.reload()
        }

    }
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                language
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem onClick={()=>handleChangeLanguage('en')}>en</DropdownItem>
                <DropdownItem onClick={()=>handleChangeLanguage('ar')}>ar</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
