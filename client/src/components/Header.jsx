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
                <Link to='/signup' className={`${pathname === '/signup' ? 'border bg-gray-500 rounded-full px-2 py-1 text-white' : ''} items-center`}>Sign Up</Link>
                <Link to='/signin' className={`${pathname === '/signin' ? 'border bg-gray-500 rounded-full px-2 py-1 text-white' : ''} item-center`}>Sign In</Link>
            </div>
        </nav>
    )
}

export default Header
