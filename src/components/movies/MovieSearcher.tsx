import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useMovieStore } from '@/stores/movie'

export default function MovieSearcher() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  return (
    <div>
      <TextField
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') fetchMovies()
        }}
      />
      <Button onClick={fetchMovies}>검색</Button>
    </div>
  )
}
