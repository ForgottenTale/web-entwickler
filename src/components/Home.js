import React from 'react';

import './css/home.scss';
import corona from '../assets/corona.svg';
import doctor from '../assets/doctor.png'

function Home() {
    return (
        <div className="home" id="home">
            <div className = "home__container">
                <img src={corona} className="home__container__corona" />
                <img src={doctor} className="home__container__doctor" />
                <h1 className="home__container__title">STAY SAFE <br />  STAY HEALHTY</h1>
                <p className="home__container__description">Lets fight this pandamic together</p>
            </div>
        </div>
    )
}

export default Home;