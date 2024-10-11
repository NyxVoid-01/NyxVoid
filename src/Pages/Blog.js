import React from 'react';
import Header from '../Components/Header';

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
      </section>
    </div>
  );
}

export default Blog;