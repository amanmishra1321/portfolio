import "./navbar.css";
import { useEffect, useState } from "react";
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
              <li className="nav-item Roboto px-2">
                <a
                  className="nav-link text-uppercase text-decoration-none active"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>

              <li className="nav-item Roboto px-2">
                <a
                  className="nav-link text-uppercase text-decoration-none"
                  href="#about"
                >
                  About
                </a>
              </li>

              <li className="nav-item Roboto px-2">
                <a
                  className="nav-link text-uppercase text-decoration-none"
                  href="#services"
                >
                  Services
                </a>
              </li>

              <li className="nav-item Roboto px-2">
                <a
                  className="nav-link text-uppercase text-decoration-none"
                  href="#resume"
                >
                  Resume
                </a>
              </li>

              <li className="nav-item Roboto px-2">
                <a
                  className="nav-link text-uppercase text-decoration-none"
                  href="#contact"
                >
                  Contact
                </a>
              </li>

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
