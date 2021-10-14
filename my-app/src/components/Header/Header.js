import React, {useState} from "react";
import './Header.css';
import HeaderLogo from '../../images/Header-logo.svg';
import PhoneLogo from '../../images/PhoneLogo.svg';
import EmailLogo from '../../images/EmailLogo.svg';
import AddressLogo from '../../images/AddressLogo.svg';

function Header() {
  const [isBurgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = () => {
    setBurgerActive(!isBurgerActive);
  }

  const closeMobileMenu = () => {
    setBurgerActive(false);
  }

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
        <div className={`header__burger`}>
          <div onClick={handleBurgerClick} className={`header__burger-button }`}>
            <span className={`header__burger-line ${isBurgerActive ? 'header__burger-line_active' : ''}`}></span>
            <span className={`header__burger-line ${isBurgerActive ? 'header__burger-line_active' : ''}`}></span>
            <span className={`header__burger-line ${isBurgerActive ? 'header__burger-line_active' : ''}`}></span>
          </div>
          <div className="header__close-button">
            <span className={'header__burger-close'}></span>
            <span className={'header__burger-close'}></span>
          </div>
          <ul onClick={handleBurgerClick} className={`header__burger-nav ${isBurgerActive ? 'header__burger-nav_active' : ''}`}>
            <li className="header__burger-link"><a className={'header__burger-link header__link_type_burger'} href="#main">Galvēna</a></li>
            <li className="header__burger-link"><a className={'header__burger-link header__link_type_burger'} href="#services">Pakalpojumi</a></li>
            <li className="header__burger-link"><a className={'header__burger-link header__link_type_burger'} href="#company">Par mums</a></li>
            <li className="header__burger-link"><a className={'header__burger-link header__link_type_burger'} href="#footer">Kontakti</a></li>
          </ul>
        </div>
      </div>

      <div className="header__lang">

      </div>
    </header>
  )
};

export default Header;