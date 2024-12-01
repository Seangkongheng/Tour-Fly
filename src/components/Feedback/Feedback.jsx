import React from 'react'
import "./Feedback.css"
import Feadback1 from "../../assets/feadback1.jpg"
const Feedback = () => {
  return (
    <div className='feadback-container'>
        <div className="feadback-content">
            <button>Our Feadback</button>
            <h1>OUR CLIENT'S FEEDBACK</h1>
            <p className='speail-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab debitis eos a, dolorem, exercitationem, beatae voluptate cupiditate ipsam sequi at repudiandae dicta. Dolorum enim quis maxime recusandae non, odio id.</p>
            <div className="feadback-card-list">
              <div className="feadback-card">
                  <div className="feadback-number">
                      <p>99</p>
                  </div>
                  <div className="feadback-des">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis, eius praesentium cupiditate ab officiis accusamus, repudiandae tempore alias delectus aspernatur labore esse optio! Nihil magni quibusdam possimus nisi vel.</p>
                  </div>
                  <div className="feadback-profile">
                      <div className="profile">
                        <img src={Feadback1} alt="" />
                      </div>
                      <div className="name">
                          <h5>seang kong heng</h5>
                          <small>Web developer</small>
                      </div>
                  </div>
              </div>
              <div className="feadback-card">
                  <div className="feadback-number">
                      <p>99</p>
                  </div>
                  <div className="feadback-des">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis, eius praesentium cupiditate ab officiis accusamus, repudiandae tempore alias delectus aspernatur labore esse optio! Nihil magni quibusdam possimus nisi vel.</p>
                  </div>
                  <div className="feadback-profile">
                      <div className="profile">
                        <img src={Feadback1} alt="" />
                      </div>
                      <div className="name">
                          <h5>seang kong heng</h5>
                          <small>Web developer</small>
                      </div>
                  </div>
              </div>
              <div className="feadback-card">
                  <div className="feadback-number">
                      <p>99</p>
                  </div>
                  <div className="feadback-des">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis, eius praesentium cupiditate ab officiis accusamus, repudiandae tempore alias delectus aspernatur labore esse optio! Nihil magni quibusdam possimus nisi vel.</p>
                  </div>
                  <div className="feadback-profile">
                      <div className="profile">
                        <img src={Feadback1} alt="" />
                      </div>
                      <div className="name">
                          <h5>seang kong heng</h5>
                          <small>Web developer</small>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback