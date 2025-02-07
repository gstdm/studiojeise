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
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Menu Lateral */}
      {isMenuOpen && (
        <div className={`fixed top-0 right-0 w-64 h-full shadow-lg z-50 flex flex-col items-center bg-opacity-95 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <button onClick={toggleMenu} className="absolute top-4 right-6 text-3xl">
            ✖
          </button>
          <ul className="space-y-6 text-center text-2xl mt-16">
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

      {/* Botões principais */}
      <div className="flex flex-col items-center py-12">
        <div className="flex justify-center gap-8">
          <a href="/#/modelos" className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-purple-500 hover:bg-purple-600 text-white' : 'bg-pink-500 hover:bg-pink-600 text-white'}`}>
            Ver Modelos
          </a>
          <a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-red-500 hover:bg-red-600 text-white">
            Agendar Horário
          </a>
        </div>

        {/* Botão Ver Localização */}
        <div className="py-8">
          <a href="https://maps.app.goo.gl/oSHoRZthvCkxMGuS8" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
            Ver Localização
          </a>
        </div>

{/* Contêiner principal para organizar os elementos */}
<div className="flex flex-col items-center py-8 relative">

  {/* Espaço extra para o texto antes da foto */}
  <div className="mb-4 text-center">
    {/* Nome "Jeusilayne" em cursivo com borda */}
    <p 
      className="text-5xl font-bold text-white relative"
      style={{
        fontFamily: "'Dancing Script', cursive",
        WebkitTextStroke: "1px #ff69b4", // Borda rosa forte para destacar
        textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)" // Sombra suave
      }}
    >
      Jeusilayne
    </p>

    {/* Texto "Lash Designer" abaixo, mais refinado */}
    <p 
      className="text-lg uppercase tracking-widest text-white -mt-2"
      style={{
        fontFamily: "'Playfair Display', serif",
        WebkitTextStroke: "0.8px #ff69b4", // Mesma borda rosa
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)" // Sombra suave
      }}
    >
      Lash Designer
    </p>
  </div>

  {/* Imagem da dona do Studio */}
  <img 
    src="https://i.ibb.co/v4srFYNS/IMG-20250206-115702.jpg" 
    alt="Foto da dona do Studio" 
    className="w-72 h-102 object-cover rounded-lg border-4 border-pink-400 shadow-lg"
  />
</div>
</div>

      {/* Seção de Vantagens */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Vantagens de Fazer Extensão de Cílios</h2>
        <div className="max-w-7xl mx-auto space-y-10 px-6 sm:px-8">
          
          {/* Vantagem 1 */}
          <div className="flex items-start gap-6">
            <img src="https://i.ibb.co/5hHjyXSV/Screenshot-20250203-185948.jpg" alt="Imagem 1" className="w-32 h-32 rounded-md shadow-md border-2 border-pink-400" />
            <p className="text-lg">Aumento da autoestima, proporcionando um olhar marcante e impactante, ideal para quem busca realçar a beleza natural.</p>
          </div>
          <hr className="border-t border-gray-400 opacity-30 my-4" />

          {/* Vantagem 2 */}
          <div className="flex items-start gap-6 flex-row-reverse">
            <img src="https://i.ibb.co/LzRmNpXT/Screenshot-20250206-080616.jpg" alt="Imagem 2" className="w-32 h-32 rounded-md shadow-md border-2 border-pink-400" />
            <p className="text-lg">Praticidade no dia a dia, dispensando a necessidade de maquiagem diária, economizando tempo na rotina de beleza.</p>
          </div>
          <hr className="border-t border-gray-400 opacity-30 my-4" />

          {/* Vantagem 3 */}
          <div className="flex items-start gap-6">
            <img src="https://i.ibb.co/Mx3jXXGr/Screenshot-20250203-202443.jpg" alt="Imagem 3" className="w-32 h-32 rounded-md shadow-md border-2 border-pink-400" />
            <p className="text-lg">Olhar naturalmente volumoso e alongado, com cílios de alta qualidade, proporcionando um efeito deslumbrante.</p>
          </div>
          <hr className="border-t border-gray-400 opacity-30 my-4" />

          {/* Vantagem 4 */}
          <div className="flex items-start gap-6 flex-row-reverse">
            <img src="https://i.ibb.co/mrdV0dRr/Screenshot-20250203-185955.jpg" alt="Imagem 4" className="w-32 h-32 rounded-md shadow-md border-2 border-pink-400" />
            <p className="text-lg">Resultados duradouros, com manutenção periódica que mantém o visual sempre perfeito.</p>
          </div>
          
        </div>
      </div>

      {/* Frase sobre as fotos */}
      <div className="text-center py-4">
        <p className="text-sm text-gray-500">*As fotos exibidas no site foram tiradas pela própria dona do Studio, garantindo um registro autêntico da experiência.</p>
      </div>

      {/* Botão Pré e Pós Agendamento */}
      <div className="py-8 flex justify-center">
        <a href="/#" className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-black text-white hover:bg-gray-800'}`}>
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default App;
