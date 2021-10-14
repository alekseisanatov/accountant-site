import React from "react";
import './Company.css';

function Company() {
  return (
    <div className={'company'} id={'company'}>
      <div className="company__text">
        <h2 className="company__title">Par mums</h2>
        <h3 className="company__subtitle">MyBalance</h3>
        <p className="company__text">Esmu absolvējis Rīgas Tehnisko Universitāti specialitāte  Ekonomists grāmatvedis 2. Līmeņa augstāka, Latvijas Universitāte ,  Audits un grāmatvedība, maģistrs , IAB grāmatvedības sertfikāts ,  nostrādājis par galveno grāmatvedī 17 gadus, par uzņēmuma vadītāju 6 gadus ,  izsprotot uzņemuma vadītāja un grāmatveža ikdienas rūpalas . Katru dienu saskaroties ar izmaksu optimizēšanu, racionālāku darbu , lielāku darījuma māržu. Ar savu pieredzi vēlos Jums sniegt palīdzību uz veiksmīgāku un mierīgāku dzīvi!</p>
      </div>
      <div className="company__numbers">
        <div className="company__number company__number_type_blue">
          <p className="company__num">10</p>
          <p className="company__num-text">gadu pieredze</p>
        </div>
        <div className="company__number">
          <p className="company__num">90</p>
          <p className="company__num-text">Ligumi</p>
        </div>
        <div className="company__number">
          <p className="company__num">50</p>
          <p className="company__num-text">Vairak par 50 klientiem</p>
        </div>
        <div className="company__number">
          <p className="company__num">90</p>
          <p className="company__num-text">10 gadu pieredze</p>
        </div>
      </div>
    </div>
  )
}

export default Company;