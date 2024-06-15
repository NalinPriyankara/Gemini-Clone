import React from 'react';
import './main.css';

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, Dev</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Trending computer science fields</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Best travel destinations</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Fastest car in the world</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Most popular offline video game</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a promt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
      </div>
    </div>
  )
}
import './main.css';
import { assets } from '../../assets/assets';

export default Main