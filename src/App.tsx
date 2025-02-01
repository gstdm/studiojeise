import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-pink-100 to-pink-300 text-gray-900'} min-h-screen transition-all duration-300`}>
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
      <div className="py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Studio Jeise Lashes
        </h1>
        <p className="text-lg mb-4">
          @jeuusilayne.s | O poder de transformar olhares!🔥
        </p>

        <div className="flex justify-center items-center space-x-8">
          <div className="text-left w-1/2">
            <p className="text-sm">
              Transforme seu olhar com cílios perfeitamente desenhados, feitos para realçar a beleza única de cada pessoa. No Studio Jeise Lashes, oferecemos designs exclusivos que são cuidadosamente adaptados ao seu estilo e personalidade.
            </p>
          </div>
          <div className="w-1/3">
            <img
              src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
              alt="Dona do Studio"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Imagem Base de Cílios */}
      <div className="flex justify-center py-16">
        <img
          src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
          alt="Cílios"
          className="w-1/2 mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Vantagens de Fazer Cílios */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Vantagens de Fazer Cílios</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <img src="https://via.placeholder.com/150" alt="Imagem 1" className="w-32 h-32 rounded-md shadow-md" />
            <p className="text-lg w-full">Aumente sua autoestima com um olhar marcante, realçando sua beleza natural.</p>
          </div>
          <div className="flex items-start gap-4 flex-row-reverse">
            <img src="https://via.placeholder.com/150" alt="Imagem 2" className="w-32 h-32 rounded-md shadow-md" />
            <p className="text-lg w-full">Praticidade no seu dia a dia, sem precisar de máscara de cílios ou curvex.</p>
          </div>
          <div className="flex items-start gap-4">
            <img src="https://via.placeholder.com/150" alt="Imagem 3" className="w-32 h-32 rounded-md shadow-md" />
            <p className="text-lg w-full">Sinta-se confiante com cílios volumosos, longos e naturais.</p>
          </div>
          <div className="flex items-start gap-4 flex-row-reverse">
            <img src="https://via.placeholder.com/150" alt="Imagem 4" className="w-32 h-32 rounded-md shadow-md" />
            <p className="text-lg w-full">Realce seu olhar com diferentes estilos que combinam com sua personalidade.</p>
          </div>
          <div className="flex items-start gap-4">
            <img src="https://via.placeholder.com/150" alt="Imagem 5" className="w-32 h-32 rounded-md shadow-md" />
            <p className="text-lg w-full">Cílios de alta qualidade que garantem durabilidade e conforto.</p>
          </div>
        </div>
      </div>

      {/* Footer (Detalhes de Contato) */}
      <footer className="py-8 text-center bg-gradient-to-r from-pink-400 to-yellow-500">
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
        
