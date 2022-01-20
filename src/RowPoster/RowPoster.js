import React,{useEffect,useState} from 'react'
import './RowPoster.css'
import axios from '../axios';
import {apiKey,img_url} from '../constants/constants';


function RowPoster() {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axios.get(`discover/tv?api_key=${apiKey}&with_networks=213`).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        })
    })
    return (
        <div className='row' >
            <h4 className="title">Netflix originals</h4>
            <div className="posters">
                {movies.map((obj)=>

                <img className='poster' src={`${img_url+obj.backdrop_path}`} alt="" />

                )
            }
            </div>
        </div>
    )
}

export default RowPoster
