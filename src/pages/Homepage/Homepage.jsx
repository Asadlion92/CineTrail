import React, {useEffect, useState} from 'react'
import Slider from '../../components/Slider/Slider'
import './Homepage.css'
import PopularMovies from '../../components/PopularMovies/PopularMovies';
import TopRatedMovies from '../../components/TopRatedMovies/TopRatedMovies';
import axios from 'axios';

//We need to catch the apiKey and baseUrl here in the homepage. We can use props or destructure it by just writing apiKey and baseUrl
//From the Homepage, we passed the apiKey and baseUrl to the Slider below


function Homepage({apiKey, baseUrl}) {
  const [topRatedMovies, setTopRatedMovies] = useState([])
  useEffect(()=>{
    // axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    // .then((res) => console.log(res.data.results))
    // .catch(err=>console.log(err));
    axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
    .then((res) => setTopRatedMovies(res.data.results))
    .catch(err=>console.log(err));
  }, []);
  return (
    <div className='homepage-container'>
        <Slider apiKey={apiKey} baseUrl={baseUrl} />
        <div className="movies-wrapper">
          <PopularMovies baseUrl={baseUrl} apiKey={apiKey} />
          <TopRatedMovies topRatedMovies={topRatedMovies} />
        </div>
    </div>
  )
}

export default Homepage