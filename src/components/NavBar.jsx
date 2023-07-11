import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"
import data from "../data/product.json"
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

const categories = data.map(product => product.category)
const unique = new Set (categories)



export const NavBar = () => (
    <Navbar bg="dark" variant="dark">
   <Container>
       <Link to="/" className="navbar-brand">DistriNorte</Link>
      <Nav className="me-auto">
        {[...unique].map(item => (
          <NavLink
          key={item}
          className="nav-link"
          to ={`/category/${item}`}>
            {item}
          </NavLink>
        ))}
     </Nav>
     <CartWidget/>
    </Container>
  </Navbar>
)