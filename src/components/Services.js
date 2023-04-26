import React from 'react'
import { Link } from 'react-router-dom'

export const Services = () => {
    return (
        <>
            <div>
                <input 
                    type='search' 
                    placeholder="Search services" 
                    className='search--services'
                />
            </div>
            <nav className='nav--services'>
                <Link>Bridal Packages</Link>
                <Link>Individual Service</Link>
            </nav>
        </>
    )
}
