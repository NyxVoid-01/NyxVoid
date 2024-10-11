import React from 'react';
import './CSS/certifications.css';

function Certifications() {
  return (
    <section className="certifications">
      <h3 align="center">Certificaciones</h3>
      <br></br>
      <div className="card-certifications-container">

        {/* Card 1 */}
        <div className="card-certifications">
          <div className="front-content">
            <img src="./ptql.png" alt="Certificado 1" /> {/* Imagen inicial */}
          </div>
          <div className="content-certifications">
            <p className="heading">ONG "Perú Te Quiero Limpio"</p>
            <p>
            Dedicada a la preservación del medio ambiente, en reconocimiento por la participación 
            voluntaria en la limpieza de la Playa Los Delfines en Ventanilla, Callao, contribuyendo al éxito de una jornada ambiental de 4 horas.
            </p>
          </div>
        </div>

        {/* Card 2 */} 
        <div className="card-certifications">
          <div className="front-content">
            <img src="./aws2.png" alt="Certificado 2" />
          </div>
          <div className="content-certifications">
            <p className="heading">AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 2:</p>
            <p>
            Certifica el dominio de conceptos fundamentales de la nube en AWS, cubriendo servicios clave, seguridad, redes y almacenamiento,
            preparando al estudiante para implementar soluciones en la nube.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Certifications;
