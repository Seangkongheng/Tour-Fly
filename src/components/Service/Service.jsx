import React from 'react'
import "./Service.css"
import Icon from "../../assets/twitter.png"

const Service = () => {
  return (
    <div className='service-container'>
        <div className="service-content">
            <button>Our Sevice</button>
            <div className="service-content-title">
                <div className="service-title">
                    <h1>WHAT WE DO FOR YOU?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempora soluta sunt quidem iure delectus numquam nesciunt quam perferendis! Eaque, tempore cupiditate ullam atque aspernatur sapiente doloremque. Ipsam, laudantium libero?</p>

                </div>
                <div className="service-button-join">
                    <button>Our Sevice</button>
                </div>
            </div>
            <div className="service-list-card">
                <div className="service-card">
                    <div className="card-image">
                        <img src={Icon} alt="" />
                    </div>
                    <h3>SEANG TRANSPORTATION</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, excepturi distinctio? Velit iure consequuntur quia. Sequi voluptatum culpa iusto, nemo animi dolorem, accusantium aliquid repellendus porro ex minus! Quaerat, nihil.</p>
                    <div className="service-read-more">
                        <button>Read more</button>
                    </div>
                </div>
                <div className="service-card">
                    <div className="card-image">
                        <img src={Icon} alt="" />
                    </div>
                    <h3>SEANG TRANSPORTATION</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, excepturi distinctio? Velit iure consequuntur quia. Sequi voluptatum culpa iusto, nemo animi dolorem, accusantium aliquid repellendus porro ex minus! Quaerat, nihil.</p>
                    <div className="service-read-more">
                        <button>Read more</button>
                    </div>
                </div>
                <div className="service-card">
                    <div className="card-image">
                        <img src={Icon} alt="" />
                    </div>
                    <h3>SEANG TRANSPORTATION</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, excepturi distinctio? Velit iure consequuntur quia. Sequi voluptatum culpa iusto, nemo animi dolorem, accusantium aliquid repellendus porro ex minus! Quaerat, nihil.</p>
                    <div className="service-read-more">
                        <button>Read more</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Service