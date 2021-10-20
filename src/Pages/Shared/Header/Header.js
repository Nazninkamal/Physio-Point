import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
       
<>
  <Navbar className="navbar navbar-light" style={{backgroundColor:" #e3f2fd"}}sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home"><img style={{width:"50px", borderRadius:"50px"}} src="https://thumbs.dreamstime.com/b/physical-therapy-logo-design-icon-vector-illustration-physical-therapy-logo-design-icon-vector-illustration-health-body-medical-162733976.jpg" alt="" /> 
    Physio Point</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#therapists">Therapist</Nav.Link>
      <Nav.Link as={HashLink} to="/contact">Contact us</Nav.Link>
     {user?.email ?
     <Button onClick={logOut} variant="light">Logout</Button>:
     <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
    //  <Nav.Link as={HashLink} to="/register">Register</Nav.Link>
    }

      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  

  
</>

      
    );
};

export default Header;