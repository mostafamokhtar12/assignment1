import React from 'react'
import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'
import style from './port.module.css'

export default function Portfolio() {
  return (
    <>
      <h1 className={`text-center fw-bold py-3`}>PORTFOLIO COMPONENT</h1>
      <div className='text-center'>
        <i className={`fa-solid fa-star pb-3`}></i>
      </div>

      <div className="container">
        <div className="row g-5 pb-5">


          <div className="col-md-4">

            <div className="item position-relative">
              <img src={img1} className='w-100 rounded' alt="" />
              <div className={`${style.layer} w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 left-0 rounded ${style.bgColor}`}>
                <div className="iconPlus">
                  <i class="fa-solid fa-plus text-white fs-1"></i>
                </div>
              </div>
            </div>


          </div>



          <div className="col-md-4">
            <div className="item position-relative">
              <img src={img2} className='w-100 rounded' alt="" />
              <div className={`${style.layer} w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 left-0 rounded ${style.bgColor}`}>
                <div className="iconPlus">
                  <i class="fa-solid fa-plus text-white fs-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item position-relative">
              <img src={img3} className='w-100 rounded' alt="" />
              <div className={`${style.layer} w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 left-0 rounded ${style.bgColor}`}>
                <div className="iconPlus">
                  <i class="fa-solid fa-plus text-white fs-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item position-relative">
              <img src={img1} className='w-100 rounded' alt="" />
              <div className={`${style.layer} w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 left-0 rounded ${style.bgColor}`}>
                <div className="iconPlus">
                  <i class="fa-solid fa-plus text-white fs-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item position-relative">
              <img src={img2} className='w-100 rounded' alt="" />
              <div className={`${style.layer} w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 left-0 rounded ${style.bgColor}`}>
                <div className="iconPlus">
                  <i class="fa-solid fa-plus text-white fs-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item position-relative">
              <img src={img3} className='w-100 rounded' alt="" />
              <div className={`${style.layer} w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 left-0 rounded ${style.bgColor}`}>
                <div className="iconPlus">
                  <i class="fa-solid fa-plus text-white fs-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
