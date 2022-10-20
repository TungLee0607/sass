import React from 'react'
import screen from '../../assets/images/Screen.png'
import appstore from '../../assets/icons/app-store.svg'
import chplay from '../../assets/icons/ch-play.svg'
import right from '../../assets/icons/right-green.svg'

const listCountry = [
  'United States', 'Canada', 'Switzerland', 'Ecuador', 'Spain', 'Australia', 'Chile', 'Ireland', 'Brazil', 'Poland', 'New Zealand', 'Sri Lanka', 'Mexico', 'United Kingdom', 'Tiwan (ROC)', 'Dominican Republic', 'Japan', 'Italy', 'South Africa', 'Sweden'
]

const renderContries = () => {
  return listCountry.map((country,index) => {
    return <div key={index} className='country-item'>
      {country}
    </div>
  })
}

export default function Apps() {
  return (
    <div className="container">
      {/* APP */}
      <div className="app">
        <div className="app_image">
          <img src={screen} alt="screen" />
        </div>
        <div className="app_content">
          <h3>Have you got our App?</h3>
          <p>
            Best cooks and best delivery guys all at your <br /> service. Hot
            tasty food
          </p>
          <div className="app_content-btn">
            <button>
              <img src={appstore} alt="app" />
              <p>App Store</p>
            </button>
            <button>
              <img src={chplay} alt="app" />
              <p>CH Play</p>
            </button>
          </div>
        </div>
      </div>
      {/* SUB */}
      <div className="sub">
        <div className="sub-container">
          <div className="sub-content">
            <h3>Subscribe newsletter</h3>
            <p>
              Best cooks and best delivery guys all at your <br /> service. Hot
              tasty food
            </p>
          </div>
          <div className="banner__left-input">
            <input type="text" placeholder="Enter your delivery location" />
            <div className="btn">
              <div className="btn-text">Discover</div>
              <div className="btn-icon">
                <img src={right} alt="icon-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COUNTRY */}
      <div className='country'>
        <h3>Popular countries with us</h3>
        <div className='country-list'>
          {renderContries()}
        </div>
      </div>
    </div>
  )
}
