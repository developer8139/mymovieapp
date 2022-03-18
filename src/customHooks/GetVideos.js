import { useState } from "react"
import axios from 'axios'
const API_KEY = '208ef6e69a655dc9e5f18b04ae4dca00'

export const GetVideos = () => {
    const [video, setVideo] = useState([])

    const handleVideos = async () => {
        let videos = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        setVideo(videos)
    }

    return [video, handleVideos]
}