import React from "react";
import './Footer.css';
import phoneLogo from '../../images/PhoneLogo.svg';
import EmailLogo from '../../images/EmailLogo.svg';
import bg from '../../images/IntroBg.jpg';

const styleFooter = {
  background: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

function Footer() {
  return (
    <footer className={'footer'} id={'footer'} style={styleFooter}>
      <div className="footer__contacts">
        <h2 className="footer__title">Sazinies ar mums</h2>
        <div className="footer__text">Jums palika jautajumi? Sazinies ar mums un mes atbildesim tuvakaja laika</div>
        <div className="footer__data">
          <div className={'footer__item'}>
            <img src={phoneLogo} alt="phone-logo"/>
            <p className={'footer__cont'}>+371 27777777</p>
          </div>
          <div className={'footer__item'}>
            <img src={EmailLogo} alt="email-logo"/>
            <p className={'footer__cont'}>email@email.lv</p>
          </div>
        </div>
      </div>
      <form className="footer__form">
        <div className="footer__form-up">
          <label className={'footer__label'}>
            Vards
            <input className={'footer__input'} type="text" placeholder={'Vards'}/>
          </label>
          <label className={'footer__label'}>
            E-pasts
            <input className={'footer__input'} type="email" placeholder={'E-pasts'}/>
          </label>
        </div>
        <label className={'footer__label'}>
          Teksts
          <input className={'footer__input'} type="textarea" placeholder={'Teksts'}/>
        </label>
        <button className={'footer__button'} type={'submit'}>Nosutit ziņu</button>
      </form>
    </footer>
  )
}

export default Footer;