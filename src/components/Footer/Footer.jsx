import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-content">
            <div className="footer-content-brand">
                <div className="footer-branch">
                    <h1>TransPro</h1>
                </div>
                <div className="footer-subcribe">
                    <div className="footer-sub-content">
                        <div className="footer-sub-title">
                            <h2>SUBCRIBE OUR LASTES NEWS & ATTICLE</h2>
                        </div>
                        <div className="footer-sub-input">
                            <input placeholder='Enter email ...' type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-list-item">
                <div className="footer-item about-company">
                   <h3>About Company</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatum maiores. Voluptas tempore totam laborum laboriosam. Culpa recusandae, vitae earum suscipit laudantium ab soluta vero cupiditate, quis commodi expedita deserunt.</p>
                </div>
                <div className="footer-item">
                  <h3>Use full link</h3>
                    <ul>
                      <li>testing</li>
                      <li>testing</li>
                      <li>testing</li>
                      <li>testing</li>
                    </ul>
                </div>
                <div className="footer-item">
                  <h3>Our Service</h3>
                    <ul>
                      <li>testing</li>
                      <li>testing</li>
                      <li>testing</li>
                      <li>testing</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h3>Contact Now</h3>
                    <ul>
                      <li>testing</li>
                      <li>testing</li>
                      <li>testing</li>
                      <li>testing</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer