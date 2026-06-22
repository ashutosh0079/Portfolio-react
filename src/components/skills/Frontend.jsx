import React from 'react'

const Frontend = () => {
  return (
    <div className='skills__content'>
      <h3 className="skills__title">📊 Data Analytics</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Excel</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Power BI</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>

        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">ETL Pipelining</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Data Reconsillation</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Frontend
