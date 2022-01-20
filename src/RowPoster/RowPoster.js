import React,{useEffect,useState} from 'react'
import './RowPoster.css'
import axios from '../axios';
import {img_url} from '../constants/constants';


function RowPoster(props) {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axios.get(props.data).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        })
    })
    return (
        <div className='row' >
            <h4 className="title">{props.title}</h4>
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
