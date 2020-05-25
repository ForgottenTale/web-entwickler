import React from 'react';
import './css/updates.scss'

function Counter(){
    return(
        <div className="updates" id="update">
            <h2 data-aos="fade-up">Live Counter</h2>
            <div className="updates__box" data-aos="fade-up">
            <Box title ="Total cases"
                  number = "77103"/>
            <Box title ="Active cases"
                  number = "57720"/>
            <Box title ="Death"
                  number = "4021"/>
            <Box title ="Migrated cases"
                  number = "1"/>                  
                  
            </div>
            </div>
            
            
    )
}

function Box(props){
    return(
        <div className ="box">
            <h4 className="box__title">{props.title}</h4>
            <h5 className="box__value">{props.number}</h5>
        </div>
    )
}


export default Counter;