import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group relative">
          <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-150 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src="/uploads/c.png" 
            alt="Nutrizenix" 
            className="w-24 md:w-32 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] relative z-10" 
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
        <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-orange-300 text-black px-4 py-2 rounded-full font-medium hover:bg-orange-400 transition-colors text-xs"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10"
          >
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
                className="block text-orange-300 text-lg font-medium py-2"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
