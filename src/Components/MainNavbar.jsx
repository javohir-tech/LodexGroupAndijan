//react bootstarp
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

//react router dom 
import { NavLink } from 'react-router-dom';

export default function MainNavbar() {
    const expand = "md"
    return (
        <Navbar expand={expand} className="bg-body-tertiary mb-3">
            <Container >
                <Navbar.Brand href="#">Lodex Group</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='ms-auto d-flex align-items-center'>
                        <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
                            <NavLink className="nav-link" to={"/"}>Home</NavLink>
                            <NavLink className="nav-link">About</NavLink>
                            <NavLink className="nav-link">Xizmatlarimiz</NavLink>
                            <NavLink className="nav-link">Portfolio</NavLink>
                            <NavLink className="nav-link" to={"/ourTeam"}>Jamoamiz</NavLink>
                            <NavLink className="nav-link" to={"/blog"}>Blog</NavLink>
                        </Nav>
                        <a href='totel: +998771232904' className='mx-2 navbar-tel'>+998771232904</a>
                        <Form.Select aria-label="Default select example">
                            <option>uzbek</option>
                            <option value="1">uz</option>
                            <option value="2">ru</option>
                            <option value="3">eng</option>
                        </Form.Select>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
