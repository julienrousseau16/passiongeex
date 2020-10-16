import React, { useEffect, useState } from 'react'

import './ProfilePage.css'

const ProfilePage = () => {

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setAppear(true)
  }, [])

  return (
    <div className='ProfilePage' style={appear ? { opacity: 1 } : { opacity: 0 }}>
      <h1 style={{ color: 'white' }}>ProfilePage</h1>
    </div>
  )
}
export default ProfilePage
