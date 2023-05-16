import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {MdOutlineDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md'


function Header() {
  return (
    <header className='header-container header-light'>
      <Link to='/' className='logo'>CineTrail</Link>
      <div className="search-container">
        <input type='text' placeholder='Search movies...' className='search-input' />
      </div>
      <div className="header-buttons-container">
        <div className="theme-button-container">
          <MdOutlineLightMode className="theme-icon" />
          <MdOutlineDarkMode className="theme-icon" />
          {/*LEFT OFF AT 53:00 WEEK 1  */}
        </div>
        <button className="create-account-btn">Create an account</button>
      </div>
    </header>
  )
}

export default Header 