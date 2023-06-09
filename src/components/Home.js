import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>
      <p className='title--home'>Atlanta Wedding Hair and Makeup</p>
    </div>
    <button onClick={() => navigate('booking-summary', { replace: true })} className='btn--home-book'>
      Book Now
    </button>
    </>
  )
}

