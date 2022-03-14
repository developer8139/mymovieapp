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
    height: 100vh;
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
    const [search, setSearch] = useState('lord of the rings')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(function() {
        const getMovies = async () => {
            setIsLoading(true)
            let res = await axios.get(`https://imdb-api.com/en/API/SearchMovie/${key}/${search}`);
            let data = await res.data.results
            //console.log(data)
            setMovies(data)
            setIsLoading(false)
        }

        getMovies()
    },[search])
    return (
        <Background img={movies.length > 0 ? movies[0].image : ""}>
            <Search search={search}/>
            <ul className="list-of-movies">
                {!isLoading ? movies.map(movie => <Movie key={movie.id} url={movie.image}/>) : <h1 style={{color: 'white'}}>Loading posters....</h1>}
            </ul>
        </Background>
    )
}