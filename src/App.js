import { Home } from './Pages/Home';
import { Movies } from './Pages/Movies';
import { NavBar } from './components/NavBar';
import { Favorites } from './Pages/Favorites';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </div>
  );
}

export default App;
