import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import UserLogo from '../imagenes/user-solid.svg'
import { Link } from 'react-router-dom';

const title = "Semana 3";

function Header() {
    return (
        <Navbar className="px-3" bg="light" expand="lg">
          <Container>
            <Link to="/Items">
              <Navbar.Brand>{title}</Navbar.Brand>
            </Link>
            <Link to="/ProfilePage">           
            <Navbar.Brand>
                <img src={UserLogo} width="30" height="30" alt="" ></img>
              </Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
    );
}

export default Header;