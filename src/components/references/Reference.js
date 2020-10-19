import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faUser, faBuilding } from '@fortawesome/free-solid-svg-icons'

import { LangContext } from '../../tools/LangContext'

import './Reference.css'

const Reference = ({ reference: { text, engText, from, company, position, engPosition } }) => {

  const { lang } = useContext(LangContext)

  return (
    <div className='Reference'>
      <div className='ReferenceText'>
        <FontAwesomeIcon icon={faQuoteLeft} className='quote' id='start' />
        <p>{lang === 'FR' ? text : engText}</p>
        <FontAwesomeIcon icon={faQuoteRight} className='quote' id='end' />
      </div>
      <div className='ReferenceFrom'>
        <FontAwesomeIcon icon={faUser} />
        <h3>{from},</h3>
        <p>
          {lang === 'FR' ? position : engPosition}
        </p>
      </div>
      <div className='ReferenceCompany'>
        <FontAwesomeIcon icon={faBuilding} />
      <p>{company}</p>
      </div>
    </div>
  )
}
export default Reference
