import React, { useState } from 'react'
import AddMovie from './addMovie'

const Filter = (props) => {
    // State to control the visibility of the AddMovie component
  const [showAdd, setShowAdd] = useState(false)

  const handleAddMovie = () => {
    setShowAdd(true)
  }
// Function to close the AddMovie component
  const handleCloseAdd = () => {
    setShowAdd(false)
  }

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }} className="filter">
      <input
        type="text"
        placeholder="search for a movie..."
        value={props.search}
        onChange={e => props.setSearch(e.target.value)}
      />
      <select value={props.rate} onChange={e => props.setRate(Number(e.target.value))}>
        {[0, 1, 2, 3, 4, 5].map(val => (
          <option key={val} value={val}>{val}</option>
        ))}
      </select>
      <button type="button" onClick={handleAddMovie}>Add Movie</button>
      {showAdd && <AddMovie onClose={handleCloseAdd} movies={props.movies} setMovies={props.setMovies} />}
    </div>
  )
}

export default Filter