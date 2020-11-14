import React, { useState } from 'react'

import StackItem from './StackItem'

import { stack } from '../../tools/AboutMe'

import './StackContainer.css'

const StackContainer = ({ lang }) => {

  const [show, setShow] = useState(false)
  const showToggle = () => setShow(!show)

  return (
    <div className='StackContainer'>
      <h1 onClick={showToggle}>Stack</h1>
      {show && <div className='StackSubContainer'>
        <div className='StackWrapper'>
          <h2 id='front'>Front-end</h2>
          <ul>
            {
              stack
                .filter(item => item.type === 'front')
                .map(item => <StackItem key={item.id} item={item} />)
            }
          </ul>
        </div>
        <div className='StackWrapper'>
          <h2 id='back'>Back-end</h2>
          <ul>
            {
              stack
                .filter(item => item.type === 'back')
                .map(item => <StackItem key={item.id} item={item} />)
            }
          </ul>
        </div>
        <div className='StackWrapper'>
          <h2>{lang === 'FR' ? 'Outils' : 'Tools'}</h2>
          <ul>
            {
              stack
                .filter(item => item.type === 'tool')
                .map(item => <StackItem key={item.id} item={item} />)
            }
          </ul>
        </div>
      </div>}
    </div>
  )
}
export default StackContainer
