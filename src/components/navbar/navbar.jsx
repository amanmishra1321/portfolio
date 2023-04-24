import "./navbar.css";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  const [theme, setTheme] = useState("dark-theme");
  const changeTheme = () => {
    console.log("Clicked", theme);
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="!#">
            <h1 className="heading-name">
              <span className="main-heading">Aman</span> Mishra
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
              <AnchorLink href="#home" className="text-decoration-none">
                <li className="nav-item Roboto px-2">
                  <a
                    className="nav-link text-uppercase active"
                    aria-current="page"
                    href="!#"
                  >
                    Home
                  </a>
                </li>
              </AnchorLink>
              <AnchorLink href="#about" className="text-decoration-none">
                <li className="nav-item Roboto px-2">
                  <a className="nav-link text-uppercase" href="!#">
                    About
                  </a>
                </li>
              </AnchorLink>
              <AnchorLink href="#services" className="text-decoration-none">
                <li className="nav-item Roboto px-2">
                  <a className="nav-link text-uppercase" href="!#">
                    Services
                  </a>
                </li>
              </AnchorLink>
              <AnchorLink href="#resume" className="text-decoration-none">
                <li className="nav-item Roboto px-2">
                  <a className="nav-link text-uppercase" href="!#">
                    Resume
                  </a>
                </li>
              </AnchorLink>
              <AnchorLink href="#contact" className="text-decoration-none">
                <li className="nav-item Roboto px-2">
                  <a className="nav-link text-uppercase" href="!#">
                    Contact
                  </a>
                </li>
              </AnchorLink>

              <li className="nav-item Roboto px-2">
                <div>
                  <label className="switch">
                    <input type="checkbox" onClick={changeTheme} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
