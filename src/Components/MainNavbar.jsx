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
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng");
  const handleChange = (e) => {
    e.preventDefault();
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const expand = "md";
  return (
    <Navbar expand={expand} className="bg-white shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4 text-primary">
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
              <NavLink className="nav-link text-dark fw-semibold" to={"/"}>
                {t("navbar.link1")}
              </NavLink>
              <NavLink className="nav-link text-dark fw-semibold">
                {t("navbar.link2")}
              </NavLink>
              <NavLink className="nav-link text-dark fw-semibold">
                {t("navbar.link3")}
              </NavLink>
              <NavLink className="nav-link text-dark fw-semibold">
                {t("navbar.link4")}
              </NavLink>
              <NavLink
                className="nav-link text-dark fw-semibold"
                to={"/ourTeam"}
              >
                {t("navbar.link5")}
              </NavLink>
              <NavLink
                className="nav-link text-dark fw-semibold"
                to={"/blog"}
              >
                {t("navbar.link6")}
              </NavLink>
            </Nav>
            <a
              href="tel:+998771232904"
              className="mx-2 navbar-tel "
            >
              +998771232904
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
