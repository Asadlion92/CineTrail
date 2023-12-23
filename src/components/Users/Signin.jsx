import React, {useState} from 'react'
import './Sign.css'
import { Link } from 'react-router-dom'

function Signin() {

    //create state for form inputs

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignin = () => {}

    

  return (
    <div className='sign-container'>
                <form className='signup-form' >
            <div className='signup-form-header'>
                <h1>Sign in</h1>
                <p>Please fill in this form to login.</p>
            </div>
            <div className='signup-form-labels'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email' id='email' required
                  onChange={(e)=> {setEmail(e.target.value)}}
                  value={email}
                 />
            </div>
            <div className='signup-form-labels'>
                <label htmlFor="pwd">Password</label>
                <input type="password" placeholder='Enter password' id='pwd' required
                  onChange={(e)=> {setPassword(e.target.value)}}
                  value={password}
                 />
            </div>

            <div className='signup-form-button-container'>
              <button type='reset' className='cancel-btn'>Cancel</button>
              <button type='submit' className='signup-btn'>Signin</button>
            </div>
            <p>Don't have an account? 
                <Link to='/signup' className='red-text'>Signup</Link>
            </p>



        </form>
    </div>
  )
}

export default Signin