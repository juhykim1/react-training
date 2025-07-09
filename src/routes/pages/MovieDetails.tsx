import { useParams } from 'react-router'

// http://localhost:5173/movies/tt0076759
// http://localhost:5173/movies/abc123

export default function MovieDetails() {
  const { movieId } = useParams()
  return (
    <>
      <h1>Movie Details</h1>
      <h2>Movie ID: {movieId}</h2>
    </>
  )
}
