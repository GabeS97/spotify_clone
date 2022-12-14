import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'


function Home() {
    const navigate = useNavigate();
    const code = null
    return (
        <div className='home'>
            {/* Sidebar */}
            <Sidebar />
            {/* Main */}
            <Main />
            {/* MusicPlayer */}

            {!code ? (
                <footer className='auth__footer'>
                    <button
                        onClick={() => navigate('/signup')}
                        className="footer__signup">
                        Sign up free
                    </button>
                </footer>
            ) : null}
        </div>
    )
}

export default Home
