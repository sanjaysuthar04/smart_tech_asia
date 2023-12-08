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
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                About SmartTech Asia
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                About Messe Muenchen India
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Show facts 2022
              </Link>
            </NavDropdown>

            <NavDropdown title="Exhibit" id="basic-nav-exhibit">
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Why exhibit?
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Exhibitor profile
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Exhibitor Registration
              </Link>
            </NavDropdown>

            <NavDropdown title="Visit" id="basic-nav-exhibit">
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Why visit?
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Visitor profile
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Visitor Registration
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Getting there
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Accompanying Programs
              </Link>
            </NavDropdown>

            <NavDropdown title="Conference" id="basic-nav-exhibit">
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Conference Agenda
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Speakers
              </Link>
            </NavDropdown>

            <NavDropdown title="Press" id="basic-nav-exhibit">
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Press Release
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Press Contact
              </Link>
            </NavDropdown>

            <NavDropdown title="Downloads" id="basic-nav-exhibit">
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Exhibitor Registration
              </Link>
              <Link href="/" className="dropdown-item" data-rr-ui-dropdown-item>
                Glimpses of 2022
              </Link>
            </NavDropdown>

            <Link href="/" role="button" className="nav-link" tabindex="0">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
