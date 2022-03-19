import Carousel from 'react-bootstrap/Carousel';
import { Movie } from './Movie';
import { GetVideos } from '../customHooks/GetVideos';
import {useState, useEffect} from 'react'
import '../styles/movies.css'

export const MovieCarousel = () => {
    const [index, setIndex] = useState(0);
    const [videos, handleVideos] = GetVideos();
    const data = videos.data !== undefined ? videos.data.results : [];

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    useEffect(function() {
        handleVideos()
    },[])

    return (
        <Carousel className="movieCarousel" activeIndex={index} onSelect={handleSelect} >
        {data.map(video => 
            <Carousel.Item style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${video.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: "center", backgroundOrigin: "center", backgroundRepeat: "no-repeat"}}>
                <Movie url={`https://image.tmdb.org/t/p/w500${video.poster_path}`} movies={video.title} info={video.overview}/>
            </Carousel.Item>     
        )}
    </Carousel>
    )
}