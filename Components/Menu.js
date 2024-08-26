import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" role="button" className="nav-link ms-3" tabindex="0">
              Home
            </Link>

            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <Link
                href="/about-smart-tech-asia"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                About SmartTech Asia
              </Link>
              <Link
                href="/about-messe-muenchen-india"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                About Messe Muenchen India
              </Link>
              <Link
                href="/show-facts"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Show facts 2023
              </Link>
            </NavDropdown>

            <NavDropdown title="Exhibit" id="basic-nav-exhibit">
              <Link
                href="/why-exhibit"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Why exhibit?
              </Link>
              <Link
                href="/exhibitor-profile"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Exhibitor profile
              </Link>
              <Link
                href="https://mmiconnect.in/sta-2025/enquiry?source=website​"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Exhibitor Registration
              </Link>
            </NavDropdown>

            <NavDropdown title="Visit" id="basic-nav-exhibit">
              <Link
                href="/why-visit"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Good Reason to Visit
              </Link>
              <Link
                href="/visitor-profile"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Visitor profile
              </Link>
              <Link
                href="https://mmiconnect.in/sta-2025/visitor/registration?source=website​"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Visitor Registration
              </Link>
              <Link
                href="/how-to-reach"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                How to reach
              </Link>
              <Link
                href="/accompanying-programs"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Accompanying Programs
              </Link>
            </NavDropdown>

            <NavDropdown title="Conference" id="basic-nav-exhibit">
              <Link
                href="/conference-agenda"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Conference Agenda
              </Link>
              <Link
                href="/speakers"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Speakers
              </Link>
            </NavDropdown>

            <NavDropdown title="Press" id="basic-nav-exhibit">
              <Link
                href="/press-releases"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Press Release
              </Link>
              <Link
                href="/press-contact"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Press Contact
              </Link>
            </NavDropdown>

            <Link
              href="/downloads"
              role="button"
              className="nav-link"
              tabindex="0"
            >
              Downloads
            </Link>
            <Link
              href="/photo-gallary"
              role="button"
              className="nav-link"
              tabindex="0"
            >
              Photo Gallary
            </Link>
            <Link
              href="/contact-us"
              role="button"
              className="nav-link"
              tabindex="0"
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
