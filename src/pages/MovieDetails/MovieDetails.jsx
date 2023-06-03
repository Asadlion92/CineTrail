import React, {useState, useEffect, useContext} from 'react'
import './MovieDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { ThemeContext } from '../../contexts/ThemeContext'

function MovieDetails({baseUrl, apiKey}) {

    const {movieid} = useParams
    const [videoLink, setVideoLink] = useState('')
    const [movie, setMovie] = useState([])
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    //LEFT OFF AT 32:00 WEEK 3 CLASS 1

    useEffect(() => {
        axios.get(`${baseUrl}/movie/${movieid}?api_key=${apiKey}`)
        .then(res => {
          console.log(res.data)//Nothing happens
          setMovie(res.data)
        })
        .catch(err=>console.log(err))

        axios.get(`${baseUrl}/movie/${movieid}/videos?api_key=${apiKey}`)
        .then(res => {
          console.log(res.data)//Nothing happens
          const youtubeLink = res.data.results.filter(item => item.site === "YouTube" && item.type === "Trailer")
          setVideoLink(youtubeLink[0]?.key)
        })
    })




  return (
    <div className={darkMode ? "header-container" : "header-container header-light"}>
    {

      videoLink ?
        <div className='trailer-container'>
          <ReactPlayer className="trailer-player" url={`https://www.youtube.com/watch?v=${videoLink}`} />
        </div>
        :
        <div className='trailer-container-blank' style={{
              backgroundImage: `url("https://api.themoviedb.org/original${movie?.backdrop_path}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
        }}></div>

    }

    </div>
  )
}

export default MovieDetails