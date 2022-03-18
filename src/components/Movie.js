import '../movies.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Movie = ({url, movies, info, date}) => {
    const movieInfo = {
        title: movies,
        pic: url,
        overview: info,
        date: date
    }
    const handleMovieFavorites = (title, url) => {
        console.log(title, url)
        axios.post('http://localhost:9356/movie', {
            title: title,
            poster: url
        }).then(e => {
            console.log('Movie not sent to favorites')
        })
    }
    return (
    <div className="movie-container">
        <div className="movie-img">
            <Link to="/aboutmovies" state={movieInfo}>
                <img width="200" height="250" src={url} className="image"/>
            </Link>
        </div>
        <button className='fav-btn' onClick={() => handleMovieFavorites(movies, url)}>Add as Favorite</button>
    </div>
        
    )
}