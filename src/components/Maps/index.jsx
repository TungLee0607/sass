import React from 'react'
import mapImage from '../../assets/images/map2.png';
import services from '../../assets/images/Service.png';
import location from '../../assets/icons/location-orange.svg';

export default function Maps() {
  return (
    <div className='container'>
        <div className='map'>
            <div className='map__title'>
                <h2>Newar Me</h2>
                <h1>Find us near your <br /> citys</h1>
            </div>
            <div className='map__content'>
                <div className='map__content__left'>
                    <div className='map__content__left-title'>
                        <div>
                            <h3>Pickup restaurent point</h3>
                            <h6>Enter your delivery location</h6>
                        </div>
                        <div>
                            <img src={services} alt="service" />
                        </div>
                    </div>
                    <div className='map__content__left-location'>
                        <p>DEPATURE</p>
                        <h4>Pickup restaurent point</h4>
                        <div className='map__content__left-location-input'>
                            <input type="text" defaultValue="427  Edington Drive" />
                            <div>
                                <img src={location} alt="location" />
                            </div>
                        </div>
                    </div>
                    <div className='map__content__left-location'>
                        <p>ARRIVE</p>
                        <h4>Drop home location</h4>
                        <div className='map__content__left-location-input'>
                            <input type="text" defaultValue="4130  Public Works Drive" />
                            <div>
                                <img src={location} alt="location" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='map__content__right'>
                    <img src={mapImage} alt="map" />
                </div>
            </div>
        </div>
    </div>
  )
}
