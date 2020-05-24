import React from 'react'
import background from '../assets/Path 1.svg';
import './css/home.scss';
import corona from '../assets/corona.svg'
import Navbar from './Navebar'
function Home(){
    return(
        <div className ="home">
            <Navbar />
            <img src={background} className ="home__background"/>
            <img src={corona} className ="home__corona"/>
            <h1>Stay Home</h1>
            <h1>Stay Safe</h1>
        </div>
    )
}

export default Home;