import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

type Modelo = { nome: string; preco: string; precoPromocional?: string; descricao: string; img: string; };

type Servico = { nome: string; preco: string; precoPromocional?: string; descricao: string; img: string; };

export default function EdicaoModelos() { const [dadosCarregados, setDadosCarregados] = useState(false); const [promocaoAtiva, setPromocaoAtiva] = useState(false); const [modelos, setModelos] = useState<Modelo[]>([]); const [servicos, setServicos] = useState<Servico[]>([]); const [salvando, setSalvando] = useState(false); const [salvoComSucesso, setSalvoComSucesso] = useState(false); const [erroSalvar, setErroSalvar] = useState(false);

const originalData = useRef<{ promocaoAtiva: boolean; modelos: Modelo[]; servicos: Servico[]; } | null>(null);

useEffect(() => { fetch(`${URL_API}/api/conteudo`) .then((res) => res.json()) .then((data) => { setPromocaoAtiva(data.promocaoAtiva); setModelos(data.modelos || []); setServicos(data.servicosAdicionais || []); originalData.current = { promocaoAtiva: data.promocaoAtiva, modelos: data.modelos || [], servicos: data.servicosAdicionais || [], }; setDadosCarregados(true); }) .catch(() => alert("Erro ao carregar os dados. Tente recarregar.")); }, []);

const alterarModelo = (index: number, campo: keyof Modelo | "precoPromocional", valor: string) => { const novos = [...modelos]; // @ts-ignore novos[index][campo] = valor; setModelos(novos); };

const alterarServico = (index: number, campo: keyof Servico | "precoPromocional", valor: string) => { const novos = [...servicos]; // @ts-ignore novos[index][campo] = valor; setServicos(novos); };

const togglePromocao = () => setPromocaoAtiva(!promocaoAtiva);

const salvarTudo = async () => { setSalvando(true); setSalvoComSucesso(false); setErroSalvar(false);

const dadosSalvar = {
  promocaoAtiva,
  modelos,
  servicosAdicionais: servicos,
};

try {
  const res = await fetch(`${URL_API}/api/salvar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dadosSalvar),
  });

  if (res.ok) {
    setSalvoComSucesso(true);
    originalData.current = {
      promocaoAtiva,
      modelos: [...modelos],
      servicos: [...servicos],
    };
  } else {
    setErroSalvar(true);
  }
} catch {
  setErroSalvar(true);
} finally {
  setSalvando(false);
  setTimeout(() => setSalvoComSucesso(false), 3000);
}

};

const adicionarModelo = () => { setModelos((prev) => [ ...prev, { nome: "", preco: "", descricao: "", img: "", precoPromocional: "" }, ]); };

const houveAlteracoes = () => { if (!originalData.current) return false; return ( promocaoAtiva !== originalData.current.promocaoAtiva || JSON.stringify(modelos) !== JSON.stringify(originalData.current.modelos) || JSON.stringify(servicos) !== JSON.stringify(originalData.current.servicos) ); };

if (!dadosCarregados) return <p className="text-center">Carregando...</p>;

return ( <div className="w-full max-w-4xl mx-auto space-y-10"> <section className="bg-white rounded-3xl shadow p-6 flex items-center justify-between"> <h2 className="text-xl font-semibold text-pink-700">Promoção Ativa</h2> <button onClick={togglePromocao} className={relative w-16 h-8 rounded-full transition-colors duration-300 ${promocaoAtiva ? "bg-green-500" : "bg-red-500"}} > <span className={absolute top-0.5 left-1 w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-300 ${promocaoAtiva ? "translate-x-8" : ""}} /> </button> </section>

<section className="space-y-10">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-pink-700">Modelos de Cílios</h2>
      <button
        onClick={adicionarModelo}
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-2xl px-4 py-2"
      >
        + Adicionar Modelo
      </button>
    </div>

    {modelos.map((modelo, i) => (
      <div key={i} className="bg-white rounded-3xl shadow-lg p-6">
        <div className="mb-4">
          <label className="block text-pink-700 font-semibold mb-1">Nome</label>
          <input
            type="text"
            value={modelo.nome}
            onChange={(e) => alterarModelo(i, "nome", e.target.value)}
            className="w-full border border-pink-300 rounded-xl px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-pink-700 font-semibold mb-1">Imagem (URL)</label>
          <input
            type="text"
            value={modelo.img}
            onChange={(e) => alterarModelo(i, "img", e.target.value)}
            className="w-full border border-pink-300 rounded-xl px-4 py-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-pink-700 font-semibold mb-1">Preço Normal</label>
            <input
              type="text"
              value={modelo.preco}
              onChange={(e) => alterarModelo(i, "preco", e.target.value)}
              className="w-full border border-pink-300 rounded-xl px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-pink-700 font-semibold mb-1">Preço Promocional</label>
            <input
              type="text"
              value={modelo.precoPromocional || ""}
              onChange={(e) => alterarModelo(i, "precoPromocional", e.target.value)}
              className="w-full border border-pink-300 rounded-xl px-4 py-2"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-pink-700 font-semibold mb-1">Descrição</label>
          <textarea
            value={modelo.descricao}
            onChange={(e) => alterarModelo(i, "descricao", e.target.value)}
            className="w-full border border-pink-300 rounded-xl px-4 py-2 resize-y"
          />
        </div>
      </div>
    ))}
  </section>

  <div className="max-w-sm mx-auto flex flex-col gap-4">
    <button
      onClick={salvarTudo}
      disabled={salvando}
      className={`w-full py-4 rounded-3xl font-bold text-white text-lg transition ${salvando ? "bg-pink-300 cursor-not-allowed" : "bg-pink-700 hover:bg-pink-800"}`}
    >
      {salvando ? "Salvando..." : "Salvar Alterações"}
    </button>

    {salvoComSucesso && (
      <p className="text-green-700 text-center font-semibold">Salvo com sucesso!</p>
    )}

    {erroSalvar && (
            <p className="text-red-600 text-center font-semibold">
              Erro ao salvar. Tente novamente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
