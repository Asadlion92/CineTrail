import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className='header-container'>
      <Link to='/' className='logo'>CineTrail</Link>
      <div className="search-container">
        <input type='text' placeholder='Search movies...' className='search-input' />
      </div>
      <div className="header-buttons-container">
        <div className="theme-button-container">
          {/*LEFT OFF AT 32:00 FOR WEEK 1 UNIT 6 WEDNSDAY EVENING */}
        </div>
        <button className="create-account-btn">Create an account</button>
      </div>
    </header>
  )
}

export default Header 