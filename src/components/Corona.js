import React from 'react';
import Covid from '../assets/covid.jpg';
import './css/corona.scss';
function Corona(){
    return(
        <div className = "corona" data-aos="fade-up" id="corona">
            <img src={Covid}/>
            <div className="corona__text">
               <h1 className="corona__text__title">What is Covid-19</h1>
               <p className="corona__text__description">
               Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).[10] It was first identified in December 2019 in Wuhan, China, and has since spread globally, resulting in an ongoing pandemic.[11][12] As of 24 May 2020, more than 5.31 million cases have been reported across 188 countries and territories, resulting in more than 342,000 deaths. More than 2.11 million people have recovered.[9]
               </p>
            </div>
        </div>
    )
}
export default Corona;