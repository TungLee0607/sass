import React from 'react'
import logo from '../../assets/images/Logo.svg';
import fb from '../../assets/icons/facebook.svg';
import inicon from '../../assets/icons/in.svg';
import twitter from '../../assets/icons/twitter.svg';

const listCompany = ['About', 'Terms of Use', 'Privacy Policy', 'Privacy Policy', 'How it Works', 'ConTact Us'];
const listHelp = ['Support Carrer', '24h Service', 'Quick Chat'];
const listSupport = ['FAQ', 'Policy', 'Business'];
const listContact = ['WhatsApp','Support 24'];

const renderCompany = () => {
  return listCompany.map((item, index) => {
    return <p key={index}>{item}</p>
  })
}

const renderHelp = () => {
  return listHelp.map((item, index) => {
    return <p key={index}>{item}</p>
  })
}
const renderSupport = () => {
  return listSupport.map((item, index) => {
    return <p key={index}>{item}</p>
  })
}
const renderContact = () => {
  return listContact.map((item, index) => {
    return <p key={index}>{item}</p>
  })
}

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__left'>
        <div className='footer__left-logo'>
          <img src={logo} alt="logo" />
        </div>
        <p>Retail food delivery is a courier <br /> service in which a restaurant, store, <br /> or independent food-delivery</p>
        <div className='footer__left-icon'>
          <div className='footer__icon'>
            <img src={fb} alt='facebook' />
          </div>
          <div className='footer__icon'>
            <img src={inicon} alt='in' />
          </div>
          <div className='footer__icon'>
            <img src={twitter} alt='twitter' />
          </div>
        </div>
      </div>
      <div className='footer__right'>
        <div className='footer__right-item'>
          <h5>Company</h5>
          {renderCompany()}
        </div>
        <div className='footer__right-item'>
          <h5>Get Help</h5>
          {renderHelp()}
        </div>
        <div className='footer__right-item'>
          <h5>Support</h5>
          {renderSupport()}
        </div>
        <div className='footer__right-item'>
          <h5>Contact</h5>
          {renderContact()}
        </div>
      </div>
      </div>
      
    </div>
  )
}
