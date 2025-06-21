import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

// Tipagens
// (já incluídas, não repetidas aqui)

export default function Admin() {
  const [dadosCarregados, setDadosCarregados] = useState(false);
  const [logado, setLogado] = useState(false);
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [salvoComSucesso, setSalvoComSucesso] = useState(false);
  const [erroSalvar, setErroSalvar] = useState(false);

  const [promocaoAtiva, setPromocaoAtiva] = useState(false);
  const [modelos, setModelos] = useState([]);
  const [servicos, setServicos] = useState([]);

  const originalData = useRef(null);

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
          servicos: data.servicosAdicionais || [],
        };
        setDadosCarregados(true);
      })
      .catch(() => alert("Erro ao carregar os dados. Tente recarregar."));
  }, []);

  const fazerLogin = () => {
    if (usuarioInput.trim() === "Jeise" && senhaInput.trim() === "123456") {
      setLogado(true);
      setSalvoComSucesso(false);
      setErroSalvar(false);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const alterarModelo = (index, campo, valor) => {
    const novos = [...modelos];
    novos[index][campo] = valor;
    setModelos(novos);
  };

  const alterarServico = (index, campo, valor) => {
    const novos = [...servicos];
    novos[index][campo] = valor;
    setServicos(novos);
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

  const houveAlteracoes = () => {
    if (!originalData.current) return false;
    return (
      promocaoAtiva !== originalData.current.promocaoAtiva ||
      JSON.stringify(modelos) !== JSON.stringify(originalData.current.modelos) ||
      JSON.stringify(servicos) !== JSON.stringify(originalData.current.servicos)
    );
  };

  if (!logado) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-pink-300 p-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
          <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">
            Painel Admin Studio Jeise
          </h1>
          <input
            type="text"
            placeholder="Usuário"
            value={usuarioInput}
            onChange={(e) => setUsuarioInput(e.target.value)}
            className="w-full p-4 rounded-xl border border-pink-300 mb-5 focus:outline-none focus:ring-4 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senhaInput}
            onChange={(e) => setSenhaInput(e.target.value)}
            className="w-full p-4 rounded-xl border border-pink-300 mb-8 focus:outline-none focus:ring-4 focus:ring-pink-500"
          />
          <button
            onClick={fazerLogin}
            disabled={!dadosCarregados}
            className={`w-full py-4 rounded-xl font-semibold text-white text-lg transition ${
              dadosCarregados ? "bg-pink-600 hover:bg-pink-700" : "bg-pink-300 cursor-not-allowed"
            }`}
          >
            {dadosCarregados ? "Entrar" : "Carregando..."}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-pink-700">
            Painel Admin Studio Jeise
          </h1>
          <button
            onClick={() => {
              setLogado(false);
              setUsuarioInput("");
              setSenhaInput("");
            }}
            className="text-pink-700 font-semibold underline hover:text-pink-900"
          >
            Sair
          </button>
        </header>
        <section className="mb-10 bg-white rounded-3xl shadow p-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-pink-700">Promoção Ativa</h2>
          <button
            onClick={togglePromocao}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
              promocaoAtiva ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <span
              className={`absolute top-0.5 left-1 w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-300 ${
                promocaoAtiva ? "translate-x-8" : ""
              }`}
            />
          </button>
        </section>

        {/* AQUI VEM OS COMPONENTES (ex: <EdicaoModelos /> ou <EdicaoHome />) */}

        <div className="max-w-sm mx-auto flex flex-col gap-4">
          <button
            onClick={salvarTudo}
            disabled={salvando}
            className={`w-full py-4 rounded-3xl font-bold text-white text-lg transition ${
              salvando ? "bg-pink-300 cursor-not-allowed" : "bg-pink-700 hover:bg-pink-800"
            }`}
          >
            {salvando ? "Salvando..." : "Salvar Alterações"}
          </button>
          {salvoComSucesso && (
            <p className="text-green-700 text-center font-semibold">Salvo com sucesso!</p>
          )}
          {!houveAlteracoes() && salvoComSucesso && (
            <button
              onClick={() => {
                window.location.href = "/modelos";
              }}
              className="w-full py-4 mt-4 rounded-3xl font-bold bg-green-600 hover:bg-green-700 text-white text-lg transition"
            >
              Ir para página de Modelos
            </button>
          )}
          {erroSalvar && (
            <p className="text-red-600 text-center font-semibold mt-2">
              Erro ao salvar. Tente novamente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
