import React, { useState, useEffect } from 'react';

function App() { const [isDarkMode, setIsDarkMode] = useState(false); const [isMenuOpen, setIsMenuOpen] = useState(false); const [fotoDona, setFotoDona] = useState(''); const [vantagens, setVantagens] = useState([]);

useEffect(() => { fetch(https://jeiselashes.squareweb.app/api/conteudo) .then((res) => res.json()) .then((data) => { setFotoDona(data.fotoDona || ''); setVantagens(data.vantagens || []); }); }, []);

const toggleTheme = () => { setIsDarkMode(!isDarkMode); };

const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

return ( <div className={min-h-screen flex flex-col ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-700 text-white' : 'bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800'}}> <div className={flex justify-between items-center p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-pink-200'}}> <button onClick={toggleMenu} className="text-2xl">☰</button> </div>

{isMenuOpen && (
    <div className={`fixed top-0 right-0 w-64 h-full shadow-lg z-50 flex flex-col items-center bg-opacity-95 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <button onClick={toggleMenu} className="absolute top-4 right-6 text-3xl">✖</button>
      <ul className="space-y-6 text-center text-2xl mt-16">
        <li><a href="/modelos" onClick={toggleMenu}>Ver Modelos</a></li>
        <li><a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Agendar Horário</a></li>
        <li><a href="https://www.instagram.com/jeuusilayne.s" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Instagram</a></li>
        <li><a href="/admin" onClick={toggleMenu}>Admin</a></li>
      </ul>
    </div>
  )}

  <div className="text-center py-16 px-4">
    <h1 className="text-4xl font-bold relative inline-block px-6 py-2 border-4 rounded-lg border-pink-400">Studio Jeise Lashes</h1>
    <p className="text-lg mt-4">@jeuusilayne.s | O poder de transformar olhares! 🔥</p>
  </div>

  <div className="flex flex-col items-center py-12">
    <div className="flex justify-center gap-8">
      <a href="/modelos" className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-purple-500 hover:bg-purple-600 text-white' : 'bg-pink-500 hover:bg-pink-600 text-white'}`}>Ver Modelos</a>
      <a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-red-500 hover:bg-red-600 text-white">Agendar Horário</a>
    </div>
    <div className="flex justify-center gap-8 mt-8 px-4">
      <a href="https://maps.app.goo.gl/oSHoRZthvCkxMGuS8" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}>Ver Localização</a>
      <a href="/agendamento" className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-black text-white hover:bg-gray-800'}`}>Leia o Pré e o Pós Agendamento</a>
    </div>
  </div>

  <div className="flex flex-col items-center py-8 relative">
    {fotoDona && (
      <img src={fotoDona} alt="Foto da dona do Studio" className="w-72 h-102 object-cover rounded-lg border-4 border-pink-400 shadow-lg" />
    )}
    <div className="mt-4 text-center">
      <p className="text-5xl font-bold text-pink-800 relative" style={{ fontFamily: "'Dancing Script', cursive", textShadow: "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white" }}>Jeusilayne</p>
      <p className="text-lg uppercase tracking-widest text-pink-800 -mt-2" style={{ fontFamily: "'Playfair Display', serif", textShadow: "-0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white" }}>Lash Designer</p>
    </div>
  </div>

  <div className="py-12">
    <h2 className="text-3xl font-bold text-center mb-6">Vantagens de Fazer Extensão de Cílios</h2>
    <div className="max-w-7xl mx-auto space-y-10 px-6 sm:px-8">
      {vantagens.map((vant, index) => (
        <div key={index} className={`flex items-start gap-6 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
          <img src={vant.img} alt={`Imagem ${index + 1}`} className="w-32 h-32 rounded-md shadow-md border-2 border-pink-400" />
          <p className="text-lg">{vant.texto}</p>
          <hr className="border-t border-gray-400 opacity-30 my-4" />
        </div>
      ))}
    </div>
  </div>

  <div className="text-center py-4">
    <p className="text-sm text-gray-500">*As fotos exibidas no site foram tiradas pela própria dona do Studio, garantindo um registro autêntico da experiência.</p>
  </div>
</div>

); }

export default App;

