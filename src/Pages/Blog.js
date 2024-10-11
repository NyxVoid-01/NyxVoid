import React from 'react';
import Header from '../Components/Header';
import './blog.css';  // Asegúrate de incluir el archivo CSS específico para el blog.

function Blog() {
  return (
    <div>
      <div className="home">
        <Header />
      </div>

      <section className="blog-section">
        <br></br>
        <br></br>
        <h2>Bienvenido a mi Blog</h2>
        <p>Aquí compartiré artículos sobre IA, tecnología y desarrollo personal.</p>

        {/* Título del artículo */}
        <h1 className="blog-title">Un Viaje hacia los Objetivos de Desarrollo Sostenible (ODS)</h1>

        {/* Contenido del blog */}
        <div className="blog-content">
          {/* Introducción */}
          <p className="blog-text">
            Los <strong>Objetivos de Desarrollo Sostenible (ODS)</strong> son un llamado global a la acción, un plan para lograr un futuro más equitativo y sostenible para todos. Durante los últimos años, he estado profundizando en cómo puedo contribuir a estos objetivos a través del desarrollo tecnológico y soluciones innovadoras. ¡Aquí te cuento un poco sobre mi viaje!
          </p>

          {/* Subtítulo */}
          <h2 className="blog-subtitle">¿Qué son los ODS?</h2>
          <p className="blog-text">
            Los ODS fueron creados por las Naciones Unidas en 2015, con el objetivo de erradicar la pobreza, proteger el planeta y garantizar la paz y prosperidad para todos. Existen 17 objetivos que abarcan desde la acción climática hasta la igualdad de género y la educación de calidad. Personalmente, siempre he sentido una profunda conexión con el <strong>ODS 4: Educación de Calidad</strong> y el <strong>ODS 13: Acción Climática</strong>.
          </p>

          {/* Imagen */}
          <div className="blog-image-container">
            <img
              src="https://i0.wp.com/oij.org/wp-content/uploads/2019/07/ods-1.jpg?fit=650%2C422&ssl=1"  // Enlace directo de la imagen
              alt="Objetivos de Desarrollo Sostenible"
              className="blog-image"
            />
          </div>


          {/* Subtítulo */}
          <h2 className="blog-subtitle">Cómo la tecnología puede ayudar</h2>
          <p className="blog-text">
            La tecnología tiene un rol fundamental en el logro de estos objetivos. Desde la creación de aplicaciones educativas accesibles para todos, hasta el desarrollo de soluciones innovadoras que ayuden a combatir el cambio climático, cada línea de código que escribimos tiene el potencial de hacer una diferencia.
          </p>

          {/* Conclusión */}
          <p className="blog-text">
            Este blog es solo el comienzo. Creo firmemente que todos podemos contribuir a los ODS desde nuestras áreas de especialización. ¿Te animas a ser parte del cambio?
          </p>
        </div>
      </section>
    </div>
  );
}

export default Blog;
