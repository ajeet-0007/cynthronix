// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function OffcanvasExample() {
//   return (
//     <>
//       {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
//         <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
//           <Container fluid>
//             <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>
//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
                
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default OffcanvasExample;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cynthronixLogo from '../../assets/cynthronix_logo.png'
import { NavLink } from "react-router-dom";
import './BrandExample.css'

function CollapsibleExample() {
  return (
  
    // <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-dark" >
    //   <Container className='bg-dark' style={{width: "100%"}}>
    //     <img src={cynthronixLogo} alt="logo"></img>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <NavLink to='/' >Our Work</NavLink>
    //         <NavLink to='/services' >Services</NavLink>
    //         <NavLink to='/company' >Company</NavLink>
    //         <NavLink to='/career' >Career</NavLink>  
    //         <NavLink to='/contact-us' >Contact Us</NavLink>  
    //       </Nav>
         
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav class="navbar navbar-expand-lg bg-body-tertiary  ticky-top" style={{backgroundColor:"#031e16"}}>
  <div class="container-fluid " style={{backgroundColor:"#031e16"}}>
  <img src={cynthronixLogo} alt="logo"></img>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
      
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
   
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item" >
        <NavLink to='/' class="nav-link active" >Our Work</NavLink>
        </li>
        <li class="nav-item" >
        <NavLink to='/services' class="nav-link active" >Services</NavLink>
        </li>
        <li class="nav-item" >
        <NavLink to='/company' class="nav-link active" >Company</NavLink>
        </li>
        <li class="nav-item" >
        <NavLink to='/career' class="nav-link active">Career</NavLink>  
        </li>
        <li class="nav-item" >
        <NavLink to='/contact-us' class="nav-link active">Contact Us</NavLink>   
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  );
}

export default CollapsibleExample;