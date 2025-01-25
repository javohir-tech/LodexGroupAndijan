import { useEffect, useState } from "react";

//react bootstrap
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

// transilation
import { useTranslation } from "react-i18next";

// react router dom
import { NavLink } from "react-router-dom";

export default function MainNavbar() {

  const [navbarFixed, setNavbarFixed] = useState(false)

  const navbarFixedChange = () => {
    if (window.scrollY >= 700) {
      setNavbarFixed(true)
    } else {
      setNavbarFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navbarFixedChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", navbarFixedChange);
    };
  }, []); 

  const { t, i18n } = useTranslation();

  const language = localStorage.getItem("i18nextLng");
  const handleChange = (e) => {
    e.preventDefault();
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const expand = "md";

  return (
    <Navbar expand={expand} className={navbarFixed ? "bg-white shadow-sm py-3 position-fixed w-100" : "bg-white shadow-sm py-3 "}>
      <Container>
        <Navbar.Brand href="#banner" className="fw-bold fs-4 text-primary">
          Lodex Group
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className="bg-light"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
              className="fw-bold text-primary"
            >
              Lodex Group
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="ms-md-auto text-center ">
            <Nav className="px-3 gap-4 align-items-center">
              <Nav.Link className="nav-link text-dark fw-semibold" href="#banner">
                {t("navbar.link1")}
              </Nav.Link>
              <Nav.Link className="nav-link text-dark fw-semibold" href="#about">
                {t("navbar.link2")}
              </Nav.Link>
              <Nav.Link className="nav-link text-dark fw-semibold" href="#services">
                {t("navbar.link3")}
              </Nav.Link>
              <Nav.Link className="nav-link text-dark fw-semibold" href="#portfolio">
                {t("navbar.link4")}
              </Nav.Link>
              <Nav.Link className="nav-link text-dark fw-semibold" href="#contacts">
                {t("navbar.link5")}
              </Nav.Link>
            </Nav>
            <a
              href="tel:+998771232904"
              className="mx-2 navbar-tel "
            >
              +998992807576
            </a>
            <Form.Select
              aria-label="Language select"
              onChange={handleChange}
              value={language}
              className="border-0 shadow-sm mx-auto"
              style={{ width: "100px" }}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </Form.Select>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
