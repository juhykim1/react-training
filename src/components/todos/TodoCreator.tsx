import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useTodoStore } from '@/stores/todo'

export default function TodoCreator() {
  const [title, setTitle] = useState('')
  const createTodo = useTodoStore(state => state.createTodo)

  // function handleCreateTodo() {

  // }

  return (
    <div>
      <TextField
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') createTodo(title)
        }}
      />
      <Button onClick={() => createTodo(title)}>추가</Button>
    </div>
  )
}
