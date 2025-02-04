import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Modelos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800">
      
      {/* Barra de Navegação */}
      <div className="flex justify-between items-center p-4 bg-pink-200 shadow-md">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <button onClick={toggleMenu} className="text-2xl">☰</button>
      </div>

      {/* Menu Lateral */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full shadow-lg z-50 flex flex-col items-center bg-white bg-opacity-95">
          <button onClick={toggleMenu} className="absolute top-4 right-6 text-3xl">✖</button>
          <ul className="space-y-6 text-center text-2xl mt-16">
            <li className="text-blue-600 text-3xl font-bold">Ver Modelos</li>
            <li><a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer">Agendar Horário</a></li>
            <li><a href="https://www.instagram.com/jeuusilayne.s" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="/#/historia">História</a></li>
            <li><a href="/#/">Tela Inicial</a></li>
          </ul>
        </div>
      )}

      {/* Título */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold">Modelos de Cílios</h1>
      </div>

      {/* Modelos */}
      <div className="max-w-7xl mx-auto space-y-10 px-6 sm:px-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
            <img src="https://via.placeholder.com/150" alt="Modelo" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
            <div>
              <h2 className="text-2xl font-bold">Modelo {index + 1}</h2>
              <p className="text-lg text-pink-600 font-bold">R$99,99</p>
              <p className="text-lg">Para quem gosta de um visual minimalista e elegante.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Serviços Adicionais */}
      <div className="max-w-7xl mx-auto space-y-10 px-6 sm:px-8 py-12">
        <h2 className="text-3xl font-bold text-center">Serviços Adicionais</h2>

        <div className="border-2 border-pink-400 rounded-lg p-6 space-y-6">
          {/* Serviço 1 */}
          <div className="flex items-center gap-6">
            <img src="https://via.placeholder.com/150" alt="Serviço" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
            <div>
              <h2 className="text-2xl font-bold">Correção de Sobrancelha</h2>
              <p className="text-lg text-pink-600 font-bold">R$15,00</p>
              <p className="text-lg">Ajuste e alinhamento profissional para realçar sua expressão.</p>
            </div>
          </div>

          {/* Serviço 2 */}
          <div className="flex items-center gap-6 flex-row-reverse">
            <img src="https://via.placeholder.com/150" alt="Serviço" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
            <div>
              <h2 className="text-2xl font-bold">Remoção de Cílios</h2>
              <p className="text-lg text-pink-600 font-bold">R$30,00</p>
              <p className="text-lg">Removemos com segurança os cílios de outra extensão.</p>
            </div>
          </div>

          {/* Serviço 3 - Maquiagem */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-center">Maquiagem</h2>
            
            <div className="flex items-center gap-6">
              <img src="https://via.placeholder.com/150" alt="Maquiagem" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
              <div>
                <h3 className="text-lg font-bold">Completa com cílios postiços</h3>
                <p className="text-lg text-pink-600 font-bold">R$45,00</p>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-row-reverse">
              <img src="https://via.placeholder.com/150" alt="Maquiagem" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
              <div>
                <h3 className="text-lg font-bold">Completa sem cílios postiços</h3>
                <p className="text-lg text-pink-600 font-bold">R$40,00</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img src="https://via.placeholder.com/150" alt="Maquiagem" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
              <div>
                <h3 className="text-lg font-bold">Somente pele</h3>
                <p className="text-lg text-pink-600 font-bold">R$25,00</p>
                <p className="text-lg">Maquiagem sem sombra nos olhos, apenas com base e acabamento.</p>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-row-reverse">
              <img src="https://via.placeholder.com/150" alt="Maquiagem" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
              <div>
                <h3 className="text-lg font-bold">Somente olhos</h3>
                <p className="text-lg text-pink-600 font-bold">R$15,00</p>
                <p className="text-lg">Aplicação de sombra e acabamento para um olhar destacado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão Pré e Pós Agendamento */}
      <div className="py-8 flex justify-center">
        <a href="/#" className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-black text-white hover:bg-gray-800">
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default Modelos;
