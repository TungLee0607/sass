import React from 'react'
import logo from '../../assets/images/Logo.svg';
import cart from '../../assets/icons/cart.svg';

export default function Header() {
  return (
    <div className='container'>
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='header__nav'>
                <div className='header__nav-link'>
                    <a href='#'>Home</a>
                </div>
                <div className='header__nav-link'>
                    <a href='#'>Review</a>
                </div>
                <div className='header__nav-link'>
                    <a href='#'>About Us</a>
                </div>
                <div className='header__nav-link'>
                    <a href='#'>Contact Us</a>
                </div>
            </div>
            <div className='header__cart'>
                <button>Sign Up</button>
                <div className='header__cart-icon'>
                    <img src={cart} alt='icon-cart' />
                </div>
            </div>
        </div>
    </div>
  )
}
