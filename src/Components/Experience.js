import React from 'react';
import './CSS/experience.css';

function Experience() {
    return (
        <section className="experience">
            <h3>Experiencia Profesional</h3>
            <div className="experience-cards">
                <div className="card">
                    <img src="ruta-de-imagen1.jpg" alt="Desarrollador de Software" />  {/* Agregar imagen */}
                    <h4>Desarrollador de Software</h4>
                    <p>Empresa Interbank - Enero 2020 - Presente</p>
                    <p>Desarrollo de aplicaciones web utilizando React, Node.js y bases de datos relacionales.</p>
                </div>
                <div className="card">
                    <img src="ruta-de-imagen2.jpg" alt="Ingeniero de Datos" />  {/* Agregar imagen */}
                    <h4>Ingeniero de Datos</h4>
                    <p>Empresa BCP - Marzo 2018 - Diciembre 2019</p>
                    <p>Integración y procesamiento de grandes volúmenes de datos usando tecnologías como SQL SERVER y GOOGLE ANALITICS.</p>
                </div>
            </div>
        </section>
    );
}

export default Experience;