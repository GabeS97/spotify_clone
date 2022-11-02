import React from 'react'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'
function Home() {
    return (
        <div className='home'>
            {/* Sidebar */}
            <Sidebar />
            {/* Main */}
            <Main />
            {/* MusicPlayer */}
        </div>
    )
}

export default Home
