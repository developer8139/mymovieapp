import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/favorites.css'


export const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(function() {
        axios.get('http://localhost:9356/movies').then(data => {
            setFavorites(data.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])


    const handleDeleteMovie = async (title) => {
        let removed = await axios.delete('http://localhost:9356/deletemovie', {
           data: {
               title: title
           }
        }).catch(e => {
            console.log(e)
        })
        let newFavs = favorites.filter(movie => movie.title !== title)
        setFavorites(newFavs)
    }
    return (
        <div>
        <ul>
            {favorites.length > 0 ? favorites.map(fav => 
            <li className="favorites-list" >
                <img height="260" width="200" src={fav.poster} />
                <h1 className="favorites-title">{fav.title}</h1>
                <button onClick={() => handleDeleteMovie(fav.title)}>Delete Movie</button>
            </li>
            ) 
            : <h2 className="no-favorites" >Currently you have no favorites...</h2>}
        </ul>
        </div>
    )
}