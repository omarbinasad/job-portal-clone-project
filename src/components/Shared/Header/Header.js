import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [style, setStyle] = useState("see-more-btn-2");
  const invisible = () => {
    setStyle("display-none");
  };
  const visible = () => {
    setStyle("see-more-btn-2");
  };
  return (
    <div>
      {" "}
      {/* collapse bar  */}
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
          <button
            onClick={visible}
            className="cross-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            <i class="fas fa-times "></i>
          </button>
        </div>
      </div>
      {/* top bar  */}
      <div className="top-bar d-none d-sm-block d-sm-none d-md-block">
        <div className="container">
          <button
            onClick={invisible}
            className={style}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            <i class="fas fa-chevron-down"></i>
          </button>
          <div className="">
            <a href="#home">JOBS</a>
            <a href="#news">MY BDJOBS</a>
            <a href="#contact">E-LEARNING</a>
            <a href="#contact">TENDER/EOI</a>
            <a href="#contact">EMPLOYERS</a>
          </div>
          <div className="top-bar-social">
            <i class="fab fa-youtube"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-google"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      {/* Nav Bar / Header  */}
      <Navbar className="shadow" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Link to="/">
              {" "}
              <h1>LOGO</h1>
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto my-2 my-lg-0 "
              //   style={{ maxHeight: "200px" }}
            >
              <Nav.Link href="#action1">
                Video Resume{" "}
                <span
                  class="badge"
                  style={{
                    color: "#B3003C",
                    fontSize: "10px",
                    position: "relative",
                    lineHeight: "10px",
                    // padding: "1px 7px 4px 7px",
                    margin: "-10px 0px 0px 4px",
                    backgroundColor: "transparent",
                    border: "1px solid #B3003C",
                    borderRadius: "50px",
                  }}
                >
                  new
                </span>
              </Nav.Link>

              <NavDropdown
                title="Career Resources"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action1">
                  Carear Guide
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                  Interview Tips
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  Resume Writing Tips
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Cover Letter
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Articles</NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Career Counselling
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  Education Guide
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action8">Sign in or Create Account</Nav.Link>
              <Nav.Link href="#action9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>{" "}
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
