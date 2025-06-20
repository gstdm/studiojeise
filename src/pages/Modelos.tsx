import React, { useEffect, useState } from "react";

function Modelos() {
  const [modelos, setModelos] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [promocaoAtiva, setPromocaoAtiva] = useState(false);

  useEffect(() => {
    fetch("https://jeiselashes.squareweb.app/api/conteudo")
      .then((res) => res.json())
      .then((data) => {
        setModelos(data.modelos || []);
        setServicos(data.servicosAdicionais || []);
        setPromocaoAtiva(data.promocaoAtiva || false);
      })
      .catch((err) => console.error("Erro ao carregar dados:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800">
      {/* Barra de Navegação */}
      <div className="flex justify-between items-center p-4 bg-pink-200">
        <button onClick={() => window.history.back()} className="text-2xl">←</button>
        <button className="text-2xl">☰</button>
      </div>

      {/* Título */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold border-4 border-pink-400 inline-block px-6 py-2 rounded-lg">
          Modelos de Cílios
        </h1>
      </div>

      {/* Promoção */}
      {promocaoAtiva && (
        <div className="text-center bg-red-500 text-white font-bold py-3 rounded-lg mx-4 mb-6 shadow-lg">
          <p>Promoção ativa! Confira os preços promocionais abaixo.</p>
        </div>
      )}

      {/* Modelos de Cílios */}
      <div className="max-w-7xl mx-auto space-y-12 px-6 sm:px-8">
        {modelos.map((modelo: any, index: number) => (
          <div
            key={index}
            className={`flex items-center gap-6 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            <img
              src={modelo.img}
              alt={modelo.nome}
              className="w-44 h-45 object-cover rounded-full border-2 border-pink-400 shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold">{modelo.nome}</h2>
              {promocaoAtiva && modelo.precoPromocional ? (
                <p className="text-lg font-semibold text-red-600 line-through">
                  {modelo.preco}
                </p>
              ) : null}
              <p
                className={`text-lg font-semibold ${
                  promocaoAtiva ? "text-green-700" : "text-pink-600"
                }`}
              >
                {promocaoAtiva && modelo.precoPromocional
                  ? modelo.precoPromocional
                  : modelo.preco}
              </p>
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
  {servicos.map((servico: any, index: number) => (
    <div
      key={index}
      className={`flex items-center gap-6 ${
        index % 2 === 0 ? "" : "flex-row-reverse"
      }`}
    >
      <img
        src={servico.img}
        alt={servico.nome}
        className="w-44 h-45 object-cover rounded-full border-2 border-pink-400 shadow-lg"
      />
      <div>
        <h2 className="text-2xl font-bold">{servico.nome}</h2>
        {promocaoAtiva && servico.precoPromocional ? (
          <p className="text-lg font-semibold text-red-600 line-through whitespace-pre-wrap">
            {servico.preco}
          </p>
        ) : null}
        <p
          className={`text-lg font-semibold ${
            promocaoAtiva ? "text-green-700" : "text-pink-600"
          } whitespace-pre-wrap`}
        >
          {promocaoAtiva && servico.precoPromocional
            ? servico.precoPromocional
            : servico.preco}
        </p>
        <p className="text-lg whitespace-pre-wrap">{servico.descricao}</p>
      </div>
    </div>
  ))}
</div>
      {/* Botões Finais */}
      <div className="py-8 flex flex-col items-center gap-4">
        <a
          href="https://wa.me/558988023208"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-green-500 hover:bg-green-600 text-white"
        >
          Agendar Horário
        </a>
        <a
          href="/#/agendamento"
          onClick={(e) => {
            e.preventDefault();
            location.href = "/#/agendamento";
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 100);
          }}
          className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-black text-white hover:bg-gray-800"
        >
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default Modelos;
