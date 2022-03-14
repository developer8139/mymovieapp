import '../App.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div className="App">
            <motion.div initial={{scale: 0}} animate={{scale: 1.1}} transition={{ duration: 3}} className="title">
                <h1 style={{color: "white", margin: "0"}}>
                Welcome To The Movie App</h1>
            </motion.div>
            <Link to="/movies" className="link">
                Movies Section
            </Link> 
        </div>
    )
}