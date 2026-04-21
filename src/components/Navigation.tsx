import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigationLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Our Products' },
  ];

  // Force dark styling on homepage for transparent look
  const isHomepage = location.pathname === '/';
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center md:static md:translate-x-0"
        >
          <img 
            src="/uploads/c.png" 
            alt="Nutrizenix" 
            className="w-32 md:w-32 h-auto object-contain animate-none transition-none drop-shadow-[0_0_22px_rgba(255,255,255,0.95)]" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-black/30 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/10 space-x-2 absolute left-1/2 transform -translate-x-1/2">
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === link.to
                  ? 'bg-orange-300 text-black'
                  : 'text-white hover:text-orange-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
              location.pathname === '/contact'
                ? 'bg-orange-300 text-black'
                : 'text-white hover:text-orange-300'
            }`}
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <Menu />
            </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20">
          <div className="p-4 space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-white text-lg font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-white text-lg font-medium py-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
