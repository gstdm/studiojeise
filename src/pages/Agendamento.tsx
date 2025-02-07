import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Agendamento() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5c6d6] to-[#e8a6bc] px-6 py-8">
      {/* Barra de Navegação */}
      <div className="bg-[#f8d7e3] shadow-md py-4 px-6 flex justify-between items-center rounded-md">
        <button onClick={() => navigate(-1)} className="text-[#b73460] text-2xl font-bold">
          ←
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#b73460] text-2xl font-bold">
          ☰
        </button>
      </div>

      {/* Menu Lateral */}
      {menuOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-[#f8d7e3] shadow-lg border-l border-[#e0a5b9] z-50 overflow-auto">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 text-[#b73460] text-3xl">
            ✖
          </button>
          <div className="mt-12 space-y-6 text-[#b73460] text-xl text-center px-4">
            <button onClick={() => { navigate("/modelos"); setMenuOpen(false); }} className="block hover:text-[#9b2c50]">
              Ver Modelos
            </button>
            <button onClick={() => { navigate("/agendar"); setMenuOpen(false); }} className="block hover:text-[#9b2c50]">
              Agendar Horário
            </button>
            <a href="https://www.instagram.com/seuinstagram" className="block hover:text-[#9b2c50]" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <button onClick={() => { navigate("/"); setMenuOpen(false); }} className="block hover:text-[#9b2c50]">
              Tela Inicial
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div className="max-w-2xl mx-auto mt-6">
        <h1 className="text-[#b73460] text-3xl font-bold border-b border-[#e0a5b9] pb-2 text-center">Pré Agendamento</h1>

        <div className="mt-6 text-lg space-y-6">
          <p><strong className="text-[#b73460]">Não use maquiagem no dia do procedimento.</strong><br/> O resíduo de produtos pode prejudicar a fixação dos cílios.</p>
          <p><strong className="text-[#b73460]">Evite cremes ou óleos na região dos olhos.</strong><br/> Isso pode comprometer a aderência da cola e reduzir a durabilidade.</p>
          <p><strong className="text-[#b73460]">Não consuma bebidas com cafeína antes da sessão.</strong><br/> A cafeína pode causar tremores nos olhos e dificultar a aplicação.</p>
          <p><strong className="text-[#b73460]">Se tiver filhos pequenos, traga um acompanhante.</strong><br/> O procedimento exige que você fique de olhos fechados, então é essencial um apoio para cuidar das crianças.</p>
          <p><strong className="text-[#b73460]">Evite atrasos.</strong><br/> Respeite o horário agendado para garantir um atendimento tranquilo e bem feito.</p>
        </div>

        <h1 className="text-[#b73460] text-3xl font-bold border-b border-[#e0a5b9] pb-2 mt-12 text-center">Pós Agendamento</h1>

        <div className="mt-6 text-lg space-y-6">
          <p><strong className="text-[#b73460]">Não molhe os cílios nas primeiras 24h.</strong><br/> A cola precisa de tempo para secar completamente.</p>
          <p><strong className="text-[#b73460]">Evite coçar ou esfregar os olhos.</strong><br/> Isso pode soltar os fios antes do tempo.</p>
          <p><strong className="text-[#b73460]">Não use rímel ou maquiagem à prova d'água.</strong><br/> Produtos oleosos enfraquecem a cola e fazem os fios caírem mais rápido.</p>
          <p><strong className="text-[#b73460]">Evite jato de água direto nos cílios.</strong><br/> O impacto pode prejudicar a fixação.</p>
          <p><strong className="text-[#b73460]">Mantenha a higiene em dia.</strong><br/> Lave os cílios com um shampoo neutro específico e evite acúmulo de sujeira.</p>
        </div>

        <h2 className="text-[#b73460] text-2xl font-bold mt-12 text-center">Observação Importante</h2>
        <p className="mt-4 text-lg text-center">
          <strong className="text-[#b73460]">A má higienização pode causar blefarite!</strong>  
          Blefarite é uma inflamação na borda das pálpebras que pode causar coceira, vermelhidão e descamação.  
          Para evitar, mantenha os cílios sempre limpos e use produtos adequados.
        </p>

        {/* Botão de Agendamento */}
        <div className="flex justify-center mt-8">
          <a
            href="https://wa.me/558988023208"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-green-700"
          >
            Agendar Horário
          </a>
        </div>
      </div>
    </div>
  );
}

export default Agendamento;
