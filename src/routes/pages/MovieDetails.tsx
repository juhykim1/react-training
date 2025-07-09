import { useParams } from 'react-router'
import { useState } from 'react'

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  async function fetchMovieDetails() {
    const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${movieId}`)
    const movie = await res.json()
    setMovie(movie)
  }

  return (
    <>
      <h1>Movie Details</h1>
      <h2>Movie ID: {movieId}</h2>
    </>
  )
}
