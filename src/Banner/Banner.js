import React, { useState } from 'react';
import './Banner.css';
import { useEffect } from 'react';
import axios from '../axios';
import {apiKey,img_url} from '../constants/constants';
function Banner() {
    const [movie,setMovie] = useState([])
    useEffect(() => {
      axios.get(`trending/all/day?api_key=${apiKey}`).then((response)=>{
          setMovie(response.data.results[0])
      })
    }, []);
    
    return (

<div  style={{backgroundImage:`url(${img_url + movie.backdrop_path})`}}
        className='banner' >
            <div className="content">
                <h1 className="title_main">{movie.title}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>

                </div>
                <h1 className="description">{movie.overview}</h1>
            </div>
        </div>       
    )
}
 
export default Banner

