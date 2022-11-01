import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='spotify__logo sidebar__spacing'>
                <img
                    className='logo'
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                    alt="" />
            </div>
            <div className='function__icons sidebar__spacing'>
                <div className="sidebar__home icon__container">
                    <HomeIcon className='home__icon icon' />
                    <p className='home__title function__title'>Home</p>
                </div>

                <div className="sidebar__search icon__container">
                    <MagnifyingGlassIcon className='search__icon icon' />
                    <p className="search__title function__title">Search</p>
                </div>
                <div className="sidebar__library icon__container">
                    <BuildingLibraryIcon className='library__icon icon' />
                    <p className="library__title title">Your Library</p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Sidebar
