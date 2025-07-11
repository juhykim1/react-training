import { useState } from 'react'
import type { Todo } from '@/stores/todo'
import Button from '@/components/Button'
import TextField from '@/components/TextField'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)

  return (
    <li className="mt-2">
      {isEditing ? (
        // 수정 모드
        <div className="grid grid-cols-[1fr_100px_100px_100px] items-center gap-2">
          <TextField
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Escape') setIsEditing(false)
            }}
          />
          <Button
            variant="secondary"
            onClick={() => setIsEditing(false)}>
            취소
          </Button>
          <Button variant="primary">저장</Button>
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
            onClick={() => setIsEditing(true)}>
            수정
          </Button>
        </div>
      )}
    </li>
  )
}
