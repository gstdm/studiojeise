import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Modelos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dados, setDados] = useState<any>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    fetch("/api/conteudo")
      .then((res) => res.json())
      .then((data) => setDados(data));
  }, []);

  if (!dados) return <p className="text-center mt-10">Carregando modelos...</p>;

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
            <li><a href="https://wa.me/558988023208" target="_blank">Agendar Horário</a></li>
            <li><a href="https://www.instagram.com/jeuusilayne.s" target="_blank">Instagram</a></li>
            <li><a href="/">Tela Inicial</a></li>
          </ul>
        </div>
      )}

      {/* Título */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold border-4 border-pink-400 inline-block px-6 py-2 rounded-lg">
          Modelos de Cílios
        </h1>
      </div>

      {/* Promoção */}
      {dados.promocaoAtiva && (
        <p className="text-center text-lg text-green-700 font-semibold mb-4 animate-pulse">
          🔥 Promoção ativa! Aproveite os valores especiais abaixo:
        </p>
      )}

      {/* Modelos */}
      <div className="max-w-7xl mx-auto space-y-12 px-6 sm:px-8">
        {dados.modelos.map((modelo: any, index: number) => (
          <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
            <img src={modelo.img} alt={modelo.nome} className="w-44 h-45 object-cover rounded-full border-2 border-pink-400 shadow-lg" />
            <div>
              <h2 className="text-2xl font-bold">{modelo.nome}</h2>
              <p className="text-lg text-pink-600 font-semibold">{modelo.preco}</p>
              <p className="text-lg">{modelo.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Serviços Adicionais */}
      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold border-4 border-pink-400 inline-block px-6 py-2 rounded-lg">
          Serviços Adicionais
        </h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 px-6 sm:px-8">
        {dados.servicosAdicionais?.map((serv: any, index: number) => (
          <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
            <img src={serv.img} alt={serv.nome} className="w-40 h-40 object-cover rounded-full border-2 border-pink-400 shadow-lg" />
            <div>
              <h2 className="text-2xl font-bold">{serv.nome}</h2>
              <p className="text-lg text-pink-600 font-semibold whitespace-pre-line">{serv.preco}</p>
              <p className="text-lg">{serv.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botões finais */}
      <div className="py-8 flex flex-col items-center gap-4">
        <a href="https://wa.me/558988023208" target="_blank" className="px-8 py-3 rounded-lg text-xl font-medium transition bg-green-500 hover:bg-green-600 text-white">
          Agendar Horário
        </a>
        <a href="/agendamento" className="px-8 py-3 rounded-lg text-xl font-medium transition bg-black text-white hover:bg-gray-800">
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default Modelos;
