import { useEffect, useState } from "react";
import '../movies.css';
import { Search } from "../components/Search";
import { Movie } from "../components/Movie";
import axios from 'axios'
import styled from 'styled-components';
let key = 'pk_702klqvfc8jbrzwi1'


const Background = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-color: black;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    &:after {
        content: "";
        background-color: black;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
        opacity: 0.8;
    }
`


export const Movies = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('batman')
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState('')

    useEffect(function() {
        const getMovies = async () => {
            setIsLoading(true)
            try {
                let res = await axios.get(`https://imdb-api.com/en/API/SearchMovie/${key}/${movie === "" ? search : movie}`);
                let data = await res.data.results
                
                if(data !== null) {
                    setMovies(data)
                    setIsLoading(false)
                }
            } catch(e) {
                console.log(e)
            }
        }

        getMovies()
    },[search, movie])
    return (
        <Background img={movies.length > 0 ? movies[0].image : ""}>
            <Search search={search} setSearch={setSearch} setMovie={setMovie}/>
            <ul className="list-of-movies">
                {!isLoading ? movies.map(movie => <Movie key={movie.id} url={movie.image}/>) : <h1 style={{color: 'white'}}>Loading posters....</h1>}
            </ul>
        </Background>
    )
}