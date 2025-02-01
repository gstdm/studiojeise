import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-all duration-300`}>
      {/* Navbar (3 Risquinhos) */}
      <div className="fixed top-0 left-0 z-10 flex justify-between items-center p-4 w-full">
        <button className="text-2xl" onClick={toggleDarkMode}>
          {darkMode ? '🌞' : '🌙'}
        </button>
        <div className="space-x-4">
          <a href="/#/modelos" className="text-lg font-medium">Ver Modelos de Cílios</a>
          <a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">Contato</a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-32 text-center bg-gradient-to-r from-pink-400 to-yellow-500">
        <h1 className="text-5xl md:text-6xl font-bold">
          Studio Jeise Lashes
        </h1>
        <p className="text-lg mt-4">
          Transforme seu olhar com cílios perfeitos, criados sob medida por Jeusilayne.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/#/modelos"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-700 transition-all duration-200 shadow-lg shadow-pink-500/30"
          >
            Ver Modelos de Cílios
          </a>
          <a
            href="https://wa.me/558988023208"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-500/30"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Imagem Base de Cílios */}
      <div className="flex justify-center py-16 bg-gradient-to-l from-pink-200 to-yellow-200">
        <img
          src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
          alt="Cílios"
          className="w-1/2 mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Vantagens de Fazer Cílios */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Vantagens de Fazer Cílios</h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <span className="text-4xl text-pink-600">🌟</span>
            <p className="text-lg">Aumente sua autoestima com um olhar marcante, realçando sua beleza natural.</p>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-4xl text-pink-600">✨</span>
            <p className="text-lg">Praticidade no seu dia a dia, sem precisar de máscara de cílios ou curvex.</p>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-4xl text-pink-600">💖</span>
            <p className="text-lg">Sinta-se confiante com cílios volumosos, longos e naturais.</p>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-4xl text-pink-600">👁️</span>
            <p className="text-lg">Realce seu olhar com diferentes estilos que combinam com sua personalidade.</p>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-4xl text-pink-600">💅</span>
            <p className="text-lg">Cílios de alta qualidade que garantem durabilidade e conforto.</p>
          </li>
        </ul>
      </div>

      {/* Footer (Detalhes de Contato) */}
      <footer className="bg-gradient-to-r from-pink-400 to-yellow-500 py-8 text-center">
        <p className="text-lg font-medium">Entre em contato para mais informações e agendamentos!</p>
        <a
          href="https://wa.me/558988023208"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-500/30"
        >
          Fale Conosco
        </a>
      </footer>
    </div>
  );
}

export default App;
