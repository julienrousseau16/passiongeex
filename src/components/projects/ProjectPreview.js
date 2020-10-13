import React, { useState } from 'react'

import PreviewModal from './PrevewModal'

import './ProjectPreview.css'

const ProjectPreview = ({ project: { name, mobilepic } }) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className='ProjectPreview'>
      <img src={require('../../pictures/' + mobilepic)} alt='project preview' />
      <div className='PreviewInfo' onClick={() => setShowModal(true)}>infos</div>
      {showModal && <PreviewModal name={name} close={() => setShowModal(false)} />}
    </div>
  )
}
export default ProjectPreview
