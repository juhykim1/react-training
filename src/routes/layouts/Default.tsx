import { useOutlet, ScrollRestoration } from 'react-router'
import Header from '@/components/Header'

export default function Default() {
  const outlet = useOutlet()
  return (
    <>
      <Header />
      {outlet}
      <ScrollRestoration />
    </>
  )
}
