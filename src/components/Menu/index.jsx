import React from 'react';
import item5 from '../../assets/images/item5.png';
import item6 from '../../assets/images/item6.png';
import item7 from '../../assets/images/item7.png';
import item8 from '../../assets/images/item8.png';
import item9 from '../../assets/images/item9.png';
import item10 from '../../assets/images/item5.png';
import star from '../../assets/icons/star.svg';
import heart from '../../assets/icons/heart.svg';
import share from '../../assets/icons/share.svg';
import right from '../../assets/icons/right-green.svg';

const listFood = [
    {
        image: item5,
        name: 'New York-Style pizza',
        desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
        price: '$7.10',
        review: 4,
    },
    {
        image: item6,
        name: 'Bento Ekiben Makunchi ..',
        desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
        price: '$7.10',
        review: 4,
    },
    {
        image: item7,
        name: 'Humburger Veggei ..',
        desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
        price: '$7.10',
        review: 4,
    },
    {
        image: item8,
        name: 'Indian Cusine Briyani Buffet',
        desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
        price: '$7.10',
        review: 4,
    },
    {
        image: item9,
        name: 'Chiken Tikka Buffalo Wing ..',
        desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
        price: '$7.10',
        review: 4,
    },
    {
        image: item10,
        name: 'Fsish Fry Shashik Freid Fish ..',
        desc: 'Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.',
        price: '$7.10',
        review: 4,
    }
]

const renderListFood = () => {
    return listFood.map((food, index) => {
        return <div className='menu__item' key={index}>
                    <div className='menu__item-image'>
                        <img src={food.image} alt='food' />
                    </div>
                    <div className='menu__item-content'>
                        <div className='menu__item-review'>
                            <img src={star} alt="star icon" />
                            <img src={star} alt="star icon" />
                            <img src={star} alt="star icon" />
                            <img src={star} alt="star icon" />
                        </div>
                        <h5>{food.name}</h5>
                        <p>{food.desc}</p>
                        <div className='menu__item-footer'>
                            <h5>{food.price}</h5>
                            <div className='menu__item-btn'>
                                <div className='menu__item-like'>
                                    <img src={heart} alt="heart icon" />
                                </div>
                                <div className='menu__item-share'>
                                    <img src={share} alt="share icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    })
}

export default function Menu () {
  return (
    <div className='container'>
        <div className='menu'>
            <div className='menu__title'>
                <h2>Popular Menu</h2>
                <h1>Wait a minute for delicious.</h1>
            </div>
            <div className='menu__list'>
                {renderListFood()}
            </div>
            <div className='menu__btn'>
                <div className='btn'>
                    <div className="btn-text">Discover</div>
                    <div className="btn-icon">
                        <img src={right} alt="icon-right" />
                    </div>
                </div> 
            </div>
            
        </div>
    </div>
  )
}
