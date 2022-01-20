import React,{useEffect,useState} from 'react'
import './RowPoster.css'
import axios from '../axios';
import {img_url,trailer_id,apiKey,youtubeBaseurl} from '../constants/constants';
import YouTube from 'react-youtube';


function RowPoster(props) {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axios.get(props.data).then(response=>{
            // console.log(response.data)
            setMovies(response.data.results)
        })
    })
    const [trailer,SetTrailer] =useState('');

    const handleMid= (id)=>{

    
        axios.get(`movie/${id}/videos?api_key=${apiKey}###`).then(response=>{
            if(response.data.results.lenght!==0){
            SetTrailer(response.data.results[0])}
            else{
                console.log('Trailer not available');
            }
        })
    }
    const opts = {
        height: '250',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }
    }
    
    return (
        <div className='row' >
            <h4 className="title">{props.title}</h4>
            <div className= "posters">
                {movies.map((obj)=>

                <img  onClick={()=>handleMid(obj.id)} className= {props.isSmall ? 'smallposter' : 'poster' }src={`${img_url+obj.backdrop_path}`} alt="" />

                )}
            </div>
            
            { trailer && <YouTube videoId={trailer.key} opts={opts} /> }
        
        </div>
    )
}

export default RowPoster
