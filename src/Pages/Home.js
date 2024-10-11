import React from 'react';
import Header from '../Components/Header';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import Certifications from '../Components/Certifications';
import Footer from '../Components/Footer';
import './home.css'; // Archivo CSS que usaremos para el diseño

function Home() { 
  return (
    <div className="home">
      <Header />

      <section className="intro">
        {/* Botones de Redes Sociales */}
        <div className="social-buttons">
          <ul>
            <li className="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://github.com/NyxVoid-01" target="_blank" rel="noopener noreferrer">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.123-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.242 2.872.119 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.624-5.48 5.921.43.371.823 1.103.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <div className="text">GitHub</div>
            </li>
            <li className="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://www.linkedin.com/in/antony-mendoza-villar-a41616326/" target="_blank" rel="noopener noreferrer">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.78zm-46.14-337C24.27 111 0 86 0 54.1A54.09 54.09 0 0 1 54.14 0 54.09 54.09 0 0 1 108.3 54.1c0 31.9-24.27 56.9-54.16 56.9zM447.9 448h-92.8V302.4c0-34.7-12.6-58.4-44-58.4-24 0-38.2 16.1-44.5 31.7-2.3 5.5-2.8 13.2-2.8 20.9V448h-92.78s1.2-241.4 0-266.5h92.78v37.8c-0.2 0.3-0.5 0.7-0.7 1h0.7v-1c12.3-19 34.3-46 83.4-46 60.8 0 106.4 39.6 106.4 124.7V448z"/>
                </svg>
              </a>
              <div className="text">LinkedIn</div>
            </li>
            <li className="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href="antony.mendoza@upch" target="_blank" rel="noopener noreferrer">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M502.3 190.8L327.4 337c-16.2 13.5-41.6 13.5-57.8 0L9.7 190.8c-12.4-10.4-15.1-29.2-5.6-43.4s29.2-15.1 43.4-5.6l210.2 175.3 210.2-175.3c14.3-11.9 33.5-9.5 43.4 5.6s6.8 33.1-5.6 43.4z"/>
                </svg>
              </a>
              <div className="text">Gmail</div>
            </li>
          </ul>
        </div>

        {/* Texto de Introducción */}
        <div className="intro-text">
          <h1>Estudiante de Ingeniería<br />Informática</h1>
          <h3 style={{ color: '#ffae38' }}>Soy Antony Villar, desarrollador de software apasionado por crear soluciones innovadoras mediante el uso de la inteligencia artificial, con un especial interés en procesamiento de lenguaje natural (NLP). Además, disfruto de la meditación y tengo un gran gusto por el rock gótico.</h3>
          <h9>Ayudando a hacer del mundo un lugar mejor a través del software de calidad.</h9>

          {/* Flecha de Scroll debajo del texto */}
          <a href="#portfolio" className="scroll-down">
            <span>↓</span>
            <p>Learn more about me</p>
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="intro-image">
          <img src="./perfil.png" alt="Imagen de Introducción" />
        </div>
      </section>

      {/* Sección de Portafolio (Proyectos) */}
      <section id="portfolio">
        <Projects />
      </section>

      {/* Sección de Habilidades */}
      <section id="skills">
        <Skills />
      </section>

      {/* Sección de Certificaciones */}
      <section id="certifications">
        <br></br>
        <br></br>
        <br></br>
        <Certifications />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
