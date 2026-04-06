import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="flex justify-between px-4 py-2 border-b">
        <h2>{}Store</h2>
        <ul className="flex flex-row gap-4">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/'}>Shop</NavLink>
            <NavLink to={'/cart'}>Cart</NavLink>
        </ul>
    </header>
  )
}

export default Header