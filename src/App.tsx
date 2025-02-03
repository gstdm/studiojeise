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
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-700 text-white' : 'bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800'}`}>
      {/* Barra de Navegação */}
      <div className={`flex justify-between items-center p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-pink-200'}`}>
        <button onClick={toggleTheme} className="text-2xl">
          {isDarkMode ? '🌙' : '☀️'}
        </button>
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Menu Lateral (agora cobre tudo quando aberto) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-4 right-6 text-3xl">
            ✖
          </button>
          <ul className="space-y-6 text-center text-2xl">
            <li><a href="/#/modelos">Ver Modelos</a></li>
            <li><a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer">Agendar Horário</a></li>
            <li><a href="https://www.instagram.com/jeuusilayne.s" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="/#/historia">História</a></li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold relative inline-block px-6 py-2 border-4 rounded-lg border-pink-400">
          Studio Jeise Lashes
        </h1>
        <p className="text-lg mt-4">@jeuusilayne.s | O poder de transformar olhares! 🔥</p>
      </div>

      {/* Conteúdo principal (mantido) */}
      <div className="flex flex-col items-center py-12">
        <div className="flex justify-center gap-8">
          <a href="/#/modelos" className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-purple-500 hover:bg-purple-600 text-white' : 'bg-pink-500 hover:bg-pink-600 text-white'}`}>
            Ver Modelos
          </a>
          <a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-red-500 hover:bg-red-600 text-white">
            Agendar Horário
          </a>
        </div>

        <div className="flex justify-center py-8">
          <img src="https://via.placeholder.com/300" alt="Foto da dona do Studio" className="w-72 h-72 object-cover rounded-lg border-4 border-pink-400 shadow-lg" />
        </div>
      </div>

      {/* Seção de Vantagens (mantida) */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Vantagens de Fazer Extensão de Cílios</h2>
        <div className="max-w-7xl mx-auto space-y-12 px-6 sm:px-8">
          <div className="flex items-start gap-6">
            <img src="https://i.ibb.co/5hHjyXSV/Screenshot-20250203-185948.jpg" alt="Imagem 1" className="w-32 h-32 rounded-md shadow-md" />
            <p className="text-lg">Aumento da autoestima, proporcionando um olhar marcante e impactante, ideal para quem busca realçar a beleza natural.</p>
          </div>
          <div className="flex items-start gap-6 flex-row-reverse">
            <img src="https://i.ibb.co/twFL5p5W/Screenshot-20250203-190009.jpg" alt="Imagem 2" className="w-32 h-32 rounded-md shadow-md" />
            <p className="text-lg">Praticidade no dia a dia, dispensando a necessidade de maquiagem diária, economizando tempo na rotina de beleza.</p>
          </div>
          <div className="flex items-start gap-6">
            <img src="https://i.ibb.co/6c12TDzL/Screenshot-20250203-190002.jpg" alt="Imagem 3" className="w-32 h-32 rounded-md shadow-md" />
            <p className="text-lg">Olhar naturalmente volumoso e alongado, com cílios de alta qualidade, proporcionando um efeito deslumbrante.</p>
          </div>
          <div className="flex items-start gap-6 flex-row-reverse">
            <img src="https://i.ibb.co/mrdV0dRr/Screenshot-20250203-185955.jpg" alt="Imagem 4" className="w-32 h-32 rounded-md shadow-md" />
            <p className="text-lg">Resultados duradouros, com manutenção periódica que mantém o visual sempre perfeito.</p>
          </div>
        </div>
      </div>

      {/* Frase sobre as fotos */}
      <div className="text-center py-4">
        <p className="text-sm text-gray-500">*As fotos exibidas no site foram tiradas pela própria dona do Studio, garantindo um registro autêntico da experiência.</p>
      </div>

      {/* Botão Pré e Pós Agendamento (mantido no gradiente único) */}
      <div className="py-8 flex justify-center">
        <a href="/#" className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-black text-white hover:bg-gray-800'}`}>
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default App;
