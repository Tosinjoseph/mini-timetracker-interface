import './Hero.css'
import React from 'react'
import data from '../../data.json'

const Hero = ({data, setDataChange,heroData}) => {
  return (
    <div className='h-wrapper'>

            <div className="container">
            <div className='one first'>
                <div className="top">
                    <img src="./image-jeremy.png" alt="" />
                    <p>Report for</p>
                    <span>Jeremy</span>
                    <span>Robson</span>
                    <div className='navi'>
                <span onClick={()=>setDataChange(0)}>Daily</span>
                <span onClick={()=>setDataChange(1)}>Weekly</span>
                <span onClick={()=>setDataChange(2)}>Monthly</span>
                </div>
                </div>
                
            </div>
            <div className='one second'>
                <img src="./icon-work.svg" alt="" />
                <div className="one-over">
                    <h3>{heroData.title}</h3>
                    <h1>{heroData.timeframes.daily.current}hrs</h1>
                    <p>{heroData.timeframes.daily.previous}</p>
                </div>
            </div>
            <div className='one third'>
                <img src="./icon-study.svg" alt="" />
                <div className="one-over">
                <h3>{heroData.title}</h3>
                    <h1>{heroData.timeframes.daily.current}hrs</h1>
                    <p>{heroData.timeframes.daily.previous}</p>
                </div>
            </div>
            <div className='one fourth'>
                <img src="./icon-social.svg" alt="" />
                <div className="one-over">
                <h3>{heroData.title}</h3>
                    <h1>{heroData.timeframes.daily.current}hrs</h1>
                    <p>{heroData.timeframes.daily.previous}</p>
                </div>
            </div>
            <div className='one fifth'>
                <img src="./icon-self-care.svg" alt="" />
                <div className="one-over">
                <h3>{heroData.title}</h3>
                    <h1>{heroData.timeframes.daily.current}hrs</h1>
                    <p>{heroData.timeframes.daily.previous}</p>
                </div>
            </div>
            <div className='one sixth'>
                <img src="./icon-play.svg" alt="" />
                <div className="one-over">
                <h3>{heroData.title}</h3>
                    <h1>{heroData.timeframes.daily.current}hrs</h1>
                    <p>{heroData.timeframes.daily.previous}</p>
                </div>
            </div>
            <div className='one seventh'>
                <img src="./icon-exercise.svg" alt="" />
                <div className="one-over">
                <h3>{heroData.title}</h3>
                    <h1>{heroData.timeframes.daily.current}hrs</h1>
                    <p>{heroData.timeframes.daily.previous}</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Hero