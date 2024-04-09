import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const { pathname } = location;
    return (
        <nav className='flex border-b border-gray-500 mb-5 px-5 h-16 items-center justify-between'>
            <div className='space-x-4'>
                <Link to='/'>Logo</Link>
                <Link to='/'>Home</Link>
            </div>
            <div className='flex gap-5 border border-gray-500 rounded-full py-2 px-4 items-center shadow-md'>
                <Link to='/signup' className={`${pathname === '/signup' ? 'bg-gray-500 border-gray-500  text-white' : ''} border border-white rounded-full px-2 py-1 items-center`}>Sign Up</Link>
                <Link to='/signin' className={`${pathname === '/signin' ? 'bg-gray-500 border-gray-500  text-white' : ''} border border-white rounded-full px-2 py-1 item-center`}>Sign In</Link>
            </div>
        </nav>
    )
}

export default Header
