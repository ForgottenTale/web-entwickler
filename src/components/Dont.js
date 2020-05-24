import React from 'react'
import Card from './Card'
import Wash from '../assets/Wash.svg';
import './css/dont.scss'
function Do(){
    return(
        <div className = "dont">
        <h2 className = "dont__title">THINGS YOU CAN DONT TO BE SAFE</h2>
        <div className="do__cards">
        <Card img = {Wash}
              title="Wash your hand atleast for 20s" 
              des ="Washing your hands with sanitizer or hand wash properly. Its adviced to spend atleast  20 seconds to wash your hands" 
              />
        <Card img = {Wash}
              title="Wash your hand atleast for 20s" 
              des ="Washing your hands with sanitizer or hand wash properly. Its adviced to spend atleast  20 seconds to wash your hands" 
              />
        <Card img = {Wash}
              title="Wash your hand atleast for 20s" 
              des ="Washing your hands with sanitizer or hand wash properly. Its adviced to spend atleast  20 seconds to wash your hands" 
              /> 
        <Card img = {Wash}
              title="Wash your hand atleast for 20s" 
              des ="Washing your hands with sanitizer or hand wash properly. Its adviced to spend atleast  20 seconds to wash your hands" 
              />
        <Card img = {Wash}
              title="Wash your hand atleast for 20s" 
              des ="Washing your hands with sanitizer or hand wash properly. Its adviced to spend atleast  20 seconds to wash your hands" 
              />
        <Card img = {Wash}
              title="Wash your hand atleast for 20s" 
              des ="Washing your hands with sanitizer or hand wash properly. Its adviced to spend atleast  20 seconds to wash your hands" 
              />       
        </div>                 
    </div>
    )
}

export default Do;