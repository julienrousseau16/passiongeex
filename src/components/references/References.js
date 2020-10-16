import React, { useEffect, useState } from 'react'

import './References.css'

const References = () => {

  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setAppear(true)
  }, [])

  return (
    <div className='References' style={appear ? { opacity: 1 } : { opacity: 0 }}>
      <h1 style={{ color: 'white' }}>References</h1>
    </div>
  )
}
export default References