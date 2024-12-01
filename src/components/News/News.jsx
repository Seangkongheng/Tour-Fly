import React from 'react'
import "./News.css"
import News1 from "../../assets/news1.jpg"

const News = () => {
  return (
    <div className='news-container'>
        <div className="news-content">
            <button>Lastest news</button>
            <h1>LASTEST NEWS & ATTICLES</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, aliquam! Voluptatibus, cumque fugiat? Adipisci voluptatem libero error reprehenderit laudantium, excepturi quae nisi doloribus ea tempora ipsa obcaecati optio alias hic!</p>
            <div className="news-card-list">
                <div className="news-card">
                    <div className="new-card-image">
                      <img src={News1} alt="" />
                    </div>
                    <div className="news-card-des">
                      <h5>Express Delivery is going to slow down in 2024</h5>
                      <p>10-16-2024 | 12: 50min</p>
                      <button className='btn-readmore'>Read more</button>
                    </div>
                </div>
                <div className="news-card">
                    <div className="new-card-image">
                      <img src={News1} alt="" />
                    </div>
                    <div className="news-card-des">
                      <h5>Express Delivery is going to slow down in 2024</h5>
                      <p>10-16-2024 | 12: 50min</p>
                      <button className='btn-readmore'>Read more</button>
                    </div>
                </div>
                <div className="news-card">
                    <div className="new-card-image">
                      <img src={News1} alt="" />
                    </div>
                    <div className="news-card-des">
                      <h5>Express Delivery is going to slow down in 2024</h5>
                      <p>10-16-2024 | 12: 50min</p>
                      <button className='btn-readmore'>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News