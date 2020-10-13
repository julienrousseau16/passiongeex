import React from 'react'

import './PreviewModal.css'

const PreviewModal = ({ name, close }) => {
  return (
    <div className='PreviewModal'>
      <div className='PreviewModalContainer'>
        <h3>{name}</h3>
        <button onClick={close}>VOIR PLUS</button>
      </div>
    </div>
  )
}
export default PreviewModal
