import React from 'react';
import pedroavatar from '../../assets/img/pedroavatar.jpg';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand " >
        <img src={pedroavatar} alt="Logo" className="d-inline-block align-text-top avatar"/>      
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
            <a className="nav-link active" aria-current="page" >
              PROYECTOS
            </a>
            <a className="nav-link active" aria-current="page" >
              EXPERIENCIA
            </a>
       
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;