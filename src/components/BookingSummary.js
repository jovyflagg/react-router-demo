import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BookingSummary = () => {
    const navigate = useNavigate()

  return (
    <>
        <div>Booking Confirmed! </div>
        <button onClick={() => navigate(-1)} className='btn--go-back-booking'>Go back</button>
    </>
  )
}
