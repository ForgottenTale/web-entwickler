import React from 'react';
import './css/card.scss'
function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card__img"/>
            <div className="card__text">
                <h2 className="card__text__title">{props.title}</h2>
                <p className="card__text__description">{props.des}</p>
            </div>
        </div>
    )
}
export default Card;