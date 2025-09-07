import React, { useState } from 'react'

const AddMovie = (props) => {
    // State variables for movie details
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [posterUrl, setPosterUrl] = useState('')
  const [rating, setRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = { title, description, posterUrl, rating }
    props.setMovies([...props.movies, newMovie])
    if (props.onClose) props.onClose()
    // Optionally reset fields
    setTitle('')
    setDescription('')
    setPosterUrl('')
    setRating(0)
  }

  return (
    // Simple form for adding a movie
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="text" placeholder="Poster URL" value={posterUrl} onChange={e => setPosterUrl(e.target.value)} />
        <input type="number" placeholder="Rating" value={rating} onChange={e => setRating(Number(e.target.value))} min="0" max="5" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

export default AddMovie