import React from 'react'
import blog1 from '../../assets/images/new1.png';
import blog2 from '../../assets/images/new2.png';
import blog3 from '../../assets/images/new3.png';
import right from '../../assets/icons/right-green.svg';

const listBlog = [
  {
    image: blog1,
    name: 'Riders',
    desc: 'We store the vast majority of the digital assets in secure ..',
  },
  {
    image: blog2,
    name: 'Restaurants',
    desc: 'We store the vast majority of the digital assets in secure ..',
  },
  {
    image: blog3,
    name: 'Community',
    desc: 'We store the vast majority of the digital assets in secure ..',
  }
]

const renderListBlog = () => {
  return listBlog.map((blog, index) => {
    return <div className='blog__item' key={index}>
      <div className='blog__item-image'>
        <img src={blog.image} alt="blog" />
      </div>
      <div className='blog__item-content'>
        <h5>{blog.name}</h5>
        <p>{blog.desc}</p>
        <div className='blog__item-content-btn'>
        <div className='btn'>
                    <div className="btn-text">Discover</div>
                    <div className="btn-icon">
                        <img src={right} alt="icon-right" />
                    </div>
                </div> 
        </div>
      </div>
    </div>
  })
}

export default function Blog() {
  return (
    <div className='container'>
      <div className='blog'>
        <div className='blog__title'>
          <h2>Newar Me</h2>
          <h1>Our regular updated <br /> new blogs</h1>
          <p>Best cooks and best delivery guys all at your service. Hot <br /> tasty food will reach you in 20mins.</p>
        </div>
        <div className='blog__list'>
          {renderListBlog()}
        </div>
      </div>
    </div>
  )
}
