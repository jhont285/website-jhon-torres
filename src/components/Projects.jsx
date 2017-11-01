import React from 'react';

import drunk from '../img/drunk.jpg';
import numericsMethods from '../img/numerics_methods.jpg';
import dataStructures from '../img/dataStructures.jpg';
import translate from '../img/translate.jpg';

const Projects = () => (
  <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <DrunkDriver />
        </div>
        <div className="col-md-6">
          <NumericalMethods />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ProjectDS />
        </div>
        <div className="col-md-6">
          <TransaltorClojure />
        </div>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="jumbotron" id="headerProject">
    <div className="container">
      <div className="row">
        <div className="col-sm-offset-2 col-sm-10 col-xs-offset-2 col-xs-10">
          <br /><h1>My projects</h1>
        </div>
      </div>
    </div>
  </header>
);

const DrunkDriver = () => (
  <div>
    <div className="thumbnail">
      <img
        src={drunk}
        className="img-responsive img-rounded"
        width="100%"
        alt="projects"
      />
      <div className="caption">
        <p>Labels:</p>
        <ul className="list-inline">
          <li><span className="label label-default">OOP</span></li>
          <li><span className="label label-default">Imperative Programming</span></li>
          <li><span className="label label-default">Java</span></li>
          <li><span className="label label-default">C++</span></li>
          <li><span className="label label-default">C</span></li>
          <li><span className="label label-default">JavaScript</span></li>
        </ul>
      </div>
      <div className="caption">
        <h1 className="text-center">Game &quot;Drunk driver&quot;</h1>
        <p>
          The game was developed for the subject &quot;Object Oriented
          Programming&quot; taught by teacher &quot;Jorge Enrique Amaya
          Cala&quot; in the University National of Colombia.
        </p>
        <p>The Game has 4 versions</p>
        <ul>
          <li>
            Version en C: it&apos;s used utilizando Imperative programming.
            Interface was made in console.
          </li>
          <li>
            Version en JavaScript: it&apos;s used &quot;Object Oriented
            Programming for prototype&quot;. Interface was made in console.
          </li>
          <li>
            Version en C++: it&apos;s used &quot;Object Oriented Programming&quot;.
            Interface was made with the lib SFML
          </li>
          <li>
            Version en Java: it&apos;s used &quot;Object Oriented Programming&quot;.
            Interface was made with the lib JSFML
          </li>
        </ul>
        <p className="text-center">
          <a
            href="https://github.com/JhonEmmanuelTorres/Project-POO"
            className="btn btn-info btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >I want to see it</a>
        </p>
      </div>
    </div>
  </div>
);

const NumericalMethods = () => (
  <div>
    <div className="thumbnail">
      <img
        src={numericsMethods}
        className="img-responsive img-rounded"
        width="100%"
        alt="projects"
      />
      <div className="caption">
        <p>Labels:</p>
        <ul className="list-inline">
          <li><span className="label label-default">Scilab</span></li>
          <li><span className="label label-default">Numerical Methods</span></li>
          <li><span className="label label-default">Integral Calculus</span></li>
          <li><span className="label label-default">Diferential Calculus</span></li>
          <li><span className="label label-default">Linear Algebra</span></li>
        </ul>
      </div>
      <div className="caption">
        <h1 className="text-center">Numerical Methods</h1>
        <p>
          In this project is all the material and implementations
          of the main numerical methods proposed by Professor
          Edwin Camilo Cubides of the National University of Colombia.
        </p>
        <p>
          The programming lenguage used is &quot;SCILAB&quot;,
          as this is recommended for the applications with maths
        </p>

        <div className="text-center">
          <a href="https://github.com/JhonEmmanuelTorres/MetodosNumericos" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">I want to see it</a>
        </div>
      </div>
    </div>
  </div>
);

const ProjectDS = () => (
  <div>
    <div className="thumbnail">
      <img
        src={dataStructures}
        className="img-responsive img-rounded"
        width="100%"
        alt="projects"
      />
      <div className="caption">
        <p>Labels:</p>
        <ul className="list-inline">
          <li><span className="label label-default">Data Structures</span></li>
          <li><span className="label label-default">Graphs</span></li>
          <li><span className="label label-default">Ordering</span></li>
          <li><span className="label label-default">Java</span></li>
          <li><span className="label label-default">C++</span></li>
        </ul>
      </div>
      <div className="caption">
        <h1 className="text-center">Implementation of Data Structures and Important Algorithms</h1>
        <p>
          In this project are the majority of Data Structures and
          algorithms ordering and graphs
        </p>
        <p>
          Also it is all the material of the teacher &quot;
          Yoan José Pinzón Ardila&quot; of the National University of colombia.
        </p>
        <div className="text-center">
          <a href="https://github.com/JhonEmmanuelTorres/Implementaciones" className="btn btn-success btn-lg" target="_blank" rel="noopener noreferrer">I want to see it</a>
        </div>
      </div>
    </div>
  </div>
);

const TransaltorClojure = () => (
  <section>
    <div className="thumbnail">
      <img
        src={translate}
        className="img-responsive img-rounded"
        width="100%"
        alt="projects"
      />
      <div className="caption">
        <p>Labels:</p>
        <ul className="list-inline">
          <li><span className="label label-default">Parse</span></li>
          <li><span className="label label-default">Antlr</span></li>
          <li><span className="label label-default">Clojure</span></li>
          <li><span className="label label-default">Python</span></li>
          <li><span className="label label-default">Java</span></li>
        </ul>
      </div>
      <div className="caption">
        <h1 className="text-center">
          Translator of the programming language &quot;Clojure&quot; to &quot;Python&quot;
        </h1>
        <p>
          This project was developed for the subject &quot;programming
          languages&quot; taught by teacher &quot;Felipe Restrepo
          Calle&quot; in the University National of Colombia.
        </p>
        <p>
          The project aims to demonstrate that languages that make
          excessive use of parenthesis are impractical and difficult
          to read. Several algorithms are compared to visualize the big difference
        </p>
        <p>In the future it can serve as a source code migration tool.</p>

        <div className="text-center">
          <a rel="noopener noreferrer" href="https://github.com/JhonEmmanuelTorres/LenguajesDeProgramacion" className="btn btn-warning btn-lg" target="_blank">I want to see it</a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
