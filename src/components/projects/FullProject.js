import React, { useEffect, useState, useContext } from 'react'
import Carousel from 'react-elastic-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faHourglassHalf, faUsers, faArrowAltCircleRight, faFilm } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import CarouselImg from './CarouselImg'

import { LangContext } from '../../tools/LangContext'

/* DEV REFERENCE */
import { project } from '../../tools/Project'
/* END OF DEV REFERENCE */

import './FullProject.css'

const FullProject = () => {

  const [appear, setAppear] = useState(false)
  const [complete, setComplete] = useState(false)
  const { lang } = useContext(LangContext)

  /* DEV REFERENCE */
  const { name, duration, engDuration, date, engDate, description, engDescription, team, pic, gallery, link, github, video } = project
  /* END OF DEV REFERENCE */

  const textToggle = () => {
    setComplete(!complete)
  }

  useEffect(() => {
    setAppear(true)
  }, [])

  return (
    <div className='FullProject' style={appear ? { opacity: 1 } : { opacity: 0 }}>

      <section className='ProjectHeader'>
        <img src={require(`../../pictures/${pic}`)} alt='project' />
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
      </section>

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
        <Carousel>
          {gallery.map((image, index) => <CarouselImg key={index} image={image} />)}
        </Carousel>
      </section>

      <section className='More'>
        <ul>
          <li>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className='icon' />
            <a href={link} target='_blank' rel="noopener noreferrer">
              {lang === 'FR' ? 'Essayer cette application' : 'Try this App'}
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} className='icon' />
            <a href={github} target='_blank' rel="noopener noreferrer">
              {lang === 'FR' ? 'Lien vers Github' : 'See the Github repo'}
            </a>
          </li>
          {video !== '' && <li>
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
