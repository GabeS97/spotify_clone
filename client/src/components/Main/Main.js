import React from 'react'
import Header from '../Header/Header'
import './Main.css'

const code = new URLSearchParams(window.location.search).get('code');
function Main() {
    return (
        <div className={`${code ? 'main' : 'register__main'} main__body`}>
            {/* Header */}
            <Header />


            {/* Content */}
        </div>
    )
}

export default Main
