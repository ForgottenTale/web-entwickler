import React from 'react';

import './css/home.scss';
import corona from '../assets/corona.svg';

function Home() {
    return (
        <div className="home">
            <div>
                <img src={corona} className="home__corona" />
                <h1 className="home__title">STAY SAFE <br />  STAY HEALHTY</h1>
                <p className="home__description">Lets fight this pandamic together</p>
            </div>
        </div>
    )
}

export default Home;