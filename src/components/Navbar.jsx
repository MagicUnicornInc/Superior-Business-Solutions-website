import { Link } from 'react-router-dom'
    import { useState } from 'react'
    import { HiMenu, HiX } from 'react-icons/hi'

    export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="text-2xl font-bold text-primary flex items-center">
                <span className="text-3xl mr-2">✦</span>
                Superior Business Solutions
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-primary transition duration-300">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-primary transition duration-300">About</Link>
                <Link to="/services" className="text-gray-700 hover:text-primary transition duration-300">Services</Link>
                <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300">
                  Contact Us
                </Link>
              </div>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-gray-500 hover:text-gray-900"
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden bg-white border-t">
              <Link to="/" className="block px-4 py-3 hover:bg-gray-100 transition duration-300">Home</Link>
              <Link to="/about" className="block px-4 py-3 hover:bg-gray-100 transition duration-300">About</Link>
              <Link to="/services" className="block px-4 py-3 hover:bg-gray-100 transition duration-300">Services</Link>
              <Link to="/contact" className="block px-4 py-3 bg-primary text-white hover:bg-secondary transition duration-300">Contact Us</Link>
            </div>
          )}
        </nav>
      )
    }
