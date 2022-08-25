import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}<br></br> 
              <a href="https://eprints.umm.ac.id/76117/" target="_blank" rel="noopener noreferrer">{education.description2}</a>
            </p>
          </div>
        );
      });
      var patens = this.props.data.patens.map(function (patens) {
        return (
          <div key={patens.school}>
            <h3>{patens.school}</h3>
            <p className="info">
              {patens.degree} <span>&bull;</span>
              <em className="date">{patens.released}</em>
            </p>
            <p>
              <a href="https://eprints.umm.ac.id/36730/" target="_blank" rel="noopener noreferrer">{patens.description}</a>
            </p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <div>
              <p className="info">
                {work.title}
                <span>|</span> <em className="date">{work.years}</em>
              </p>
            </div>
            <p className="info">{work.project}
              <span>|</span> <em className="date">{work.years1}</em>
              <br></br>
              &bull; {work.description}  <br></br> 
              &bull; {work.description2} <br></br>
              &bull; {work.description3} <br></br>
              &bull; {work.description4} <br></br>
              &bull; {work.description5} <br></br>
              &bull; <u>Leveraged knowledge</u> in {work.description6}
            </p>
            <p className="info">{work.project2}
              <span>|</span> <em className="date">{work.years2}</em>
              <br></br>
              &bull; {work.description7}  <br></br> 
              &bull; {work.description8} <br></br>
              &bull; {work.description9} <br></br>
              &bull; {work.description10} <br></br>
              &bull; {work.description11} <br></br>
              &bull; <u>Leveraged knowledge</u> in {work.description12}
            </p>
          </div>
        );
      });
      
    }

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <table style={{ width: "100%", borderWidth: "thick" }}>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left", minWidth: "120px" }}>
                    <b>Languages</b>
                  </th>
                  <td colSpan="3">
                    Python, Javascript, PHP, C++, HTML, C, Java, SQL,
                    MongoDB, CSS, Go, R
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left", minWidth: "120px" }}>
                    <b>Frameworks</b>
                  </th>
                  <td colSpan="3">
                    VueJS, NodeJS, Jest, CodeIgniter, TensorFlow, Keras, PyTorch, Scikit-learn, Matplotlib, Pandas, Scipy, OpenCV, PySide6, Numpy, Mito, Pandas Profiling, Seaborn, Bokeh, Plotly 
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left", minWidth: "120px" }}>
                    <b>Utilities</b>
                  </th>
                  <td colSpan="3">
                    Git, AWS, Docker, Heroku, GCP, Arduino, STM32, KeilUvision, EagleEDA, MLFlow, Netlify, Google Colaboratory, Apache Superset, Google Data Studio, PowerBi, Tableau
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left", minWidth: "120px" }}>
                    <b>Coursework</b>
                  </th>
                  <td colSpan="3">
                  Electronics, Electonic Circuit Design, Microcontroller, Digital Circuit Design, Control System, Analog Circuit Design, Statistics and Probability, Digital Signal Processing, Database, 
                  Computer Vision, Embedded System, Artificial Intelligence, Data Mining, Robotics
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>AWARDS</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <table style={{ width: "100%", borderWidth: "thick" }}>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left", minWidth: "120px" }}>
                    <b>2022</b>
                  </th>
                  <td colSpan="3">
                    <a href="https://drive.google.com/file/d/10Q4C10FmBqBmMQD5QQjxVRJHHhK4Kmte/view?usp=sharing" target="_blank" rel="noopener noreferrer">Cloud Digital Leader Course Certifications</a>
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left", minWidth: "120px" }}>
                    <b>2021</b>
                  </th>
                  <td colSpan="3">
                    <a href="https://drive.google.com/file/d/1yBnJ-TC0BypgC3UI-GpXJNaFFr_N1ZMl/view" target="_blank" rel="noopener noreferrer">Data Engineer Course Certifications</a>
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left", minWidth: "120px" }}>
                    <b>2019</b>
                  </th>
                  <td colSpan="3">
                    <a href="https://drive.google.com/file/d/1Eg2OdKjrrQ0dz7WpGYjBUMpek_fuUJ7U/view" target="_blank" rel="noopener noreferrer">1st Winner Kontes Robot Pemadam Api Indonesia</a>
                  </td>
                </tr>
                <tr>
                  <th style={{ textAlign: "left", minWidth: "120px" }}>
                    <b>2016</b>
                  </th>
                  <td colSpan="3">
                    <a href="https://drive.google.com/file/d/10BYgj4fW-jDt5N6-FZg_R8BMzpkaIpIg/view" target="_blank" rel="noopener noreferrer">3rd Winner Embedded System Dan Piranti Cerdas</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Patens</span>
            </h1>
          </div>

          <div className="nine columns main-col">{patens}</div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
