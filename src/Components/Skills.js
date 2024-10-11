import React from 'react';
import './CSS/skills.css';

function Skills() {
    return (
        
        <div className="skills-container">
            
            {/* Lenguajes de Programación */}
            <section className="skills">
            <br></br>
            <br></br>
                <h3 align="center">Lenguajes de Programación</h3>
                <br></br>
                <br></br>
                <div className="languages-grid">
                    <div className="language-card javascript">
                        <img src="https://img.icons8.com/fluency/48/javascript.png" alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="language-card python">
                        <img src="https://img.icons8.com/color/48/python--v1.png" alt="Python" />
                        <p>Python</p>
                    </div>
                    <div className="language-card cpp">
                        <img src="https://img.icons8.com/fluency/48/c-plus-plus-logo.png" alt="C++" />
                        <p>C++</p>
                    </div>
                    <div className="language-card c">
                        <img src="https://img.icons8.com/fluency/48/c-programming.png" alt="C" />
                        <p>C</p>
                    </div>
                    <div className="language-card r">
                        <img src="https://img.icons8.com/fluency/48/r-project.png" alt="R" />
                        <p>R</p>
                    </div>
                    <div className="language-card sql">
                        <img src="https://img.icons8.com/color/48/my-sql.png" alt="SQL" />
                        <p>SQL</p>
                    </div>
                </div>
            </section>

            {/* Frameworks y Librerías */}
            <section className="skills">
            <br></br>
            <br></br>
                <h3 align="center">Frameworks y Librerías</h3>
                <br></br>
                <br></br>
                <div className="languages-grid">
                    <div className="language-card react">
                        <img src="https://img.icons8.com/color/48/react-native.png" alt="React" />
                        <p>React</p>
                    </div>
                    <div className="language-card nodejs">
                        <img src="https://img.icons8.com/color/96/nodejs.png" alt="Node js" />
                        <p>Node js</p>
                    </div>
                    <div className="language-card tensorflow">
                        <img src="./tensorflow.svg" alt="Tensorflow" />
                        <p>Tensorflow</p>
                    </div>
                    <div className="language-card keras">
                        <img src="./keras.svg" alt="Keras" />
                        <p>Keras</p>
                    </div>
                    <div className="language-card flask">
                        <img src="https://img.icons8.com/cute-clipart/128/flask.png" alt="Flask" />
                        <p>Flask</p>
                    </div>
                    <div className="language-card numpy">
                        <img src="https://img.icons8.com/color/96/numpy.png" alt="Numpy" />
                        <p>Numpy</p>
                    </div>
                    <div className="language-card pandas">
                        <img src="https://img.icons8.com/color/96/pandas.png" alt="Pandas" />
                        <p>Pandas</p>
                    </div>
                    <div className="language-card matplotlib">
                        <img src="./matplotlib.svg" alt="Matplotlib" />
                        <p>Matplotlib</p>
                    </div>
                    <div className="language-card scikit-learn">
                        <img src="./Scikit-learn.svg" alt="Scikit-learn" />
                        <p>Scikit-learn</p>
                    </div>
                </div>
            </section>

            {/* Herramientas */}
            <section className="skills">
            <br></br>
            <br></br>
                <h3 align="center">Herramientas</h3>
                <br></br>
                <br></br>
                <div className="languages-grid">
                    <div className="language-card vscode">
                        <img src="https://img.icons8.com/color/96/visual-studio-code-2019.png" alt="VS Code" />
                        <p>VS CODE</p>
                    </div>
                    <div className="language-card pycharm">
                        <img src="https://img.icons8.com/color/96/pycharm--v2.png" alt="Pycharm" />
                        <p>Pycharm</p>
                    </div>
                    <div className="language-card github">
                        <img src="https://img.icons8.com/ios-filled/50/github.png" alt="GitHub" />
                        <p>GitHub</p>
                    </div>
                    <div className="language-card gpt">
                        <img src="https://img.icons8.com/ios/50/chatgpt.png" alt="GPT-4" />
                        <p>GPT-4</p>
                    </div>
                    <div className="language-card git">
                        <img src="https://img.icons8.com/color/96/git.png" alt="Git" />
                        <p>Git</p>
                    </div>
                    <div className="language-card linux">
                        <img src="https://img.icons8.com/external-those-icons-flat-those-icons/96/external-Linux-logos-and-brands-those-icons-flat-those-icons.png" alt="Linux" />
                        <p>Linux</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;