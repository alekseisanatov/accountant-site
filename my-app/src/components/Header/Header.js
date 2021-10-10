import React from "react";
import './Header.css';
import HeaderLogo from '../../images/Header-logo.svg';
import PhoneLogo from '../../images/PhoneLogo.svg';
import EmailLogo from '../../images/EmailLogo.svg';
import AddressLogo from '../../images/AddressLogo.svg';

function Header() {
  return(
    <header className={'header'}>
      <div className="header__logo">
        <img src={HeaderLogo} alt="Logo"/>
      </div>
      <div className="header__main">
        <ul className="header__items header__contacts">
          <li className="header__contact">
            <img src={PhoneLogo} alt="Phone"/>
            <p className={'header__text'}>+371 27027611</p>
          </li>
          <li className="header__contact">
            <img src={EmailLogo} alt="EMail"/>
            <p className={'header__text'}>email@email.com</p>
          </li>
          <li className="header__contact">
            <img src={AddressLogo} alt="Address"/>
            <p className={'header__text'}>Zemeņu iela 10, Iksķile</p>
          </li>
        </ul>
        <ul className="header__items header__nav">
          <li className="header__link"><a className={'header__link'} href="#main">Galvēna</a></li>
          <li className="header__link"><a className={'header__link'} href="#services">Pakalpojumi</a></li>
          <li className="header__link"><a className={'header__link'} href="#company">Par mums</a></li>
          <li className="header__link"><a className={'header__link'} href="#footer">Kontakti</a></li>
        </ul>
      </div>
      <div className="header__lang">

      </div>
    </header>
  )
};

export default Header;