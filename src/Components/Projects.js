import React from 'react';
import './CSS/projects.css';

function Projects() {
  return (
    <section className="projects">
      <h1 align="center">My Projects</h1>
      <br></br>
      <div className="project-cards">

        {/* Tarjeta de proyecto 1 */}
        <div className="card-projects">
          <div className="blob"></div>
          <div className="card-base"></div>
          <div className="card-image" style={{ backgroundImage: 'url(https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjiiw67bznqp946gkknl0.png)' }}></div>
          <div className="card-overlay"></div>

          {/* Información que aparece al hacer hover, se desliza desde arriba */}
          <div className="project-info">
            <div className="project-tech-logos">
              <img src="https://img.icons8.com/color/48/python--v1.png" alt="Python" />
              <span className="more-tech">+</span> {/* Símbolo "+" agregado */}
              <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-shadow-tal-revivo.png" alt="AWS" />
              <a href="https://github.com/Marlith08/AWS_Project_Template.git" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/github.png" alt="GitHub Logo" />
              </a>
            </div>
          </div>

          <div className="details-projects">
            <div className="cardHeader-projects">
              <h3>Coordinación de tareas en aplicaciones distribuidas con AWS Step Functions</h3>
            </div>
            <div className="cardText-projects">
              <p>Este proyecto se centra en la creación de flujos de trabajo complejos y la coordinación de tareas en aplicaciones distribuidas utilizando AWS Step Functions.</p>
            </div>
          </div>
        </div>

        {/* Tarjeta de proyecto 2 */}
        <div className="card-projects">
          <div className="blob"></div>
          <div className="card-base"></div>
          <div className="card-image" style={{ backgroundImage: 'url(./ML.png)' }}></div>
          <div className="card-overlay"></div>

          <div className="project-info">
            <div className="project-tech-logos">
              <img src="https://img.icons8.com/color/48/tensorflow.png" alt="Tensorflow" />
              <span className="more-tech">+</span> {/* Símbolo "+" agregado */}
              <img src="https://img.icons8.com/color/48/python--v1.png" alt="Python" />
              <a href="https://github.com/cdpalacios/retinopatia-diabetica-intro-ml.git" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/github.png" alt="GitHub Logo" />
              </a>
            </div>
          </div>

          <div className="details-projects">
            <div className="cardHeader-projects">
              <h3 style={{ color: '#ffae38' }}>Detección de Retinopatías Diabéticas con ML</h3>
            </div>
            <div className="cardText-projects">
              <p >Se entrenaron modelos para identificar la enfermedad a partir de imágenes oculares, enfrentando el desafío del overfitting, lo que motivó ajustes para mejorar la generalización del modelo.</p>
            </div>
          </div>
        </div>

        {/* Tarjeta de proyecto 3 */}
        <div className="card-projects">
          <div className="blob"></div>
          <div className="card-base"></div>
          <div className="card-image" style={{ backgroundImage: 'url(./SolarWind.jpg)' }}></div>
          <div className="card-overlay"></div>

          <div className="project-info">
            <div className="project-tech-logos">
              <img src="https://img.icons8.com/fluency/48/arduino.png" alt="Arduino" />
              <span className="more-tech">+</span> {/* Símbolo "+" agregado */}
              <img src="https://fudeso.cl/wp-content/uploads/2018/05/wp-image5487008951365656876-150x150.png" alt="ODS 7" />
              <a href="https://github.com/EdwinJaraOFC/SolarWindAnalyzer.git" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/github.png" alt="GitHub Logo" />
              </a>
            </div>
          </div>

          <div className="details-projects">
            <div className="cardHeader-projects">
              <h3>SolarWindAnalyzer</h3>
            </div>
            <div className="cardText-projects">
              <p>Este proyecto explorará cómo la implementación de energías limpias contribuye al logro del ODS 7, garantizando un acceso equitativo a una energía asequible y sostenible.</p>
            </div>
          </div>
        </div>

        {/* Tarjeta de proyecto 4 */}
        <div className="card-projects">
          <div className="blob"></div>
          <div className="card-base"></div>
          <div className="card-image" style={{ backgroundImage: 'url(./portal_matricula.png)' }}></div>
          <div className="card-overlay"></div>

          <div className="project-info">
            <div className="project-tech-logos">
              <img src="./numpy.svg" alt="JavaScript" />
              <span className="more-tech">+</span> {/* Símbolo "+" agregado */}
              <img src="https://img.icons8.com/color/48/python--v1.png" alt="HTML" />
              <a href="https://github.com/Edithson1/Analysis_and_Design_of_Algorithms_Grupo-3.git" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/github.png" alt="GitHub Logo" />
              </a>
            </div>
          </div>

          <div className="details-projects">
            <div className="cardHeader-projects">
              <h3 style={{ color: 'black' }} >Portal de matrícula eficiente para la UPCH</h3>
            </div>
            <div className="cardText-projects">
              <p style={{ color: 'black' }} >Se implementaron algoritmos genéticos y técnicas basadas en el azar, como la aleatorización, para optimizar el proceso de inscripción, mejorando la asignación de cursos y recursos de manera eficiente.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
