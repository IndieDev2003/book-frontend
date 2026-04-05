function Header() {
  return (
    <header className="flex justify-between px-4 py-2 border-b">
        <h2>{}Store</h2>
        <ul className="flex flex-row gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Cart</li>
        </ul>
    </header>
  )
}

export default Header