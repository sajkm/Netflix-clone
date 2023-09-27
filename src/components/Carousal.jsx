import React from 'react'
import './Carousal.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import { useEffect,useState } from 'react'
export default function Carousal({fetchUrl}) {
    const [slideMovies,setSlideMoives]=useState([])
    const [movie,setMovie]=useState([])
  const baseUrl="https://image.tmdb.org/t/p/original/"
  const fetchData = async () => {
   
    const {data} = await tmdbAxiosInstance.get(fetchUrl);
 setSlideMoives(data.results)
setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    
  };
  useEffect(() => {
    fetchData()
  }, []);
  
  return (
   
        <div className='banner' style={
          {backgroundImage:`url(${baseUrl}/${movie?.backdrop_path})`}
        }>
           <div className="banner-content">
            <h1>{movie?.name}</h1>
            <span>{movie?.overview?.slice(0,280)}...</span>
           </div>
          
        </div>
   
  )
}
