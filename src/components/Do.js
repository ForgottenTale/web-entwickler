import React from 'react'
import Card from './Card'
import Wash from '../assets/Wash.svg';
import Clean from '../assets/clean.svg';
import Face from '../assets/Face.svg';
import Mask from '../assets/Mask.svg';
import Distance from '../assets/distance.svg';
import Cover from '../assets/Cover.svg';
import './css/do.scss'
function Do(){
    return(
        <div className = "do" id="updates">
        <h2 className = "title">THINGS YOU CAN DO TO BE SAFE</h2>
        <div className="do__cards">
              <div className="do__cards__row">
        <Card img = {Wash}
              title="Wash your hand atleast for 20s" 
              des ="Washing your hands with sanitizer or hand wash properly. Its adviced to spend atleast  20 seconds to wash your hands" 
              />
        <Card img = {Clean}
              title="Clean your items properly" 
              des ="Wash and clean your clothes and other items if you went out of your home" 
              />
        <Card img = {Cover}
              title="Rub your face only using your arm" 
              des ="Rub your face only using your arm. Don't use you hands to rub or touch your face" 
              /> 
              </div>
              <div className="do__cards__row">
        <Card img = {Distance}
              title="Always keep a distance from others" 
              des ="Its adviced to keep alteast 1-2m away from other as it prevents the diseases from spreading" 
              />
        <Card img = {Mask}
              title="Always wear a mask while going outside" 
              des ="Always waer a good quality mask if you palnning to outside of your home" 
              />
        <Card img = {Face}
              title="Don't touch your face with your hands" 
              des ="Never touch your face with your hand if you went outside of your home " 
              /> 
              </div>     
            
        </div>                 
    </div>
    )
}

export default Do;