import React from 'react'
import { Link, Outlet } from 'react-router-dom'


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
                <Link to='bridal-packages' >Bride</Link>
                <Link to='wedding-party-packages'>Wedding Party</Link>
            </nav>
            <Outlet />
        </>
    )
}
