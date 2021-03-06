import '../styles/movies.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Movie = ({url, movies, info, date, id}) => {
    const movieInfo = {
        title: movies,
        pic: url,
        overview: info,
        date: date,
        id: id
    }
    const handleMovieFavorites = (title, url) => {
        axios.post('http://localhost:9356/movieroutes/movie', {
            title,
            poster: url
        }).then(e => {
            console.log('Movie sent to favorites')
        })
    }
    return (
    <div className="movie-container">
        <div className="movie-img">
            <Link to="/aboutmovies" state={movieInfo}>
                <img width="200" height="250" src={url} />
            </Link>
        </div>
        <button className='fav-btn' onClick={() => handleMovieFavorites(movies, url)}>Add as Favorite</button>
    </div>
        
    )
}