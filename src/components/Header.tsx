import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' }
]

export default function Header() {
  return (
    <header>
      <nav>
        {navigations.map(nav => {
          return (
            <NavLink
              to={nav.to}
              className={({ isActive }) => {
                return isActive ? 'text-red-500' : 'text-black'
              }}>
              {nav.label}
            </NavLink>
          )
        })}
      </nav>
    </header>
  )
}
