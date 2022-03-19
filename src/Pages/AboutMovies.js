import {useLocation} from 'react-router-dom'
import '../styles/about.css'


export const AboutMovies = () => {
    const location = useLocation();
    const data = location.state
    
    return (
        <div className="movie-profile">
            <section className="movie-section">
                <div className="movie-container2">
                    <div className="holder">
                        <img className="image-info" src={data.pic}/>
                    </div>
                </div>
                <div className="movie-info">
                    <h2 style={{color: "white"}}>{data.title}</h2>
                    <p style={{color: "white"}}>{data.overview}</p>
                    <span style={{color: "white"}}>Release Date:</span>
                    <span style={{color: "white"}}>{data.date}</span>
                </div>
            </section>
        </div>
    )
}