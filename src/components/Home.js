import React from 'react';

import './css/home.scss';
import corona from '../assets/corona.svg';

function Home() {
    return (
        <div className="home">
            <div className = "home__container">
                <img src={corona} className="home__container__corona" />
                <h1 className="home__container__title">STAY SAFE <br />  STAY HEALHTY</h1>
                <p className="home__container__description">Lets fight this pandamic together</p>
            </div>
        </div>
    )
}

export default Home;