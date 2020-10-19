import React, { useContext } from 'react'
import { LangContext } from '../../tools/LangContext'

import './CarouselImg.css'

const CarouselImg = ({ image: { img, title, engTitle } }) => {

  const { lang } = useContext(LangContext)

  return (
    <div className='CarouselImg'>
      <img src={require(`../../pictures/${img}`)} alt='gallery-item' />
      <p>
        {lang === 'FR' ? title : engTitle}
      </p>
    </div>
  )
}
export default CarouselImg
