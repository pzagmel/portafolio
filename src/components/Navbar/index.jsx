import React, { useState } from 'react';
import pedroavatar from '../../assets/img/pedroavatar.jpg';
import './index.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const collapseItems = [
    { to: 'proyectos', label: 'PROYECTOS' },
    { to: 'experiencia', label: 'CONÓCEME' },
  ];

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="navbar-brand">
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
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {collapseItems.map((item, index) => (
              <Link
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '22px' }}
                key={index}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
