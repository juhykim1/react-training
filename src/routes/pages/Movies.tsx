import MovieSearcher from '@/components/movies/MovieSearcher'
import MovieList from '@/components/movies/MovieList'

export default function Movies() {
  return (
    <main className="mx-auto max-w-[1200px] p-4">
      <MovieSearcher />
      <MovieList />
    </main>
  )
}
