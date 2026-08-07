import React from 'react'
import allOffices, { IOffice } from '.././constants/allOffices'
import '../Styles/allOfficesInfo.scss'

export default function AllOfficesInfo() {
  return <div className="allOfficesInfo">{getInfo(allOffices)}</div>

  function getInfo(arr: IOffice[]) {
    return arr.map((office: IOffice) => {
      return (
        <div className="officeInfo" key={office.id}>
          <div className="officeInfo__text">
            <h2>{office.header}</h2>
            <p>{office.address}</p>
            <p>Время работы:</p>
            <p>{office.workDays}</p>
            <p>Забор биоматериала: {office.samplingBioMaterialTime}</p>
            <p>Выдача результатов: {office.resultsTime}</p>
            <p>Телефон: {office.phone}</p>
            <a
              href={office.locationForLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Показать на карте</p>
            </a>
          </div>
          <div className="officeInfo__map">
            <iframe
              src={office.locationForFrame}
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: '0' }}
              allowFullScreen
              title={office.header}
            ></iframe>
          </div>
        </div>
      )
    })
  }
}
