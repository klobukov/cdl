import React from 'react'
import IPage from './IPage'
import {domainName} from "../../constants";

const Documents: IPage = {
  name: 'Документы',
  url: '/documents',
  element: documentsElement(),
}

export default Documents

function documentsElement() {
  return (
    <div style={{ padding: '20px' }}>
      <ul style={{
        listStyle: 'disc',
        paddingLeft: '20px',
        margin: 0
      }}>
        <li style={{ marginBottom: '32px' }}>
          <a
            href="https://sev.gov.ru/docs/253/269545/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#0066cc',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            Об утверждении Территориальной программы государственных гарантий бесплатного оказания гражданам медицинской помощи в городе Севастополе на 2026 год и на плановый период 2027 и 2028 годов
          </a>
        </li>
        <li style={{ marginBottom: '32px' }}>
      <span style={{ fontSize: '18px', fontWeight: '500', marginRight: '12px' }}>
        Политика обработки персональных данных
      </span>
          <a
            href={`https://docs.google.com/viewer?url=${domainName}/politics.docx&embedded=true`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '12px', color: '#0066cc' }}
          >
            Открыть
          </a>
          <a
            href="/politics.docx"
            download
            style={{ color: '#0066cc' }}
          >
            Скачать
          </a>
        </li>
      </ul>
    </div>
  )
}
