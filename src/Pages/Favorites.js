import axios from "axios";
import { useEffect, useState } from "react";


export const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(function() {
        axios.get('http://localhost:8000/movie').then(data => {
            let movie = JSON.parse(data);
            setFavorites([...favorites, movie])
        })
    }, [favorites])
    return (
        <div style={{backgroundColor: 'black', height: "100vh"}}>
            {favorites.length > 0 ? favorites.map(fav => <li style={{color: "white"}}>{fav.title}</li>) : null}
        </div>
    )
}