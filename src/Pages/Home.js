import '../App.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div className="App">
            <div className="title">
                <h1 style={{color: "white", margin: "0", fontSize: '60px'}}>
                Welcome To The Movie App</h1>
            </div>
            <Link to="/movies" className="link">
                Movies Section
            </Link> 
        </div>
    )
}