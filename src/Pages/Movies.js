import { useEffect, useState } from "react";
import '../movies.css';
import { Search } from "../components/Search";
import { Movie } from "../components/Movie";
import axios from 'axios'
import styled from 'styled-components';
import { TopMovies } from "../components/TopMovies";
let key = 'pk_702klqvfc8jbrzwi1'
//208ef6e69a655dc9e5f18b04ae4dca00


const Background = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: -1;
    
    
    

    &:after {
        content: "";
        position: absolute;
        background-color: black;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        opacity: 0.8;
        z-index: -1;
    }
    `





export const Movies = () => {
    const [movies, setMovies] = useState([])
    const [topMovies, setTopMovies] = useState([])
    const [search, setSearch] = useState('batman')
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState('')

    useEffect(function() {
        const getMovies = async () => {
            setIsLoading(true)
            try {
                let res = await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=208ef6e69a655dc9e5f18b04ae4dca00&query=${search}&video=true&include_adult=true`);
                console.log(res)
                setMovies(res.data.results)
                setIsLoading(false)
            } catch(e) {
                console.log(e)
            }
        }

        getMovies()
    },[search, movie])

    return (
        <Background img={movies.length > 0 ? `https://image.tmdb.org/t/p/w500${movies[0].backdrop_path}` : ""}>
            <Search search={search} setSearch={setSearch} setMovie={setMovie}/>
            <ul className="list-of-movies">
                {!isLoading && movies !== null ? movies.map(movie => <Movie key={movie.id} url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} movies={movie.title} info={movie.overview} date={movie.release_date}/>) : <h1 style={{color: 'white'}}>Loading posters....</h1>}
            </ul>
            <TopMovies movi={topMovies}/>
        </Background>
    )
}