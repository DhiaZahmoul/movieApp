import React  , {useState} from 'react';
//importing all the components and files
import './App.css';
import { movies as intitalMovies} from './movies';
import MovieList from './components/movieList';
import Filter from './components/filter';
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
      <Filter search={search} setSearch={setSearch} rate={rate} setRate={setRate} movies={movies} setMovies={setMovies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

