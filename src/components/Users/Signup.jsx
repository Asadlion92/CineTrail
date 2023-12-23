import React, { useState } from 'react'
import './Sign.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [success, setSuccess] = useState(false)

  const serverUrl = "https://cinetrail-server.herokuapp.com"

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('signup');
    console.log(email, password, username);
    //make api call to sign up this user
    axios.post(`${serverUrl}/users/signup`, 
    {email, password, username})
    .then(res => {
      console.log(res.data)
      //check for errors
      if (res.data.status === 409){
        alert('email already exist')
      }
      else {
        //user was created
        //clear the textboxes
        setEmail('')
        setPassword('')
        setUsername('')
        setSuccess(true)
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='sign-container'>
        <form className='signup-form' onSubmit={handleSignup} >
            <div className='signup-form-header'>
                <h1>Sign up</h1>
                <p>Please fill in this form to create an account.</p>
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
            <div className='signup-form-labels'>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Enter username' id='username' required
                  onChange={(e)=> {setUsername(e.target.value)}}
                  value={username}
                 />
            </div>
            <div className='signup-form-button-container'>
              <button type='reset' className='cancel-btn'>Cancel</button>
              <button type='submit' className='signup-btn'>Sign up</button>
            </div>
            {
              success?
              <p>You are signed up sucessfully
              <Link to='/signin' className='red-text'>Signin</Link>
              </p>
              
              :
              <p>Already have an account?
              <Link to='/signin' className='red-text'>Signin</Link>
              </p>
            }


        </form>
    </div>
  )
}

export default Signup