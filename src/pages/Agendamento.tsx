import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Agendamento() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Some ao rolar para baixo
      } else {
        setShowNavbar(true); // Aparece ao rolar para cima
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800">
      {/* Barra de Navegação que some ao rolar */}
      <div className={`fixed top-0 left-0 w-full bg-pink-200 shadow-md py-4 px-6 flex justify-between items-center z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <button onClick={() => navigate(-1)} className="text-pink-600 text-2xl font-bold">
          ←
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-pink-600 text-2xl font-bold">
          ☰
        </button>
      </div>

      {/* Menu Lateral */}
      {menuOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-pink-200 shadow-lg border-l border-pink-300 z-50 overflow-auto">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 text-pink-600 text-3xl">
            ✖
          </button>
          <div className="mt-12 space-y-6 text-pink-600 text-xl text-center px-4">
            <button onClick={() => { navigate("/modelos"); setMenuOpen(false); }} className="block hover:text-pink-700">
              Ver Modelos
            </button>
            <button onClick={() => { navigate("/agendar"); setMenuOpen(false); }} className="block hover:text-pink-700">
              Agendar Horário
            </button>
            <a href="https://www.instagram.com/seuinstagram" className="block hover:text-pink-700" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <button onClick={() => { navigate("/"); setMenuOpen(false); }} className="block hover:text-pink-700">
              Tela Inicial
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div className="max-w-2xl mx-auto mt-20 px-4">
        <h1 className="text-pink-700 text-3xl font-bold border-b border-pink-400 pb-2 text-center">Pré Agendamento</h1>

        <div className="mt-6 text-lg space-y-6">
          <p><strong className="text-pink-700">Não use maquiagem no dia do procedimento.</strong><br/> O resíduo de produtos pode prejudicar a fixação dos cílios.</p>
          <p><strong className="text-pink-700">Evite cremes ou óleos na região dos olhos.</strong><br/> Isso pode comprometer a aderência da cola e reduzir a durabilidade.</p>
          <p><strong className="text-pink-700">Não consuma bebidas com cafeína antes da sessão.</strong><br/> A cafeína pode causar tremores nos olhos e dificultar a aplicação.</p>
          <p><strong className="text-pink-700">Se tiver filhos pequenos, traga um acompanhante.</strong><br/> O procedimento exige que você fique de olhos fechados, então é essencial um apoio para cuidar das crianças.</p>
          <p><strong className="text-pink-700">Evite atrasos.</strong><br/> Respeite o horário agendado para garantir um atendimento tranquilo e bem feito.</p>
          <p><strong className="text-pink-700">O procedimento é demorado.</strong><br/>O procedimento de extensão de cílios dura, em média, de 1 hora e 30 minutos a 2 horas, dependendo do modelo escolhido e da quantidade de fios aplicados.</p>
        </div>

        <h1 className="text-pink-700 text-3xl font-bold border-b border-pink-400 pb-2 mt-12 text-center">Pós Agendamento</h1>

        <div className="mt-6 text-lg space-y-6">
          <p><strong className="text-pink-700">Não molhe os cílios nas primeiras 24h.</strong><br/> A cola precisa de tempo para secar completamente.</p>
          <p><strong className="text-pink-700">Evite coçar ou esfregar os olhos.</strong><br/> Isso pode soltar os fios antes do tempo.</p>
          <p><strong className="text-pink-700">Não use rímel ou maquiagem à prova d'água.</strong><br/> Produtos oleosos enfraquecem a cola e fazem os fios caírem mais rápido.</p>
          <p><strong className="text-pink-700">Evite jato de água direto nos cílios.</strong><br/> O impacto pode prejudicar a fixação.</p>
          <p><strong className="text-pink-700">Mantenha a higiene em dia.</strong><br/> Lave os cílios com um shampoo neutro específico e evite acúmulo de sujeira.</p>
        </div>

        <h2 className="text-pink-700 text-2xl font-bold mt-12 text-center">Observação Importante</h2>
        <p className="mt-4 text-lg text-center">
          <strong className="text-pink-700">A má higienização pode causar blefarite!</strong>  
          Blefarite é uma inflamação na borda das pálpebras que pode causar coceira, vermelhidão e descamação.  
          Para evitar, mantenha os cílios sempre limpos e use produtos adequados.
        </p>

        {/* Botão de Agendamento */}
        <div className="flex justify-center mt-8 mb-6">
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
