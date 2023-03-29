import React from 'react';
import pedroavatar from '../../assets/img/pedroavatar.jpg';
import './index.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand " >
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            <img src={pedroavatar} alt="Logo" className="d-inline-block align-text-top avatar" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              activeClass="active"
              to="proyectos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              style={{ fontStyle: "italic" , fontWeight: 'bold' }}
            >
              PROYECTOS
            </Link>
            <Link
              activeClass="active"
              to="experiencia"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              style={{ fontStyle: "italic" , fontWeight: 'bold' }}
            >
              CONÓCEME
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
