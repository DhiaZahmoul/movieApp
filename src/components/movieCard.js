import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ id, title, description, posterUrl, rating }) => {

  const Navigate = useNavigate();
// Movie card component to display individual movie details
  return (
    <Card style={{ width: '18rem' }} className="movie-card">
      <Card.Img variant="top" src={posterUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <h3>Rating</h3>
          <h4>{rating}</h4>
        </ListGroup.Item>
        <ListGroup.Item>
          <button onClick={() => Navigate(`/movie/${id}`)}>Watch Trailer</button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default MovieCard;