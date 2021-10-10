import React from "react";
import './Services.css';
import ServicesCard from "../ServicesCard/ServicesCard";

function Services() {
  return (
    <div className={'services'} id={'services'}>
      <h3 className={'services__title'}>Pakalpojumi</h3>
      <h4 className={'services__subtitle'}>Musu specializacija</h4>
      <div className="services__grid">
        <ServicesCard title={'Standarta palidziba'}
                      text={'Autoratlīdzības līgumu izstrāde, palīdzība reģistrēties VID mājas lapā,  atskaišu sagatavošana.'}
                      price={'Izmaksas tikai 30 EUR mēnesī.'}
                      link={'https://google.com'} />
        <ServicesCard title={'Pilns cikls'}
                      text={'Pilns grāmatvedības cikls, atskaites VID, gada pārskati, operatībās atskaites līzing kompānijām, bankām, cena atkarīga no paterētā laika'}
                      price={'Izmaksas nodokļu konsultācijai stundas likme ir 30 EUR'}
                      link={'https://google.com'} />
        <ServicesCard title={'Dokumentu apstrade'}
                      text={'Visada veida dokumentu apstrāde, cena atkarīga no apjoma'}
                      price={'Izmaksas sākot no 50 EUR'}
                      link={'https://google.com'} />
      </div>
    </div>
  )
}

export default Services;