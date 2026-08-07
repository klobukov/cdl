'use client'
import React from 'react'
import { mainOffice, mk1 } from '.././constants/allOffices'
import '../Styles/header.scss'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const photo1 = '/images/1.jpg'
const photo2 = '/images/2.jpg'
const photo3 = '/images/3.jpg'
const photo4 = '/images/4.jpg'
const photo5 = '/images/5.jpg'

export default class Header extends React.Component {
  render() {
    // todo: сделать программно вывод инфо о всех офисах, как с картами
    return (
      <header className="header">
        <div className="header__info">
          <div>
            <img src="/images/logo.jpg" alt="Логотип" />
          </div>
          <div>
            <p>
              299008, Севастополь,
              <br />
              Время работы:
              <br />
              {mainOffice.workDays}
              <br />
              <br />
              <span>{mainOffice.address}</span>
              <br />
              Забор биоматериала: {mainOffice.samplingBioMaterialTime}
              <br />
              Выдача результатов: {mainOffice.resultsTime}
              <br />
              Тел.: {mainOffice.phone}
              <br />
              email: {mainOffice.email}
              <br />
              <br />
              <span>{mk1.address}</span>
              <br />
              Забор биоматериала: {mk1.samplingBioMaterialTime}
              <br />
              Выдача результатов: {mk1.resultsTime}
              <br />
              Тел.: {mk1.phone}
              <br />
              <br />
            </p>
          </div>
        </div>
        <Carousel />
      </header>
    )
  }
}

function Carousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    autoplay: true,
    duration: 50,
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  },[Autoplay({ delay: 5000 })])

  return (
      <div className="header__slideShow">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {[photo1, photo2, photo3, photo4, photo5].map((photo, index) => <div key={index} className="embla__slide">
              <img src={photo} alt=""/>
            </div>)}
          </div>
        </div>
      </div>
  )
}
