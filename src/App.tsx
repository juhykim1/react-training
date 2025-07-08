import { useState } from 'react'
import Container from '@/components/contexts/Container'

export default function App() {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>토글</button>
      <Container />
    </>
  )
}

// 중앙 집중식 데이터 저장소 (Store)
