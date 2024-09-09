import React from 'react'
import sora from '../../assets/images/avataaars.png'
import myBg from './home.module.css'

export default function Home() {
    return (
        <>
            <div className={`d-flex justify-content-center flex-column align-items-center py-5 ${myBg.bgColor}`}>
                <img src={sora} className={`pt-5  ${myBg.myImg}`} />
                <h1 className='text-white m-3 fw-bold'>START FRAMEWORK</h1>
                <i className='fa-solid fa-star text-white'></i>
                <p className='text-white m-3 pb-5'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </>
    )
}
