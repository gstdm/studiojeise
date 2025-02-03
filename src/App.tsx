import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? 'bg-gray-800 text-white'
          : 'bg-cover bg-center text-gray-800'
      }`}
      style={{
        backgroundImage: isDarkMode
          ? 'url(https://cdn.iset.io/assets/55268/produtos/52861/papel-de-parede-marmore-rose-e-dourado05.jpg)'
          : 'https://cdn.iset.io/assets/55268/produtos/52861/papel-de-parede-marmore-rose-e-dourado05.jpg',
      }}
    >
      {/* Barra de Navegação */}
      <div className={`flex justify-between items-center p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white bg-opacity-80'}`}>
        <button onClick={toggleTheme} className="text-2xl">
          {isDarkMode ? '🌙' : '☀️'}
        </button>
        <div className="flex gap-6">
          <button onClick={toggleMenu} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Menu Lateral */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-64 bg-white text-gray-800 shadow-md h-full p-6">
          <ul className="space-y-6">
            <li>
              <a href="/#/modelos" className="text-xl">Ver Modelos</a>
            </li>
            <li>
              <a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer" className="text-xl">Agendar Horário</a>
            </li>
            <li>
              <a href="https://www.instagram.com/jeuusilayne.s" target="_blank" rel="noopener noreferrer" className="text-xl">Instagram</a>
            </li>
            <li>
              <a href="/#/historia" className="text-xl">História</a>
            </li>
          </ul>
        </div>
      )}

      {/* Conteúdo Principal */}
      <div className="text-center py-16 px-4">
        <div className="inline-block border-4 border-pink-500 px-6 py-2 rounded-lg">
          <h1 className="text-4xl font-bold">Studio Jeise Lashes</h1>
        </div>
        <p className="text-lg mt-4">@jeuusilayne.s | O poder de transformar olhares! 🔥</p>
      </div>

      {/* Botões */}
      <div className="flex justify-center gap-8 py-8">
        <a
          href="/#/modelos"
          className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${
            isDarkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-pink-500 hover:bg-pink-600 text-white'
          }`}
        >
          Ver Modelos
        </a>
        <a
          href="https://wa.me/558988023208"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-red-500 hover:bg-red-600 text-white"
        >
          Agendar Horário
        </a>
      </div>

      {/* Foto da Dona do Studio */}
      <div className="flex justify-center py-8">
        <img
          src="https://via.placeholder.com/300"
          alt="Foto da dona do Studio"
          className="w-72 h-72 object-cover rounded-lg border-4 border-gray-400"
        />
      </div>

      {/* Vantagens de Fazer Cílios */}
      <div className="py-12" style={{ backgroundColor: isDarkMode ? '#222222' : '#f5d0d0' }}>
        <h2 className="text-3xl font-bold text-center mb-6">Vantagens de Fazer Extensão de Cílios</h2>
        <div className="max-w-7xl mx-auto space-y-12 px-6 sm:px-8">
          <div className="flex items-start gap-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Imagem 1"
              className="w-32 h-32 rounded-md shadow-md"
            />
            <p className="text-lg">
              Aumento da autoestima, proporcionando um olhar marcante e impactante, ideal para quem busca realçar a beleza natural.
            </p>
          </div>
          <div className="flex items-start gap-6 flex-row-reverse">
            <img
              src="https://via.placeholder.com/150"
              alt="Imagem 2"
              className="w-32 h-32 rounded-md shadow-md"
            />
            <p className="text-lg">
              Praticidade no dia a dia, dispensando a necessidade de maquiagem diária, economizando tempo na rotina de beleza.
            </p>
          </div>
          <div className="flex items-start gap-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Imagem 3"
              className="w-32 h-32 rounded-md shadow-md"
            />
            <p className="text-lg">
              Olhar naturalmente volumoso e alongado, com cílios de alta qualidade, proporcionando um efeito deslumbrante.
            </p>
          </div>
          <div className="flex items-start gap-6 flex-row-reverse">
            <img
              src="https://via.placeholder.com/150"
              alt="Imagem 4"
              className="w-32 h-32 rounded-md shadow-md"
            />
            <p className="text-lg">
              Resultados duradouros, com manutenção periódica que mantém o visual sempre perfeito.
            </p>
          </div>
        </div>
      </div>

      {/* Frase sobre as fotos */}
      <div className="text-center py-4">
        <p className="text-sm text-gray-500">
          *As fotos exibidas no site foram tiradas pela própria dona do Studio, garantindo um registro autêntico da experiência.
        </p>
      </div>

      {/* Botão Pré e Pós Agendamento */}
      <div className="flex justify-center py-8">
        <a
          href="/#"
          className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${
            isDarkMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default App;
