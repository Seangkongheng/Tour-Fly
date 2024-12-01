import React from 'react'
import "./Choosing.css"
import icon from "../../assets/twitter.png"
import Delivery from "../../assets/delivery.png"

const Choosing = () => {
  return (
    <div className='choosing-container'>
        <div className="choosing-content">
            <button>Why choose Us</button>
            <h1>WHY CHOOSE FOR USE</h1>
            <p className='specail-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nulla obcaecati ipsa voluptatum officia omnis veritatis illum rem aperiam reiciendis quas a error amet animi consectetur, esse minus impedit magnam.</p>
            <div className="choosing-list-item">
                <div className="chosing-item">
                    <div className="choosing-item-content">
                        <div className="choosing-item-icon">
                            <img src={icon} alt="" />
                        </div>
                        <div className="choosing-item-des">
                          <h4>FAST TRANSPORTATION SERVICE</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div><br /><br />
                     <div className="choosing-item-content">
                        <div className="choosing-item-icon">
                            <img src={icon} alt="" />
                        </div>
                        <div className="choosing-item-des">
                          <h4>FAST TRANSPORTATION SERVICE</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="chosing-item img-delivery">
                    <img src={Delivery} alt="" />
                </div>

                <div className="chosing-item">
                    <div className="choosing-item-content">
                        <div className="choosing-item-icon">
                            <img src={icon} alt="" />
                        </div>
                        <div className="choosing-item-des">
                          <h4>FAST TRANSPORTATION SERVICE</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div><br /><br />
                    <div className="choosing-item-content">
                        <div className="choosing-item-icon">
                            <img src={icon} alt="" />
                        </div>
                        <div className="choosing-item-des">
                          <h4>FAST TRANSPORTATION SERVICE</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choosing