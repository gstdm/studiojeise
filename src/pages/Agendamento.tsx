import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Agendamento() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-red-500 px-6 py-8">
      {/* Barra de Navegação */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-700">
        <button onClick={() => navigate(-1)} className="text-white text-2xl">
          ←
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Menu Lateral */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 text-white text-3xl">
            ✖
          </button>
          <div className="space-y-6 text-white text-xl text-center">
            <button onClick={() => { navigate("/modelos"); setMenuOpen(false); }} className="block hover:text-blue-400">
              Ver Modelos
            </button>
            <button onClick={() => { navigate("/agendar"); setMenuOpen(false); }} className="block hover:text-blue-400">
              Agendar Horário
            </button>
            <a href="https://www.instagram.com/seuinstagram" className="block hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <button onClick={() => { navigate("/"); setMenuOpen(false); }} className="block hover:text-blue-400">
              Tela Inicial
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo */}
      <div className="max-w-2xl mx-auto mt-6">
        <h1 className="text-white text-3xl font-bold border-b border-gray-700 pb-2 text-center">Pré Agendamento</h1>

        <div className="mt-4 text-lg space-y-4">
          <p><strong className="text-white">Não use maquiagem no dia.</strong> Evite qualquer produto nos olhos, como rímel, delineador ou sombra.</p>
          <p><strong className="text-white">Não use cremes ou produtos oleosos.</strong> Eles podem prejudicar a fixação dos cílios.</p>
          <p><strong className="text-white">Caso tenha filhos pequenos, traga um acompanhante.</strong> Isso garante mais conforto durante o procedimento.</p>
          <p><strong className="text-white">O procedimento leva tempo.</strong> Venha preparada para relaxar, pois a aplicação pode demorar.</p>
        </div>

        <h1 className="text-white text-3xl font-bold border-b border-gray-700 pb-2 mt-8 text-center">Pós Agendamento</h1>

        <div className="mt-4 text-lg space-y-4">
          <p><strong className="text-white">Não molhe os cílios nas primeiras 24h.</strong> A cola precisa de tempo para secar completamente.</p>
          <p><strong className="text-white">Não esfregue os olhos.</strong> Isso pode soltar os fios antes do tempo.</p>
          <p><strong className="text-white">Evite jato de água direto nos cílios.</strong> O impacto da água pode danificar a fixação.</p>
          <p><strong className="text-white">Higienize corretamente.</strong> Use produtos próprios para extensão de cílios e evite óleo na região.</p>
        </div>

        <h2 className="text-white text-2xl font-bold mt-8">Observação:</h2>
        <p className="mt-2 text-lg">
          <strong className="text-white">A má higienização pode causar blefarite.</strong>  
          Blefarite é uma inflamação na borda das pálpebras, que pode causar coceira, vermelhidão e descamação.  
          Para evitar problemas, mantenha a limpeza em dia e use produtos adequados.
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
