import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold text-white">
            <Link to="/" className="text-white hover:underline">
              Thai Eats Explorer
            </Link>
          </div>
          <nav className="space-x-4">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <Link to="/contact" className="text-white hover:underline">
              Contact
            </Link>
            <Link to="/menus" className="text-white hover:underline">
              Menus
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
