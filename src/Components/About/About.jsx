import React from 'react'
import myBg from './about.module.css'

export default function About() {
  return (
    <>
      <div className={`d-flex justify-content-center flex-column align-items-center py-5 ${myBg.bgColor}`}>
        <h1 className='text-white m-3 fw-bold pt-5'>ABOUT COMPONENT</h1>
        <i className={`fa-solid fa-star text-white pb-4`}></i>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className='ps-5 pb-5 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6 pb-5 text-white">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
