import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-red-500 text-gray-900"
      } flex flex-col`}
    >
      {/* Barra de navegação */}
      <div className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between p-4 z-10">
        <div>
          <button
            onClick={toggleTheme}
            className="text-2xl p-2 focus:outline-none"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
        <div>
          <button
            onClick={toggleMenu}
            className={`text-xl p-2 focus:outline-none rounded-full ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-16 w-2/3 bg-gray-800 text-white py-4 px-6 z-20">
          <ul>
            <li className="mb-4">
              <Link to="/#/modelos" className="text-lg">
                Ver Modelos
              </Link>
            </li>
            <li className="mb-4">
              <a
                href="https://wa.me/558988023208"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                Agendar Horário
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://www.instagram.com/jeuusilayne.s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                Instagram
              </a>
            </li>
            <li className="mb-4">
              <Link to="/#/historia" className="text-lg">
                História
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex-grow text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Studio Jeise Lashes</h1>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
          @jeuusilayne.s | O poder de transformar olhares! 🔥
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <Link
            to="/#/modelos"
            className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Ver Modelos
          </Link>
          <a
            href="https://wa.me/558988023208"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
          >
            Agendar Horário
          </a>
        </div>
      </div>

      {/* Foto da dona */}
      <div className="text-center mt-12">
        <img
          src="https://via.placeholder.com/150"
          alt="Foto da Dona"
          className="w-36 h-36 mx-auto mb-4 border-4 border-black"
        />
      </div>

      {/* Vantagens */}
      <div className="text-center py-12 bg-pink-100">
        <h2 className="text-3xl font-semibold text-pink-600">Vantagens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-black mb-4"></div>
            <p className="text-lg text-gray-800">Extensão de cílios duradoura.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-black mb-4"></div>
            <p className="text-lg text-gray-800">Olhar natural e encantador.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-black mb-4"></div>
            <p className="text-lg text-gray-800">Técnicas modernas e eficazes.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-black mb-4"></div>
            <p className="text-lg text-gray-800">Consultoria personalizada.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-black mb-4"></div>
            <p className="text-lg text-gray-800">Atendimento confortável e exclusivo.</p>
          </div>
        </div>
      </div>

      {/* Botão Pré e Pós Agendamento */}
      <div className="text-center py-8">
        <a
          href="#"
          className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Leia o Pré e o Pós Agendamento
        </a>
      </div>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-12">
        <p>© 2025 Studio Jeise Lashes - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
