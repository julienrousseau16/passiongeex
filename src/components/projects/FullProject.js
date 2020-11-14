import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faHourglassHalf, faUsers, faArrowAltCircleRight, faFilm } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import CarouselImg from './CarouselImg'

import { LangContext } from '../../tools/LangContext'

import './FullProject.css'

const FullProject = () => {

  const [complete, setComplete] = useState(false)

  const { lang } = useContext(LangContext)
  const { name, duration, engDuration, date, engDate, description, engDescription, team, pic, gallery, maxGallery, link, github, github2, video } = useLocation().project

  const textToggle = () => {
    setComplete(!complete)
  }

  return (
    <div className='FullProject'>
      <div className='FullProjectTopContainer'>
        <img src={require(`../../pictures/${pic}`)} alt='project' />
        <div className='InformationContainer'>
          <h2 style={{ color: 'white' }}>{name}</h2>
          <div className='Information'>
            <div className='Date'>
              <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
              <p>{lang === 'FR' ? date : engDate}</p>
            </div>
            <div className='Duration'>
              <FontAwesomeIcon icon={faHourglassHalf} className='icon' />
              <p>{lang === 'FR' ? duration : engDuration}</p>
            </div>
            <div className='NbPeople'>
              <FontAwesomeIcon icon={faUsers} className='icon' />
              <p>{team}</p>
            </div>
          </div>
        </div>
      </div>

      <section className='Description'>
        <div className='text' style={!complete ? { height: '130px' } : { height: 'fit-content' }}>
          {lang === 'FR' ?
            description.map((text, index) => <p key={index}>{text}</p>)
            : engDescription.map((text, index) => <p key={index}>{text}</p>)
          }
        </div>
        <button
          style={!complete ? { marginTop: '10px' } : { marginTop: 0 }}
          onClick={textToggle}
        >{lang === 'FR' && !complete ? 'Lire plus'
          : lang === 'FR' && complete ? 'Lire moins'
            : lang !== 'FR' && !complete ? 'Read more'
              : 'Read less'}
        </button>
      </section>



      <section className='Gallery'>
        <h2>
          {lang === 'FR' ? 'Galerie' : 'Gallery'}
        </h2>
        <Carousel>
          {window.screen.width < 768 ?
            gallery.map((image, index) => <CarouselImg key={index} image={image} />)
            : maxGallery.map((image, index) => <CarouselImg key={index} image={image} />)}
        </Carousel>
      </section>

      <section className='More'>
        <h2>
          {lang === 'FR' ? 'Pour en savoir +' : 'Want to know more ?'}
        </h2>
        <ul>
          {"link" in useLocation().project && <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className='icon' />
            <a href={link} target='_blank' rel="noopener noreferrer">
              {lang === 'FR' ? 'Essayer cette application' : 'Try this App'}
            </a>
          </li>}
          {"github" in useLocation().project && <li>
            <FontAwesomeIcon icon={faGithub} className='icon' />
            <a href={github} target='_blank' rel="noopener noreferrer">
              {lang === 'FR' ? 'Lien vers Github (front-end)' : 'See the Github repo (front-end)'}
            </a>
          </li>}
          {"github2" in useLocation().project && <li>
            <FontAwesomeIcon icon={faGithub} className='icon' />
            <a href={github2} target='_blank' rel="noopener noreferrer">
              {lang === 'FR' ? 'Lien vers Github (back-end)' : 'See the Github repo (back-end)'}
            </a>
          </li>}
          {"video" in useLocation().project && <li>
            <FontAwesomeIcon icon={faFilm} />
            <a href={video} target='_blank' rel="noopener noreferrer">
              {lang === 'FR' ? 'Voir la vidéo' : 'Watch the video'}
            </a>
          </li>}
        </ul>
      </section>
    </div>
  )
}
export default FullProject
