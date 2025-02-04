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
      <div className="flex justify-between items-center p-4 bg-pink-200">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        <button onClick={toggleMenu} className="text-2xl">☰</button>
      </div>

      {/* Menu Lateral */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full shadow-lg z-50 flex flex-col items-center bg-opacity-95 bg-white">
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
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold border-4 border-pink-400 inline-block px-6 py-2 rounded-lg">
          Modelos de Cílios
        </h1>
      </div>

      {/* Modelos de Cílios */}
      <div className="max-w-7xl mx-auto space-y-12 px-6 sm:px-8">
        {[
          { nome: "Modelo Natural", preco: "R$99,99", descricao: "Ideal para quem deseja um olhar realçado, mas discreto.", img: "https://i.ibb.co/5hHjyXSV/Screenshot-20250203-185948.jpg" },
          { nome: "Modelo Volume Brasileiro", preco: "R$119,99", descricao: "Perfeito para quem gosta de cílios mais cheios e bem alinhados.", img: "https://i.ibb.co/twFL5p5W/Screenshot-20250203-190009.jpg" },
          { nome: "Modelo Volume Egípcio", preco: "R$129,99", descricao: "Efeito sofisticado e marcante, com fios longos e bem definidos.", img: "https://i.ibb.co/Mx3jXXGr/Screenshot-20250203-202443.jpg" },
          { nome: "Modelo Foxy Eyes", preco: "R$139,99", descricao: "Alonga e levanta o olhar, inspirado no efeito das raposas.", img: "https://i.ibb.co/mrdV0dRr/Screenshot-20250203-185955.jpg" },
          { nome: "Modelo Mega Volume", preco: "R$149,99", descricao: "Para quem ama um olhar intenso e super volumoso.", img: "https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png" }
        ].map((modelo, index) => (
          <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
            <img src={modelo.img} alt={modelo.nome} className="w-40 h-40 object-cover rounded-full border-2 border-pink-400 shadow-lg" />
            <div>
              <h2 className="text-2xl font-bold">{modelo.nome}</h2>
              <p className="text-lg text-pink-600 font-semibold">{modelo.preco}</p>
              <p className="text-lg">{modelo.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Separação */}
      <div className="py-12"></div>

      {/* Serviços Adicionais */}
      <div className="text-center">
        <h2 className="text-3xl font-bold border-4 border-pink-400 inline-block px-6 py-2 rounded-lg">
          Serviços Adicionais
        </h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 px-6 sm:px-8 mt-8">
        {/* Correção de sobrancelha */}
        <div className="flex items-center gap-6">
          <img src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png" alt="Correção de sobrancelha" className="w-40 h-40 object-cover rounded-full border-2 border-pink-400 shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold">Correção de Sobrancelha</h2>
            <p className="text-lg text-pink-600 font-semibold">R$15,00</p>
            <p className="text-lg">Correção e alinhamento das sobrancelhas para um acabamento impecável.</p>
          </div>
        </div>

        {/* Remoção de Cílios */}
        <div className="flex items-center gap-6 flex-row-reverse">
          <img src="https://i.ibb.co/VqHRLjg/Remove-bg-ai-1737834159090.png" alt="Remoção de cílios" className="w-40 h-40 object-cover rounded-full border-2 border-pink-400 shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold">Remoção de Cílios</h2>
            <p className="text-lg text-pink-600 font-semibold">R$30,00</p>
            <p className="text-lg">Removemos extensões anteriores com segurança e cuidado.</p>
          </div>
        </div>

        {/* Maquiagem */}
        <div className="flex items-center gap-6">
          <img src="https://i.ibb.co/MBmPRYg/Remove-bg-ai-1737834145392.png" alt="Maquiagem" className="w-40 h-40 object-cover rounded-full border-2 border-pink-400 shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold">Maquiagem</h2>
            <p className="text-lg font-semibold">R$45,00 - Completa com cílios postiços</p>
            <p className="text-lg font-semibold">R$40,00 - Completa sem cílios postiços</p>
            <p className="text-lg font-semibold">R$25,00 - Apenas pele (base + acabamento, sem sombra nos olhos)</p>
            <p className="text-lg font-semibold">R$15,00 - Apenas olhos (sombra na pálpebra)</p>
          </div>
        </div>
      </div>

      {/* Botões Finais */}
      <div className="py-8 flex flex-col items-center gap-4">
        <a href="https://wa.me/558988023208" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-green-500 hover:bg-green-600 text-white">
          Agendar Horário
        </a>
        <a href="/#/agendamento" className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-black text-white hover:bg-gray-800">
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default Modelos;
