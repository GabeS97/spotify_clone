import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { HeartIcon, PlusIcon } from '@heroicons/react/24/solid'
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
                    <HomeIcon className='home__icon first_icon' />
                    <p className='home__title function__title'>Home</p>
                </div>

                <div className="sidebar__search icon__container">
                    <MagnifyingGlassIcon className='search__icon first_icon' />
                    <p className="search__title function__title">Search</p>
                </div>
                <div className="sidebar__library icon__container">
                    <BuildingLibraryIcon className='library__icon first_icon' />
                    <p className="library__title title">Your Library</p>
                </div>
            </div>

            <div className='function__icons sidebar__spacing'>
                <div className="sidebar__create icon__container ">

                    <div className="create__like__container plus__container">
                        <PlusIcon className='create__icon second__icon' />
                    </div>
                    <p className="create__title title">Create Playlist</p>
                </div>

                <div className="sidebar__liked icon__container">
                    <div className="create__like__container heart__container">
                        <HeartIcon className='liked__icon second__icon' />
                    </div>
                    <p className="liked__title title">Liked Songs</p>
                </div>
            </div>

            <div className='divider' />

            <div className='sidebar__playlists icon__container'>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
            </div>
        </div>
    )
}

export default Sidebar
