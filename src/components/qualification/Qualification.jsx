import React from "react";
import "./qualification.css";

const Qualification = () => {
  const toggleState = 1;

  return (
    <section className="qualification sections">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__conatiner container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor's in Computer Science
                </h3>
                <span className="qualification__subtitle">
                  Vellore Institute of Technology (VIT)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  PHP Developer Internship
                </h3>
                <span className="qualification__subtitle">
                  MAWAI INFOTECH LTD.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> June – July 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Secondary High School
                </h3>
                <span className="qualification__subtitle">
                  Percentage: 90%
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  JPMorgan Chase &amp; Co. Virtual Internship
                </h3>
                <span className="qualification__subtitle">Forage</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> June 2023
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
