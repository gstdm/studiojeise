import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-beige-200 to-beige-400 text-gray-800'}`}>
      {/* Barra de Modo Claro / Escuro */}
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl font-semibold">Studio Jeise Lashes</div>
        <button onClick={toggleTheme} className="text-2xl">
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Título e Subtítulo */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold">Studio Jeise Lashes</h1>
        <p className="text-lg mt-4">@jeuusilayne.s | O poder de transformar olhares! 🔥</p>
      </div>

      {/* Botões */}
      <div className="flex justify-center gap-8 py-8">
        <a
          href="/#/modelos"
          className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-pink-500 hover:bg-pink-600 text-white'}`}
        >
          Ver Modelos
        </a>
        <a
          href="https://wa.me/558988023208"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
        >
          Agendar Horário
        </a>
      </div>

      {/* Foto */}
      <div className="flex justify-center py-8">
        <img
          src="https://via.placeholder.com/300"
          alt="Foto da dona do Studio"
          className="w-72 h-72 object-cover rounded-lg border-4 border-gray-400"
        />
      </div>

      {/* Vantagens de Fazer Cílios */}
      <div className="py-12 bg-pink-100">
        <h2 className="text-3xl font-bold text-center mb-6">Vantagens de Fazer Extensão de Cílios</h2>
        <div className="max-w-7xl mx-auto space-y-6 px-6 sm:px-8">
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
          className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default App;
