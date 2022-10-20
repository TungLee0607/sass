import React from 'react'
import banner from '../../assets/images/Content.png'
import right from '../../assets/icons/right-green.svg'
import rightwhite from '../../assets/icons/right-white.svg'
import left from '../../assets/icons/left.svg'
import location from '../../assets/icons/location.svg'
import fire from '../../assets/icons/fire.svg'
import food1 from '../../assets/images/item1.png'
import food2 from '../../assets/images/item2.png'
import food3 from '../../assets/images/item3.png'
import food4 from '../../assets/images/item4.png'

const foodList = [
  {
    id: 1,
    name: 'Pizza',
    price: '$14.00',
    status: 'Starting',
    image: food1,
  },
  {
    id: 2,
    name: 'Drinks',
    price: '$2.00',
    status: 'Starting',
    image: food2,
  },
  {
    id: 3,
    name: 'F. Chicken',
    price: '$4.50',
    status: 'Starting',
    image: food3,
  },
  {
    id: 4,
    name: 'French F.',
    price: '$8.00',
    status: 'Starting',
    image: food4,
  },
]

const renderListFood = () => {
  return foodList.map((item, index) => {
    return <div key={index} className="food-near-me-item">
      <div className="food-near-me-item-content">
        <h5>{item.name}</h5>
        <p>{item.status}</p>
        <span>{item.price}</span>
      </div>
      <div className="food-near-me-item-image">
        <img src={item.image} alt="food" />
      </div>
    </div>
  })
}

export default function Banner() {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner__left">
          <h2>Hungry?</h2>
          <h1>Wait a minute for delicious</h1>
          <p>
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 20mins
          </p>
          <div className="banner__left-input">
            <input type="text" placeholder="Enter your delivery location" />
            <div className="btn">
              <div className="btn-text">Discover</div>
              <div className="btn-icon">
                <img src={right} alt="icon-right" />
              </div>
              <div className="input-icon">
                <img src={location} alt="icon" />
              </div>
            </div>
          </div>
          <h6>
            Already member of our communty? <span>Sign in</span>
          </h6>
        </div>
        <div className="banner__right">
          <img src={banner} alt="banner" />
        </div>
      </div>
      <div className="food-near-me">
        <div className="food-near-me-title">
          <h3>
            Food near me <img src={fire} alt="fire" />
          </h3>
          <div className="title-icon">
            <div className="icon-previous">
              <img src={left} alt="icon-left" />
            </div>
            <div className="icon-previous next">
              <img src={rightwhite} alt="icon-right" />
            </div>
          </div>
        </div>
        <div className="food-near-me-list">
            {renderListFood()}
        </div>
      </div>
    </div>
  )
}
