import { create } from 'zustand'
import { combine } from 'zustand/middleware'

interface Movie {
  imdbID: string
  Title: string
}

export const useMovieStore = create(
  combine(
    {
      movies: [] as Movie[]
    },
    set => {
      return {
        fetchMovies: async () => {
          const res = await fetch(
            `https://omdbapi.com?apikey=7035c60c&s=batman`
          )
          const { Search } = await res.json()
          set({
            movies: Search
          })
        }
      }
    }
  )
)
