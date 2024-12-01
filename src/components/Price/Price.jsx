import React from 'react'
import "./Price.css"

const Price = () => {
  return (
    <div className='price-container'>
        <div className="price-content">
            <button>Our Price</button>
            <h1>OUR FLEXIBLE PRICE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa adipisci quas laboriosam quibusdam, suscipit vel! Nobis beatae molestias laudantium dolor? Dolore quis culpa suscipit laborum vel, quasi incidunt tempora.</p>
            <div className="price-card-list">
                <div className="price-card">
                    <p>Basic</p>
                    <h1>60</h1><span>/months</span>
                    <ul>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                    </ul>
                    <button>Join Plan</button>
                </div>
                <div className="price-card">
                    <p>Basic</p>
                    <h1>60</h1><span>/months</span>
                    <ul>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                    </ul>
                    <button>Join Plan</button>
                </div>
                <div className="price-card">
                    <p>Basic</p>
                    <h1>60</h1><span>/months</span>
                    <ul>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                    </ul>
                    <button>Join Plan</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price