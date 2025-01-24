import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Bot className="w-8 h-8 text-blue-400" />
            <span className="text-white font-bold text-xl">Dallas - Bot</span>
          </Link>
          
          {/* Menu for larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/comandos" className="text-gray-300 hover:text-white transition-colors">
              Comandos
            </Link>
            <Link to="/planos" className="text-gray-300 hover:text-white transition-colors">
              Planos
            </Link>
            <Link to="/planospv" className="text-gray-300 hover:text-white transition-colors">
              Planos Privado
            </Link>
            <a href="https://api.whatsapp.com/send?phone=558981385908&text=Ol%C3%A1,%20preciso%20de%20suporte" className="text-gray-300 hover:text-white transition-colors">
              Suporte
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <Link
              to="/"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/comandos"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Comandos
            </Link>
            <Link
              to="/planos"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </Link>
            <Link
              to="/planospv"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos Privado
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=558981385908&text=Ol%C3%A1,%20preciso%20de%20suporte"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Suporte
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
