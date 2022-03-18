import { Home } from './Pages/Home';
import { Movies } from './Pages/Movies';
import { NavBar } from './components/NavBar';
import { Favorites } from './Pages/Favorites';
import { Routes, Route } from 'react-router-dom'
import { AboutMovies } from './Pages/AboutMovies';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [search, setSearch] = useState('batman')
  return (
    <div>
      <NavBar search={search} setSearch={setSearch}/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies search={search}/>}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/aboutmovies" element={<AboutMovies />}/>
      </Routes>
    </div>
  );
}

export default App;
