import React from 'react'
import "./Transport.css"
import Icon from "../../assets/twitter.png"

const Transport = () => {
  return (
    <div className='transport-container'>
        <div className="transport-content">
            <div className="transport-des">
                <button>About Us</button>
                <h1>BEST WORD'S LEADING LOGISTIC & TRANTSPORT COMPANY</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vitae magni suscipit quos maiores ipsa sed perferendis ut autem aspernatur, aut neque, quas recusandae iure nihil incidunt natus repellat. Officia?</p>
                <div className="transport-time">
                    <div className="transport-time-working">
                        <div className="transport-time-working-icon">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="transport-time-working-des">
                            <h3>Unlimitited prevent & find solution</h3>
                        </div>
                    </div>
                    <div className="transport-time-working">
                        <div className="transport-time-working-icon">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="transport-time-working-des">
                            <h3>Unlimitited prevent & find solution</h3>
                        </div>
                    </div>
                </div>
                <div className="button-video">
                    <div className="button">
                        <button>View More..</button>
                    </div>
                    <div className="btn-video">
                        <div className="icon-vdo">
                            <img src={Icon} alt="" />
                        </div>
                        <div className="descrpiont-btn-video">
                            <p>Watch Video ..</p>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="transport-image">

            </div>
        </div>

        <div className="transport-count-project">
            <div className="transport-count-list-card">
                <div className="transport-count-card">
                    <h1>200 +</h1>
                    <h3>PROJECT COMPLETED</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="transport-count-card">
                    <h1>300 +</h1>
                    <h3>BEST EMPLOYEE</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="transport-count-card">
                    <h1>400 +</h1>  
                    <h3>WORDWIDE CLIENT</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="transport-count-card">
                    <h1>200 +</h1>
                    <h3>WORD AWARD</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Transport