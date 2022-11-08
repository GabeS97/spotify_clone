import React from 'react'
import Header from '../Header/Header'
import './Main.css'

function Main() {
    const user = null
    return (
        <div className={`${user ? 'main' : 'register__main'} main__body`}>
            {/* Header */}
            <Header />

            {/* Content */}
        </div>
    )
}

export default Main
