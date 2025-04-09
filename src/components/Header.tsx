import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="src/Me.jpg" 
              alt="Abreham Tadesse" 
              className="w-16 h-16 rounded-full border-2 border-white object-cover"
            />
            <span className="font-medium text-xl">Abreham Tadesse</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;