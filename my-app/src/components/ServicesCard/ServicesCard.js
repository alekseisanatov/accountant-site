import React from "react";
import './ServicesCard.css';
import cardLogo from '../../images/cardLogo.svg';
import bg from '../../images/bg.svg';

const styleDiv = {
  background: `url(${bg})`,
  backgroundSize: 'cover'
}

function ServicesCard({title, text, price, link}) {
  return (
    <div className={'card'} style={styleDiv}>
      <img className={'card__logo'} src={cardLogo} alt="logo"/>
      <h3 className={'card__title'}>{title}</h3>
      <p className="card__text">{text}</p>
      <p className="card__price">{price}</p>
      <a href={link} className="card__link">Noderīga informacija</a>
    </div>
  )
}

export default ServicesCard;