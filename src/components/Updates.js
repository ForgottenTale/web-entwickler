import React from 'react';
import './css/updates.scss'

function Updates(){
    return(
        <div className="updates">
            <h2 >New updates</h2>
            <div className="updates__box">
            <Box title ="Total cases"
                  number = "123456"/>
            <Box title ="Total cases"
                  number = "123456"/>
            <Box title ="Total cases"
                  number = "123456"/>
            <Box title ="Total cases"
                  number = "123456"/>                  
                  
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


export default Updates;