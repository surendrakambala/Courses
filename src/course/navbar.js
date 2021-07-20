import React from "react";
import { Navbar,NavDropdown,Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { BrowserRouter as Router} from "react-router-dom";
import HtmlRouter from './Routers/router';
import LinkRouter,{HomeRouter} from './Routers/link';



   function Navigations(props){
  return (
    <>
      <div>
      <Router>
        <Navbar bg={props.bg} variant="dark" expand={props.expand}>
          <Navbar.Brand  className="brand  ml-5" href="/" >{props.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <NavDropdown title={props.dropDownTitle} id="navbarScrollingDropdown">



<NavDropdown.Item href="#action/3.1"><LinkRouter /></NavDropdown.Item>

</NavDropdown>
            <Nav className="ml-auto mr-5  my-lg-0"
             style={{ maxHeight: '100px'}}
             navbarScroll>
              
              <Nav.Link href="#home"><HomeRouter /></Nav.Link>
             
            
            </Nav>

            {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="primary">Search</Button>
      </Form> */}
          </Navbar.Collapse>
        </Navbar>

        <HtmlRouter />
       
        </Router>
      </div>
  
    </>
  );
};
export default Navigations;


//  <Navigations name="logo" bg="dark" btnName="submit" expand="lg" btnColor="outline-success" dropDownTitle="dropdown"/>