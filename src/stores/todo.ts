import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

type Todos = Todo[] // 할 일 목록
interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

export const useTodoStore = create(
  combine(
    {
      todos: [] as Todos
    },
    () => {
      return {
        fetchTodos: async () => {
          const { data } = await axios({
            url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              apikey: import.meta.env.VITE_APIKEY,
              username: import.meta.env.VITE_USERNAME
            }
          })
          console.log(data)
        }
      }
    }
  )
)
