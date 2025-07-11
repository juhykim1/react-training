import { useState, useRef, useEffect } from 'react'
import type { Todo } from '@/stores/todo'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import { useTodoStore } from '@/stores/todo'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement>(null)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const isLoadingForUpdate = useTodoStore(state => state.isLoadingForUpdate)

  useEffect(() => {
    if (isEditing) inputRef.current?.focus()
  }, [isEditing])

  function onEditMode() {
    setIsEditing(true)
  }
  function offEditMode() {
    setIsEditing(false)
    setTitle(todo.title)
  }
  async function handleSave() {
    if (title === todo.title) return
    await updateTodo({
      ...todo,
      title
    })
    offEditMode()
  }

  return (
    <li className="mt-2">
      {isEditing ? (
        // 수정 모드
        <div className="grid grid-cols-[1fr_100px_100px_100px] items-center gap-2">
          <TextField
            ref={inputRef}
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              if (e.nativeEvent.isComposing) return
              if (e.key === 'Escape') offEditMode()
              if (e.key === 'Enter') handleSave()
            }}
          />
          <Button
            variant="secondary"
            onClick={() => offEditMode()}>
            취소
          </Button>
          <Button
            variant="primary"
            loading={isLoadingForUpdate}
            onClick={() => handleSave()}>
            저장
          </Button>
          <Button variant="danger">삭제</Button>
        </div>
      ) : (
        // 출력 모드
        <div className="grid grid-cols-[20px_1fr_100px] items-center gap-2 leading-[1]">
          <input
            type="checkbox"
            className="h-4 w-4 accent-blue-500"
          />
          <h3>{todo.title}</h3>
          <Button
            variant="primary"
            onClick={() => onEditMode()}>
            수정
          </Button>
        </div>
      )}
    </li>
  )
}
