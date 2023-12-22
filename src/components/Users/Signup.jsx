import React from 'react'
import './Sign.css'

function Signup() {
  return (
    <div className='sign-container'>
        <form className='signup-form'>
            <div className='signup-form-header'>
                <h1>Sign up</h1>
                <p>Please fill in this form to create an account.</p>
            </div>
            <div className='signup-form-labels'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email' id='email' required />
            </div>
            <div className='signup-form-labels'>
                <label htmlFor="pwd">Password</label>
                <input type="password" placeholder='Enter password' id='pwd' required />
            </div>
            <div className='signup-form-labels'>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Enter username' id='username' required />
            </div>
            <div className='signup-form-button-container'>
              <button className='cancel-btn'>Cancel</button>
              <button className='signup-btn'>Sign up</button>
            </div>


        </form>
    </div>
  )
}

export default Signup