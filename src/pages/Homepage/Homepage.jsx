import React from 'react'
import Slider from '../../components/Slider/Slider'
import './Homepage.css'

//We need to catch the apiKey and baseUrl here in the homepage. We can use props or destructure it by just writing apiKey and baseUrl
//From the Homepage, we passed the apiKey and baseUrl to the Slider below

function Homepage({apiKey, baseUrl}) {
  return (
    <div className='homepage-container'>
        <Slider apiKey={apiKey} baseUrl={baseUrl} />
    </div>
  )
}

export default Homepage