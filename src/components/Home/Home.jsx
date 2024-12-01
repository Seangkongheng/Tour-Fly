import React from 'react'
import "./Home.css"
import twitter from "../../assets/twitter.png"

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-content">
            <h1>FAST AND RELIABLE MOVER</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque at inventore, non error libero sit quisquam quos suscipit rerum aliquid iusto saepe repudiandae. Non corrupti vel odit maxime iusto aliquam.</p>
            <button className='explore'> Explore the Sevice</button>
            <button>Contact Now</button>
        </div>
        <div className="home-menu-item">
              <div className="home-item">
                  <img src={twitter} alt="" />
              </div>
              <div className="home-item">
                  <img src={twitter} alt="" />
              </div>
              <div className="home-item">
                  <img src={twitter} alt="" />
              </div>
              <div className="home-item">
                  <img src={twitter} alt="" />
              </div>
              <div className="home-item">
                  <img src={twitter} alt="" />
              </div>
              <div className="home-item">
                  <img src={twitter} alt="" />
              </div>
        </div>
    </div>
  )
}

export default Home