import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

type Modelo = {
  nome: string;
  preco: string;
  precoPromocional?: string;
  descricao: string;
  img: string;
};

type Servico = {
  nome: string;
  preco: string;
  precoPromocional?: string;
  descricao: string;
  img: string;
};

export default function EdicaoModelos() {
  const [dadosCarregados, setDadosCarregados] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const [salvoComSucesso, setSalvoComSucesso] = useState(false);
  const [erroSalvar, setErroSalvar] = useState(false);

  const [promocaoAtiva, setPromocaoAtiva] = useState(false);
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [servicos, setServicos] = useState<Servico[]>([]);

  const originalData = useRef<{
    promocaoAtiva: boolean;
    modelos: Modelo[];
    servicos: Servico[];
  } | null>(null);

  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then((res) => res.json())
      .then((data) => {
        setPromocaoAtiva(data.promocaoAtiva);
        setModelos(data.modelos || []);
        setServicos(data.servicosAdicionais || []);
        originalData.current = {
          promocaoAtiva: data.promocaoAtiva,
          modelos: data.modelos || [],
          servicos: data.servicosAdicionais || []
        };
        setDadosCarregados(true);
      })
      .catch(() => alert("Erro ao carregar os dados. Tente recarregar."));
  }, []);

  const alterarModelo = (index: number, campo: keyof Modelo | "precoPromocional", valor: string) => {
    const novosModelos = [...modelos];
    // @ts-ignore
    novosModelos[index][campo] = valor;
    setModelos(novosModelos);
  };

  const alterarServico = (index: number, campo: keyof Servico | "precoPromocional", valor: string) => {
    const novosServicos = [...servicos];
    // @ts-ignore
    novosServicos[index][campo] = valor;
    setServicos(novosServicos);
  };

  const togglePromocao = () => {
    setPromocaoAtiva(!promocaoAtiva);
  };

  const adicionarModelo = () => {
    const novoModelo: Modelo = {
      nome: "",
      preco: "",
      precoPromocional: "",
      descricao: "",
      img: ""
    };
    setModelos([...modelos, novoModelo]);
  };

  const adicionarServico = () => {
    const novoServico: Servico = {
      nome: "",
      preco: "",
      precoPromocional: "",
      descricao: "",
      img: ""
    };
    setServicos([...servicos, novoServico]);
  };

  const salvarTudo = async () => {
    setSalvando(true);
    setSalvoComSucesso(false);
    setErroSalvar(false);

    const dadosSalvar = {
      promocaoAtiva,
      modelos,
      servicosAdicionais: servicos
    };

    try {
      const res = await fetch(`${URL_API}/api/salvar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosSalvar)
      });

      if (res.ok) {
        setSalvoComSucesso(true);
        originalData.current = {
          promocaoAtiva,
          modelos: [...modelos],
          servicos: [...servicos]
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

  return (
    <div className="space-y-12">
      <section className="bg-white rounded-3xl shadow p-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-pink-700">Promoção Ativa</h2>
        <button
          onClick={togglePromocao}
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${promocaoAtiva ? "bg-green-500" : "bg-red-500"}`}
        >
          <span
            className={`absolute top-0.5 left-1 w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-300 ${promocaoAtiva ? "translate-x-8" : ""}`}
          />
        </button>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-pink-700">Modelos de Cílios</h2>
        {modelos.map((modelo, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-lg p-6 space-y-4">
            <input
              type="text"
              placeholder="Nome"
              value={modelo.nome}
              onChange={(e) => alterarModelo(i, "nome", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
            <input
              type="text"
              placeholder="Link da Imagem"
              value={modelo.img}
              onChange={(e) => alterarModelo(i, "img", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
            <textarea
              placeholder="Preço"
              value={modelo.preco}
              onChange={(e) => alterarModelo(i, "preco", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
            <input
              type="text"
              placeholder="Preço Promocional"
              value={modelo.precoPromocional ?? ""}
              onChange={(e) => alterarModelo(i, "precoPromocional", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
            <textarea
              placeholder="Descrição"
              value={modelo.descricao}
              onChange={(e) => alterarModelo(i, "descricao", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
          </div>
        ))}
        <button
          onClick={adicionarModelo}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-2xl"
        >
          + Adicionar Modelo
        </button>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-pink-700">Serviços Adicionais</h2>
        {servicos.map((servico, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-lg p-6 space-y-4">
            <input
              type="text"
              placeholder="Nome"
              value={servico.nome}
              onChange={(e) => alterarServico(i, "nome", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
            <input
              type="text"
              placeholder="Link da Imagem"
              value={servico.img}
              onChange={(e) => alterarServico(i, "img", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
            <textarea
              placeholder="Preço"
              value={servico.preco}
              onChange={(e) => alterarServico(i, "preco", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
            <input
              type="text"
              placeholder="Preço Promocional"
              value={servico.precoPromocional ?? ""}
              onChange={(e) => alterarServico(i, "precoPromocional", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
            <textarea
              placeholder="Descrição"
              value={servico.descricao}
              onChange={(e) => alterarServico(i, "descricao", e.target.value)}
              className="w-full rounded-xl border border-pink-300 px-4 py-2"
            />
          </div>
        ))}
        <button
          onClick={adicionarServico}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-2xl"
        >
          + Adicionar Serviço
        </button>
      </section>

      <div className="pt-10 flex flex-col items-center gap-4">
        <button
          onClick={salvarTudo}
          disabled={salvando}
          className={`w-full max-w-xs py-4 rounded-3xl font-bold text-white text-lg transition ${salvando ? "bg-pink-300 cursor-not-allowed" : "bg-pink-700 hover:bg-pink-800"}`}
        >
          {salvando ? "Salvando..." : "Salvar Alterações"}
        </button>
        {salvoComSucesso && (
          <p className="text-green-700 font-semibold">Salvo com sucesso!</p>
        )}
        {erroSalvar && (
          <p className="text-red-600 font-semibold">Erro ao salvar. Tente novamente.</p>
        )}
      </div>
    </div>
  );
}
