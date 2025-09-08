import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wrench, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import autoFirstLogo from '../images/auto first.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={autoFirstLogo}
              alt="Auto First Logo"
              className="h-28 w-28 rounded-lg object-contain"
            />
            <div>
              {/* <span className="text-xl font-bold text-blue-800">Auto First</span>
              <span className="text-sm text-gray-600 block -mt-1">Mechanical Aid</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 font-medium ${
                  location.pathname === item.path
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/cart"
              className={`relative transition-colors duration-200 font-medium ${
                location.pathname === '/cart'
                  ? 'text-red-600'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              to="/book"
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Book Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4 border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between mx-4 px-4 py-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                <span className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                </span>
                {totalItems > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="block mx-4 text-center bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Book Service
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;