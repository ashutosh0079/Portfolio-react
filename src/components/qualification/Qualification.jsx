import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Education & Experience</h2>
      <span className="section__subtitle">
        My Academic & Professional Journey
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Timeline
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">

            {/* Senior Secondary */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Senior Secondary School
                </h3>
                <span className="qualification__subtitle">
                  Percentage: 90%
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 April – 2020 May
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* B.Tech */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Bachelor of Technology in Computer Science
                </h3>
                <span className="qualification__subtitle">
                  Vellore Institute of Technology (VIT)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 Aug – 2024 July
                </div>
              </div>
            </div>

            {/* AI Internship */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Artificial Intelligence Intern
                </h3>
                <span className="qualification__subtitle">
                  Cepta Infotech
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 Aug - 2025 Jan
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Paytm */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Data Analyst
                </h3>
                <span className="qualification__subtitle">
                  Paytm
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2025 Jan – 2026 Mar
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
