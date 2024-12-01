import React from 'react'
import "./Help.css"
import Delivery from "../../assets/delivery.png"
import icon from "../../assets/twitter.png"
const Help = () => {
  return (
    <div className='help-container'>
      <div className="help-content">
          <div className="help-content-desc">
              <button>Let talk</button>
              <br /><br />
              <h1>YOU NEED ANY HELP?</h1>
              <h1>GET FREE CONSULTATION</h1>
              <div className="help-contact">
                  <div className="help-contact-icon">
                    <img src={icon} alt="" />
                  </div>
                  <div className="help-contact-number">
                      <p>0969907215</p>
                  </div>
              </div>
              <button>Contact Us</button>
          </div>

          <div className="help-content-image">
              <img src={Delivery} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Help