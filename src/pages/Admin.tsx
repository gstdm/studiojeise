import React, { useEffect, useState } from "react";

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
  descricao: string;
  img: string;
};

export default function Admin() {
  const [dadosCarregados, setDadosCarregados] = useState(false);
  const [logado, setLogado] = useState(false);
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [salvoComSucesso, setSalvoComSucesso] = useState(false);
  const [erroSalvar, setErroSalvar] = useState(false);

  const [promocaoAtiva, setPromocaoAtiva] = useState(false);
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then((res) => res.json())
      .then((data) => {
        setPromocaoAtiva(data.promocaoAtiva);
        setModelos(data.modelos);
        setServicos(data.servicosAdicionais);
        setDadosCarregados(true);
      })
      .catch(() => alert("Erro ao carregar os dados. Tente recarregar."));
  }, []);

  const fazerLogin = () => {
    if (usuarioInput.trim() === "jeise" && senhaInput.trim() === "123456") {
      setLogado(true);
      setSalvoComSucesso(false);
      setErroSalvar(false);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const alterarModelo = (
    index: number,
    campo: keyof Modelo | "precoPromocional",
    valor: string
  ) => {
    const novosModelos = [...modelos];
    // @ts-ignore
    novosModelos[index][campo] = valor;
    setModelos(novosModelos);
  };

  const alterarServico = (
    index: number,
    campo: keyof Servico,
    valor: string
  ) => {
    const novosServicos = [...servicos];
    // @ts-ignore
    novosServicos[index][campo] = valor;
    setServicos(novosServicos);
  };

  const togglePromocao = () => {
    setPromocaoAtiva(!promocaoAtiva);
  };

  const salvarTudo = async () => {
    setSalvando(true);
    setSalvoComSucesso(false);
    setErroSalvar(false);

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

  if (!logado) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-100 p-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center text-pink-700 mb-6">
            Painel Admin
          </h1>
          <input
            type="text"
            placeholder="Usuário"
            value={usuarioInput}
            onChange={(e) => setUsuarioInput(e.target.value)}
            className="w-full p-3 rounded-xl border border-pink-300 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senhaInput}
            onChange={(e) => setSenhaInput(e.target.value)}
            className="w-full p-3 rounded-xl border border-pink-300 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <button
            onClick={fazerLogin}
            disabled={!dadosCarregados}
            className={`w-full text-white py-3 rounded-xl font-semibold transition ${
              dadosCarregados
                ? "bg-pink-600 hover:bg-pink-700"
                : "bg-pink-300 cursor-not-allowed"
            }`}
          >
            {dadosCarregados ? "Entrar" : "Carregando..."}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-700">Admin Studio Jeise</h1>
          <button
            onClick={() => {
              setLogado(false);
              setUsuarioInput("");
              setSenhaInput("");
            }}
            className="text-sm text-pink-600 underline"
          >
            Sair
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-pink-700">Promoção Ativa</h2>
            <button
              onClick={togglePromocao}
              className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                promocaoAtiva ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-transform ${
                  promocaoAtiva ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold text-pink-700 mb-4">Modelos</h2>
          {modelos.map((modelo, i) => (
            <div key={i} className="mb-6 space-y-3">
              <img
                src={modelo.img}
                alt={modelo.nome}
                className="w-full h-40 object-cover rounded-xl border border-pink-300"
              />
              <input
                type="text"
                value={modelo.nome}
                onChange={(e) => alterarModelo(i, "nome", e.target.value)}
                className="w-full p-2 rounded-xl border border-pink-300"
                placeholder="Nome"
              />
              <input
                type="text"
                value={modelo.preco}
                onChange={(e) => alterarModelo(i, "preco", e.target.value)}
                className="w-full p-2 rounded-xl border border-pink-300"
                placeholder="Preço"
              />
              <input
                type="text"
                value={modelo.precoPromocional ?? ""}
                onChange={(e) =>
                  alterarModelo(i, "precoPromocional", e.target.value)
                }
                className="w-full p-2 rounded-xl border border-pink-300"
                placeholder="Preço Promocional"
              />
              <textarea
                rows={3}
                value={modelo.descricao}
                onChange={(e) => alterarModelo(i, "descricao", e.target.value)}
                className="w-full p-2 rounded-xl border border-pink-300 resize-none"
                placeholder="Descrição"
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold text-pink-700 mb-4">Serviços</h2>
          {servicos.map((servico, i) => (
            <div key={i} className="mb-6 space-y-3">
              <img
                src={servico.img}
                alt={servico.nome}
                className="w-full h-40 object-cover rounded-xl border border-pink-300"
              />
              <input
                type="text"
                value={servico.nome}
                onChange={(e) => alterarServico(i, "nome", e.target.value)}
                className="w-full p-2 rounded-xl border border-pink-300"
                placeholder="Nome"
              />
              <input
                type="text"
                value={servico.preco}
                onChange={(e) => alterarServico(i, "preco", e.target.value)}
                className="w-full p-2 rounded-xl border border-pink-300"
                placeholder="Preço"
              />
              <textarea
                rows={3}
                value={servico.descricao}
                onChange={(e) => alterarServico(i, "descricao", e.target.value)}
                className="w-full p-2 rounded-xl border border-pink-300 resize-none"
                placeholder="Descrição"
              />
            </div>
          ))}
        </div>

        <div>
          <button
            disabled={salvando}
            onClick={salvarTudo}
            className={`w-full py-3 rounded-xl text-white font-semibold text-lg transition ${
              salvando
                ? "bg-pink-300 cursor-not-allowed"
                : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            {salvando ? "Salvando..." : "Salvar Alterações"}
          </button>
          {salvoComSucesso && (
            <p className="text-green-700 mt-2 text-center font-medium">
              Salvo com sucesso!
            </p>
          )}
          {erroSalvar && (
            <p className="text-red-600 mt-2 text-center font-medium">
              Erro ao salvar. Tente novamente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
