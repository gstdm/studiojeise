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
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <button onClick={() => navigate("/")} className="text-2xl text-gray-800">
          ←
        </button>
        <button onClick={toggleMenu} className="text-2xl text-gray-800">
          ☰
        </button>
      </div>

      {/* Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 p-4">
          <ul className="space-y-4 text-lg">
            <li className="text-blue-600 text-xl font-bold">Ver Modelos</li>
            <li onClick={() => navigate("/agendar")} className="cursor-pointer">Agendar Horário</li>
            <li onClick={() => navigate("/instagram")} className="cursor-pointer">Instagram</li>
            <li onClick={() => navigate("/historia")} className="cursor-pointer">História</li>
            <li onClick={() => navigate("/")} className="cursor-pointer">Tela Inicial</li>
          </ul>
        </div>
      )}

      {/* Modelos de Cílios */}
      <h1 className="text-3xl font-bold text-center border-b-2 border-gray-500 py-2 mx-6">
        Modelos de Cílios
      </h1>

      <div className="grid grid-cols-2 gap-6 p-6">
        {/* Exemplo de modelo */}
        <div className="flex flex-col items-center">
          <img src="https://i.ibb.co/VqHRLjg/Remove-bg-ai-1737834159090.png" alt="Modelo 1"
            className="w-40 h-40 rounded-full border border-gray-500 shadow-md"/>
          <p className="text-lg font-semibold mt-2">Volume Brasileiro</p>
          <p className="text-gray-600">Fios médios e volumosos, ideal para realce natural.</p>
          <p className="font-bold text-pink-600 mt-1">R$ 120</p>
        </div>

        {/* Adicione os outros modelos seguindo o mesmo padrão */}
      </div>

      {/* Espaçamento maior entre modelos e serviços adicionais */}
      <div className="mt-10"></div>

      {/* Serviços Adicionais */}
      <h2 className="text-2xl font-bold text-center border-b-2 border-gray-500 py-2 mx-6">
        Serviços Adicionais
      </h2>

      <div className="grid grid-cols-2 gap-6 p-6">
        {/* Lash Lifting */}
        <div className="flex flex-col items-center">
          <img src="https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png" alt="Lash Lifting"
            className="w-40 h-40 rounded-full border border-gray-500 shadow-md"/>
          <p className="text-lg font-semibold mt-2">Lash Lifting</p>
          <p className="text-gray-600">Curvatura natural nos cílios sem alongamento.</p>
          <p className="font-bold text-pink-600 mt-1">R$ 80</p>
        </div>

        {/* Design de Sobrancelha */}
        <div className="flex flex-col items-center">
          <img src="https://i.ibb.co/MBmPRYg/Remove-bg-ai-1737834145392.png" alt="Design de Sobrancelha"
            className="w-40 h-40 rounded-full border border-gray-500 shadow-md"/>
          <p className="text-lg font-semibold mt-2">Design de Sobrancelha</p>
          <p className="text-gray-600">Modelagem e preenchimento para um olhar harmonioso.</p>
          <p className="font-bold text-pink-600 mt-1">R$ 50</p>
        </div>

        {/* Maquiagem */}
        <div className="flex flex-col items-center col-span-2">
          <img src="https://i.ibb.co/58kM5zD/Remove-bg-ai-1737834141576.png" alt="Maquiagem"
            className="w-40 h-40 rounded-full border border-gray-500 shadow-md"/>
          <p className="text-lg font-semibold mt-2">Maquiagem</p>
          <div className="text-gray-700 text-sm mt-1">
            <p className="text-gray-500">R$ 45 - Completa, com cílios postiços</p>
            <p className="text-gray-500">R$ 40 - Completa, sem cílios postiços</p>
            <p className="text-gray-500">R$ 25 - Só pele (base, acabamento, sem sombra nos olhos)</p>
            <p className="text-gray-500">R$ 15 - Só olho (maquiagem na pálpebra)</p>
          </div>
        </div>
      </div>

      {/* Botão para Agendar Horário */}
      <div className="flex justify-center mt-6">
        <a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer"
          className="bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700">
          Agendar Horário
        </a>
      </div>

      {/* Leia o Pré e Pós Agendamento */}
      <div className="text-center mt-4">
        <a href="/pre-pos-agendamento" className="text-blue-600 text-lg font-semibold hover:underline">
          Leia o Pré e Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default Modelos;
