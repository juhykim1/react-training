import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useTodoStore = create(
  combine(
    {
      todos: []
    },
    () => {
      return {}
    }
  )
)
