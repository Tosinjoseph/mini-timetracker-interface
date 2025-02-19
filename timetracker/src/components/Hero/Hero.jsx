import './Hero.css'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-wrapper'>
     <div className="container">
        <div className='one first'>
            <div className="top"></div>
        </div>
        <div className='one second'>
            <img src="./icon-work.svg" alt="" />
            <div className="one-over"></div>
        </div>
        <div className='one third'>
            <img src="./icon-study.svg" alt="" />
            <div className="one-over"></div>
        </div>
        <div className='one fourth'>
            <img src="./icon-social.svg" alt="" />
            <div className="one-over"></div>
        </div>
        <div className='one fifth'>
            <img src="./icon-self-care.svg" alt="" />
            <div className="one-over"></div>
        </div>
        <div className='one sixth'>
            <img src="./icon-play.svg" alt="" />
            <div className="one-over"></div>
        </div>
        <div className='one seventh'>
            <img src="./icon-exercise.svg" alt="" />
            <div className="one-over"></div>
        </div>
     </div>
    </div>
  )
}

export default Hero