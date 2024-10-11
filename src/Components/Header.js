import React, { useState } from 'react';
import './CSS/header.css';

function Header() {
  const [isDownloadReady, setIsDownloadReady] = useState(false);

  // Función para manejar el clic en "Download CV"
  const handleDownloadClick = () => {
    setIsDownloadReady(true);  // Habilitar el texto "Open"
  };

  // Función para iniciar la descarga del archivo
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/cv.pdf`;  // Ruta del archivo CV
    link.setAttribute('download', 'CV_Antony_Villar.pdf');  // Nombre del archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);  // Eliminar el enlace después de la descarga
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <h1>NyxVoid</h1>
      </div>

      {/* Enlaces de navegación */}
      <nav className="nav-links-container">
        <ul className="nav-links">
          <li><a href="/NyxVoid">Home</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>

      {/* Switch para "Download CV" */}
      <div className="container">
        <label className="label">
          {/* Switch activado por el checkbox */}
          <input
            type="checkbox"
            className="input"
            onChange={handleDownloadClick}  // Cambia el texto a "Open"
          />
          <span className="circle">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19V5m0 14l-4-4m4 4l4-4"
              />
            </svg>
            <div className="square"></div>
          </span>
          {/* Texto del botón: Cambia a "Open" cuando esté listo para la descarga */}
          <p className="title">Download CV</p>
          <p className="title" onClick={isDownloadReady ? downloadCV : null}>
            {isDownloadReady ? 'Open' : 'Download CV'}
          </p>
        </label>
      </div>

      {/* Icono del usuario */}
      <div className="user-icon">
        <img src="/NyxVoid/thf.jpeg" alt="User Icon" className="user-icon-img" />
      </div>
    </header>
  );
}

export default Header;
