const Footer = () => {
  return (
    <footer className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="text-center text-white">
          <p>&copy; {new Date().getFullYear()} Thai Eats Explorer</p>
          <p>Explore the flavors of Thailand with us!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
