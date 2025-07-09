import { createRoot } from 'react-dom/client'
import './index.css'
import Router from '@/routes'
import Header from '@/components/Header'

createRoot(document.getElementById('root')!).render(
  <>
    <Header />
    <Router />
  </>
)
