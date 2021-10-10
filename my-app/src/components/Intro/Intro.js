import React from "react";
import './Intro.css';
import IntroBg from '../../images/IntroBg.jpg';

const styleDiv = {
  background: `url(${IntroBg})`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
};

function Intro() {
  return (
    <div className={'intro'} style={styleDiv}>
      <h1 className={'intro__title'}>Māklsinieki- mūsdienu Likumdošanas kalambūros , atradīsim jums izdevīgākos nodoķļa maksāšanas formu.</h1>
      <button className={'intro__button'}>Uzzinat vairak</button>
    </div>

  )
}

export default Intro;