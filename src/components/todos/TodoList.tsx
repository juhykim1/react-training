import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import Loader from '@/components/Loader'

export default function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const isLoadingForFetch = useTodoStore(state => state.isLoadingForFetch)
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  useEffect(() => {
    fetchTodos()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {isLoadingForFetch && <Loader size={100} />}
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    </>
  )
}
