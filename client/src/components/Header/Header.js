import React from 'react'
import './Header.css'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    return (
        <header className='header'>
            <div className="header__arrows">
                <ChevronLeftIcon className='left__icon arror__icon' />
                <ChevronRightIcon className='right__icon arror__icon' />
            </div>

            <div className="header__auth">
                <button
                    onClick={() => navigate('/signup')}
                    className="header__signup signup">Sign up</button>
                <button
                    onClick={() => navigate('/login')}
                    className="header__login login" >Log in</button>
            </div>
        </header>
    )
}

export default Header
