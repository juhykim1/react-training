import { redirect } from 'react-router'

export async function requiresAuth() {
  // 로그인 여부 확인
  const token = localStorage.getItem('token')
  if (token) return
  return redirect('/signin')
}
