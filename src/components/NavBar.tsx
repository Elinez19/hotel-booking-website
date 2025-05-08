import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import Logo from '../assets/logo';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-navy-900 shadow-lg' : 'bg-navy-900/90'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-white hover:text-orange-500 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-white hover:text-orange-500 transition-colors font-medium">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-white hover:text-orange-500 transition-colors font-medium">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-white hover:text-orange-500 transition-colors font-medium">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-orange-500 transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/account" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:bg-navy-800 transition-colors"
            >
              <User className="mr-2 h-4 w-4" />
              Account
            </Link>
            <Link 
              to="/register" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors"
            >
              Register
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-white font-medium hover:bg-navy-800 rounded-md">
              Home
            </Link>
            <Link to="/hotels" className="block px-3 py-2 text-white font-medium hover:bg-navy-800 rounded-md">
              Hotels
            </Link>
            <Link to="/rooms" className="block px-3 py-2 text-white font-medium hover:bg-navy-800 rounded-md">
              Rooms
            </Link>
            <Link to="/destinations" className="block px-3 py-2 text-white font-medium hover:bg-navy-800 rounded-md">
              Destinations
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-white font-medium hover:bg-navy-800 rounded-md">
              Contact
            </Link>
            <Link to="/account" className="block px-3 py-2 text-white font-medium hover:bg-navy-800 rounded-md">
              Account
            </Link>
            <Link to="/register" className="block px-3 py-2 bg-orange-500 text-white font-medium hover:bg-orange-600 rounded-md">
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;