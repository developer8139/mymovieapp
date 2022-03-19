import { useState } from "react"
import axios from 'axios'


export const GetVideos = () => {
    const [video, setVideo] = useState([])

    const handleVideos = async () => {
        let videos = await axios.get(`http://localhost:9356/currentlytrending`);
        setVideo(videos)
    }

    return [video, handleVideos]
}