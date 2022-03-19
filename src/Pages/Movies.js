import { useEffect, useState } from "react";
import '../styles/movies.css';
import { Movie } from "../components/Movie";
import axios from 'axios'
import styled from 'styled-components';
import { CurrentlyTrending } from "../components/CurrentlyTrending";


const Background = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    height: 100%;
    `

const cache = {};



export const Movies = ({search, setShow}) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState('')
    
    

    useEffect(function() {
        setShow(true)
        const getMovies = async () => {
            setIsLoading(true)
            try {
                let res = await axios.get(`http://localhost:9356/movieroutes/bunchofmovies/${search}`);
            
                if(!cache.hasOwnProperty('movies')) {
                    cache["movies"] = res
                }
                
                if(cache.movies in cache) {
                    setMovies(cache.movies)
                    setIsLoading(false)
                } else {
                    setMovies(res.data)
                    setIsLoading(false)
                }
            } catch(e) {
                console.log(e)
            }
        }

        getMovies()

        return () => setShow(false)
    },[search, movie])

    return (
        <Background img={movies.length > 0 ? `https://image.tmdb.org/t/p/w500${movies[0].backdrop_path}` : ""}>
            <div style={{zIndex: "80", height: "100%"}}>
                <CurrentlyTrending />
                <ul className="list-of-movies">
                    {!isLoading && movies !== null ? movies.map(movie => 
                    <Movie key={movie.id} url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} id={movie.id} movies={movie.title} info={movie.overview} date={movie.release_date}/>) 
                    : 
                    <h1 style={{color: 'white'}}>Loading posters....</h1>}
                </ul>
            </div>
        </Background>
    )
}