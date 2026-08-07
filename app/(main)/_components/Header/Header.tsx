'use client'

import React from 'react'
import { mainOffice, mk1 } from '../../../../constants/allOffices'
import './header.scss'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import Navigation from './Navigation'

const photo1 = '/images/1.jpg'
const photo2 = '/images/2.jpg'
const photo3 = '/images/3.jpg'
const photo4 = '/images/4.jpg'
const photo5 = '/images/5.jpg'

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__info">
          <Link href="/">
            <img src="/images/logo.jpg" alt="Логотип" />
          </Link>
          <OfficesInfo />
        </div>
        <Carousel />
      </header>
      <Navigation />
    </>
  )
}

function OfficesInfo() {
  return (
    <div className="header__contacts">
      <p>
        <span>299008, Севастополь,</span>
        <span>Время работы:</span>
        <span>{mainOffice.workDays}</span>
        <span className="office-address">{mainOffice.address}</span>
        <span>Забор биоматериала: {mainOffice.samplingBioMaterialTime}</span>
        <span>Выдача результатов: {mainOffice.resultsTime}</span>
        <span>Тел.: {mainOffice.phone}</span>
        {mainOffice.email && <span>email: {mainOffice.email}</span>}
        <span className="office-address">{mk1.address}</span>
        <span>Забор биоматериала: {mk1.samplingBioMaterialTime}</span>
        <span>Выдача результатов: {mk1.resultsTime}</span>
        <span>Тел.: {mk1.phone}</span>
      </p>
    </div>
  )
}

function Carousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
      align: 'start',
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000 })],
  )

  return (
    <div className="header__slideShow">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {[photo1, photo2, photo3, photo4, photo5].map((photo, index) => (
            <div key={index} className="embla__slide">
              <img src={photo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
