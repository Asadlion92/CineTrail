import React from 'react'
import './Sign.css'

function Signup() {
  return (
    <div className='sign-container'>
        <form className='signup-form'>
            <div className=''>
                <h1>Sign up</h1>
                <p>Please fill in this form to create an account.</p>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email' id='email' required />
            </div>
        </form>
    </div>
  )
}

export default Signup