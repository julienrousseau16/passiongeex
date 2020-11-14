import React from 'react'

import './StackItem.css'

const StackItem = ({ item:{name, slug} }) => {
  return (
    <div className='StackItem'>
      <img src={require(`../../pictures/stack/${slug}`)} alt='stack-item' />
      <h3>{name}</h3>
    </div>
  )
}
export default StackItem
