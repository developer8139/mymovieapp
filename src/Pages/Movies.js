import { useEffect, useState } from "react";
import '../movies.css';
import { Movie } from "../components/Movie";
import axios from 'axios'
import styled from 'styled-components';
import { CurrentlyTrending } from "../components/CurrentlyTrending";
const API_KEY = '208ef6e69a655dc9e5f18b04ae4dca00'

const Background = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    height: 100%;
    `

const cache = {};



export const Movies = ({search}) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState('')
    

    useEffect(function() {
        const getMovies = async () => {
            setIsLoading(true)
            try {
                let res = await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&query=${search}&video=true&include_adult=true`);
                if(!cache.hasOwnProperty('movies')) {
                    cache["movies"] = res
                }
                
                console.log(res)
                if(cache.movies in cache) {
                    setMovies(cache.movies)
                    setIsLoading(false)
                } else {
                    setMovies(res.data.results)
                    setIsLoading(false)
                }
            } catch(e) {
                console.log(e)
            }
        }

        getMovies()
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