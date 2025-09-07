import React  , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router

//importing all the components and files
import './App.css';
import { movies as intitalMovies} from './movies';
import MovieList from './components/movieList';
import Filter from './components/filter';
import MovieView from './components/movieView';
//App function
function App() {
  //states
  const [search, setSearch] = useState('');
  const [rate, setRate] = useState(0);
  const [movies, setMovies] = useState(intitalMovies);
  const filteredMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      movie.rating >= rate
  );
  //returning the components with their props

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Filter search={search} setSearch={setSearch} rate={rate} setRate={setRate} movies={movies} setMovies={setMovies} />
            <MovieList movies={filteredMovies} />
          </>
        } />
        <Route path="/movie/:id" element={<MovieView movies={movies} />} />
      </Routes>
      
    </Router>
    </div>
  );
}

export default App;

