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
        <h1 className="text-4xl font-bold border-b-4 border-pink-400 inline-block">Modelos de Cílios</h1>
      </div>

      {/* Modelos */}
      <div className="max-w-7xl mx-auto space-y-10 px-6 sm:px-8">
        {[
          { img: "https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png", name: "Natural", price: "R$100,00", desc: "Para um olhar sutil e delicado, com efeito natural." },
          { img: "https://i.ibb.co/VqHRLjg/Remove-bg-ai-1737834159090.png", name: "Volume Brasileiro", price: "R$120,00", desc: "Mais preenchido, ideal para destacar os olhos." },
          { img: "https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png", name: "Híbrido", price: "R$130,00", desc: "Mistura entre natural e volume, um equilíbrio perfeito." },
          { img: "https://i.ibb.co/MBmPRYg/Remove-bg-ai-1737834145392.png", name: "Volume Russo", price: "R$150,00", desc: "Fios ultrafinos, criando um efeito volumoso e sofisticado." },
          { img: "https://i.ibb.co/58kM5zD/Remove-bg-ai-1737834141576.png", name: "Mega Volume", price: "R$180,00", desc: "Para quem ama um olhar impactante e glamouroso." }
        ].map((model, index) => (
          <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
            <img src={model.img} alt="Modelo" className="w-32 h-32 rounded-full shadow-md" />
            <div>
              <h2 className="text-2xl font-bold">{model.name}</h2>
              <p className="text-lg text-pink-600 font-bold">{model.price}</p>
              <p className="text-lg">{model.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Serviços Adicionais */}
      <div className="max-w-7xl mx-auto space-y-10 px-6 sm:px-8 py-12">
        <h2 className="text-3xl font-bold text-center border-b-4 border-pink-400 inline-block">Serviços Adicionais</h2>

        {/* Serviço 1 */}
        <div className="flex items-center gap-6">
          <img src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png" alt="Sobrancelha" className="w-32 h-32 rounded-full shadow-md" />
          <div>
            <h2 className="text-2xl font-bold">Correção de Sobrancelha</h2>
            <p className="text-lg text-pink-600 font-bold">R$15,00</p>
            <p className="text-lg">Ajuste profissional para sobrancelhas alinhadas e harmoniosas.</p>
          </div>
        </div>

        {/* Serviço 2 */}
        <div className="flex items-center gap-6 flex-row-reverse">
          <img src="https://i.ibb.co/VqHRLjg/Remove-bg-ai-1737834159090.png" alt="Remoção" className="w-32 h-32 rounded-full shadow-md" />
          <div>
            <h2 className="text-2xl font-bold">Remoção de Cílios</h2>
            <p className="text-lg text-pink-600 font-bold">R$30,00</p>
            <p className="text-lg">Retirada segura da extensão sem danificar os fios naturais.</p>
          </div>
        </div>

        {/* Serviço 3 - Maquiagem */}
        <div className="flex items-center gap-6">
          <img src="https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png" alt="Maquiagem" className="w-32 h-32 rounded-full shadow-md" />
          <div>
            <h2 className="text-2xl font-bold">Maquiagem</h2>
            <div className="mt-2">
              <p className="text-lg text-pink-600 font-bold">R$45,00 - Completa (com cílios postiços)</p>
              <p className="text-lg text-pink-600 font-bold">R$40,00 - Completa (sem cílios postiços)</p>
              <p className="text-lg text-pink-600 font-bold">R$25,00 - Apenas pele (base e acabamento, sem sombra nos olhos)</p>
              <p className="text-lg text-pink-600 font-bold">R$15,00 - Apenas olhos (maquiagem na pálpebra)</p>
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
