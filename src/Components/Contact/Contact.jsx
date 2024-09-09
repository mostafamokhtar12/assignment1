import React from 'react'
import style from './contact.module.css'

export default function Contact() {
  return (
    <>
      <h1 className={`text-center fw-bold py-3`}>CONATCT SECTION</h1>
      <div className='text-center'>
        <i className={`fa-solid fa-star pb-3`}></i>
      </div>

      <form className='py-5 w-50 mx-auto'>
        <input type="text" className={` ${style.formy} form-control   my-5`} placeholder='userName' />
        <input type="text" className={` ${style.formy} form-control   my-5`} placeholder='userAge' />
        
        <input type="text" className={` ${style.formy} form-control   my-5`} placeholder='userEmail' />
        <input type="text" className={` ${style.formy} form-control   my-5`} placeholder='userPassword' />


        <button className={`${style.bgColor} text-white  btn  my-5`}>send Message</button>
      </form>



    </>
  )
}
