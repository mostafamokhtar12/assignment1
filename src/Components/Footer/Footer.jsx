import React from 'react'
import mystyle from './footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={`${mystyle.bgColor}`}>

        <div className="container py-5">
          <div className='row'>

            <div className='col-md-4 text-center text-white py-4'>
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className='col-md-4 text-center text-white py-4'>
              <h2>AROUND THE WEB</h2>
              <div className='d-flex justify-content-center align-items-center'>
                <i className={`fa-brands fa-facebook d-flex justif ${mystyle.icons} d-flex justify-content-center align-items-center`}></i>
                <i className={`fa-brands fa-twitter ${mystyle.icons} d-flex justify-content-center align-items-center`}></i>
                <i className={`fa-brands fa-linkedin-in ${mystyle.icons} d-flex justify-content-center align-items-center`}></i>
                <i className={`fa-solid fa-globe ${mystyle.icons} d-flex justify-content-center align-items-center`}></i>
              </div>
            </div>

            <div className='col-md-4 text-center text-white py-4'>
              <h2>ABOUT FREELANCER</h2>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>

          </div>

        </div>
        <div className='bg-dark text-center text-white py-3'>Copyright © Your Website 2021</div>
      </div>


    </>
  )
}
