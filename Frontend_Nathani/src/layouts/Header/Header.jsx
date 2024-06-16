import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/NATHANI_LOGO.png"
import "./Header.css"

const Header = () => {
  const location = useLocation();

  return (
    <div className="header_main">
      <nav
        className="navbar-default navbar-static-top"
        role="navigation"
        style={{ marginBottom: "0", height: "80px" }}
      >
        <div className="navbar-header">
          <Link className="navbar-brand entry-logo" to="/">
            <img className="header_logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="custom-navigation-wrapper">
        <ul className="nav nav-pills">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/studentProfile' ? 'active' : ''}`}>
            <Link className="nav-link" to="/studentProfile">
              Student Profile
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/application' ? 'active' : ''}`}>
            <Link className="nav-link" to="/application">
              Application
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#settings-pills">
              Settings
            </a>
          </li>
        </ul>
          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown nav-item">
              <a
                className="nav-link "
                data-toggle="dropdown"
                href="#"
              >
                <i className="fa fa-user fa-fw"></i>{" "}
                <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-menu dropdown-user">
                <Link className="dropdown-item" to="#">
                  <i className="fa fa-user fa-fw"></i> User Profile
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="fa fa-gear fa-fw"></i> Settings
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/login">
                  <i className="fa fa-sign-out fa-fw"></i> Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
