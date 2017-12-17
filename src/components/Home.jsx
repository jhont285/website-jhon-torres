import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Modal } from 'react-bootstrap';

// images and cv in pdf
import cartPhotography from '../img/cardPhotography.jpg';
import logoUnal from '../img/logoUnal.png';
import logoIndra from '../img/logoIndra.png';
import logoSchool from '../img/logoSchool.jpeg';
import logoSENA from '../img/logoSENA.png';
import myCV from '../docs/CV.pdf';

// icons technologies
import tecLearning from './technologies/Learning.json';
import tecIntermediate from './technologies/Intermediate.json';
import tecGood from './technologies/Good.json';

class Home extends Component {
  constructor() {
    super();
    this.state = { isOpenModal: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  openModal() {
    this.setState({ isOpenModal: true });
  }

  closeModal() {
    this.setState({ isOpenModal: false });
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <section className="container">
          <div className="row">
            <div className="col-md-4">
              <MyPhotography />
              <TextMotivation />
              <hr />
              <MyLanguagues />
              <hr />
              <Hobbies />
            </div>
            <div className="col-md-4">
              <AboutMe />
              <hr />
              <Technologies />
            </div>
            <div className="col-md-4">
              <Education />
              <hr />
              <Experience />
              <hr />

              <h2 className="text-center">Time Lime Hobbies <FontAwesome name="calendar-times-o" /></h2>
              <br />

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success pulse-success"
                  onClick={this.openModal} bsSize="lg"
                >
                  Look at my timeline
                </button>
              </div>

              <Modal show={this.state.isOpenModal} onHide={this.closeModal} bsSize="lg">
                <Modal.Body className="timeLine">
                  <TimeLine />
                </Modal.Body>
              </Modal>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

const Jumbotron = () => (
  <header className="jumbotron" id="headerHome">
    <div className="container">
      <div className="row">
        <div className="col-sm-offset-5 col-sm-7 col-xs-offset-2 col-xs-10">
          <br /><h1>Welcome friend!</h1>
          <h2>My name is Jhon</h2>
        </div>
      </div>
    </div>
  </header>
);

const MyPhotography = () => (
  <img
    src={cartPhotography}
    className="img-responsive img-circle"
    alt="my photography"
    width="100%"
  />
);

const TextMotivation = () => (
  <div>
    <br />
    <div>
      <p className="text-justify">
        <FontAwesome
          className="fa-pull-left"
          name="terminal"
          size="3x"
          border
        />
        Hi! In this website you can see my profile professional.
        My biggest passion now is to program because I can build
        things awesome. I like learning new technologies because
        these have interesting things. Lately, I am interested in
        the competitive programing, as it is a way to learn and
        have fun.
      </p>
    </div>
  </div>
);

const MyLanguagues = () => (
  <div>
    <h2 className="text-center">
      Languagues <FontAwesome name="language" />
    </h2>
    <div className="table-responsive">
      <table className="table table-hover table-bordered">
        <thead>
          <tr className="danger">
            <td>Language</td>
            <td>Level</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spanish</td>
            <td>Native</td>
          </tr>
          <tr>
            <td>English</td>
            <td>A2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const Hobbies = () => (
  <div>
    <h2 className="text-center">
      Hobbies <FontAwesome name="calendar-times-o" />
    </h2>

    <ul className="fa-ul">
      <li>
        <FontAwesome className="fa-li" name="music" /> Play Guitar
      </li>
      <li>
        <FontAwesome className="fa-li" name="bicycle" /> Ride Cycling
      </li>
    </ul>
  </div>
);

const AboutMe = () => (
  <div>
    <h2 className="text-center">
      About me <FontAwesome name="info-circle" />
    </h2>
    <div className="well">
      <FontAwesome name="address-card" /> Jhon Emmanuel Torres Toloza
    </div>

    <div className="well">
      <FontAwesome name="user-circle-o" /> I am {parseInt((new Date() - new Date(1993, 0, 28)) / 31557600000, 10)} years old
    </div>
    <div className="well">
      <FontAwesome name="university" /> I am currently studying System and Computing Engineering
    </div>
    <div className="well">
      <FontAwesome name="map-marker" /> Bogotá, Colombia
    </div>
    <div className="text-center">
      <a href={myCV} className="btn btn-primary" target="_blank">Download CV</a>
    </div>
  </div>
);

const Technologies = () => (
  <div>
    <h2 className="text-center">
      Technologies <FontAwesome name="desktop" />
    </h2>
    <h3>Good Level</h3>
    <div className="well">
      <ul className="list-inline">
        {tecGood.map(item => (<li key={item} className="btn btn-link" data-toggle="tooltip" data-placement="top" title={item.split('-')[1]}> <i className={item} /></li>))}
      </ul>
    </div>

    <h3>Intermediate Level</h3>
    <div className="well">
      <ul className="list-inline">
        {tecIntermediate.map(item => <li key={item} className="btn btn-link" data-toggle="tooltip" data-placement="top" title={item.split('-')[1]}><i className={item} /></li>)}
      </ul>
    </div>

    <h3>Learning</h3>
    <div className="well">
      <ul className="list-inline">
        {tecLearning.map(item => <li key={item} className="btn btn-link" data-toggle="tooltip" data-placement="top" title={item.split('-')[1]}><i className={item} /></li>)}
      </ul>
    </div>
  </div>
);

const Education = () => (
  <div>
    <h2 className="text-center">My education <FontAwesome name="book" /></h2>
    <h3>School <FontAwesome className="text-success" name="check" /></h3>
    <div className="row">
      <div className="col-xs-3">
        <img
          src={logoSchool}
          alt="logo school"
          className="img-responsive img-circle"
        />
      </div>
      <div className="col-xs-9">
        <ul>
          <li>Alberto Lleras Camargo</li>
          <li>Bogota, Colombia</li>
        </ul>
      </div>
    </div>

    <h3>Technical Institute <FontAwesome className="text-success" name="check" /></h3>
    <div className="row">
      <div className="col-xs-3">
        <img src={logoSENA} alt="logo school" className="img-rounded img-responsive" />
      </div>
      <div className="col-xs-9">
        <ul>
          <li>Servicio Nacional de Aprendizaje (SENA)</li>
          <li><strong>Degree:</strong> System Technique</li>
        </ul>
      </div>
    </div>

    <h3>University <FontAwesome className="fa-fw" name="spinner" pulse /></h3>
    <div className="row">
      <div className="col-xs-3">
        <img
          src={logoUnal}
          alt="logo school"
          className="img-rounded img-responsive"
        />
      </div>
      <div className="col-xs-9">
        <ul>
          <li>National University of Colombia</li>
          <li><strong>Undegree:</strong> System and Computing Engineering</li>
        </ul>
        <p className="lead text-warning">In progress <strong>70%</strong></p>
      </div>
    </div>
  </div>
);

const Experience = () => (
  <div>
    <h2 className="text-center">My experience <FontAwesome name="briefcase" /> </h2>

    <h3>Practice SENA <FontAwesome className="text-success" name="check" /></h3>
    <div className="row">
      <div className="col-xs-3">
        <img src={logoIndra} alt="logo school" className="img-rounded img-responsive" />
      </div>
      <div className="col-xs-9">
        <ul>
          <li>Indra Colombia LTDA</li>
          <li>System Technique</li>
          <li><strong>Duration:</strong> 3 months</li>
        </ul>
      </div>
    </div>

    <h3>My University <FontAwesome className="text-success" name="check" /></h3>
    <div className="row">
      <div className="col-xs-3">
        <img src={logoUnal} alt="logo school" className="img-rounded img-responsive" />
      </div>
      <div className="col-xs-9">
        <ul>
          <li>National University of Colombia</li>
          <li>Computer Monitor</li>
          <li><strong>Duration:</strong> 5 months</li>
        </ul>
      </div>
    </div>
  </div>
);

const TimeLine = () => (
  <ul className="timeline">
    <li>
      <div className="timeline-badge">
        <FontAwesome name="graduation-cap" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">December 2009</h4>
        </div>
        <div className="timeline-body">
          <p>I graduated from school Alberto Lleras Camargo</p>
        </div>
      </div>
    </li>

    <li className="timeline-inverted">
      <div className="timeline-badge warning">
        <FontAwesome name="book" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">March 2010</h4>
        </div>
        <div className="timeline-body">
          <p>I went to study at the SENA: &quot;System Technique&quot;</p>
        </div>
      </div>
    </li>

    <li>
      <div className="timeline-badge danger">
        <FontAwesome name="graduation-cap" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">April 2011</h4>
        </div>
        <div className="timeline-body">
          <p>I graduated from SENA like &quot;System Technique&quot;</p>
        </div>
      </div>
    </li>

    <li className="timeline-inverted">
      <div className="timeline-badge success">
        <FontAwesome name="briefcase" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">June 2011</h4>
        </div>
        <div className="timeline-body">
          <p>Practice SENA. <strong>Duration 3 months</strong></p>
        </div>
      </div>
    </li>

    <li>
      <div className="timeline-badge">
        <FontAwesome name="book" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">June 2012</h4>
        </div>
        <div className="timeline-body">
          <p>I went to study at the Institude &quot;Escala&quot;</p>
        </div>
      </div>
    </li>

    <li className="timeline-inverted">
      <div className="timeline-badge warning">
        <FontAwesome name="university" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">February 2013</h4>
        </div>
        <div className="timeline-body">
          <p>
            I went to study at the National University
            of Colombia at Bogotá: &quot;System and
            Computing Engineering&quot;.
          </p>
        </div>
      </div>
    </li>

    <li>
      <div className="timeline-badge danger">
        <FontAwesome name="briefcase" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">August 2016</h4>
        </div>
        <div className="timeline-body">
          <p>
            I worked as a computer monitor in the subject:
            &quot;Jose Celestino Mutis&quot;.
            <strong>Duration 5 months</strong>
          </p>
        </div>
      </div>
    </li>
  </ul>
);

export default Home;
