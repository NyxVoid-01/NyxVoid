import { Link } from 'react-router-dom';
import React from 'react';
import './CSS/header.css'; // Asegúrate de tener la ruta correcta del CSS.

function Header() {
  return (
    <header className="header">
      {/* Nombre a la izquierda */}
      <div className="logo">
        <h1>NyxVoid</h1> {/* Cambia el nombre si es necesario */}
      </div>

      {/* Enlaces de navegación */}
      <nav className="nav-links-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#portfolio">Portafolio</a></li> {/* Lleva a la sección de proyectos */}
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>

      {/* Switch de descarga */}
      <div className="container">
        <label className="label">
          <input type="checkbox" className="input" />
          <span className="circle">
            <svg
              className="icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              ></path>
            </svg>
            <div className="square"></div>
          </span>
          <p className="title">Download CV</p>
          <p className="title">Open</p>
        </label>
      </div>

      {/* Ícono a la derecha */}
      <div className="user-icon">
        <img src="./thf.jpeg" alt="User Icon" className="user-icon-img" />
      </div>
    </header>
  );
}

export default Header;
