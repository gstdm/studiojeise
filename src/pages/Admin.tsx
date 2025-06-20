import React, { useEffect, useState } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

export default function Admin() {
  const [conteudo, setConteudo] = useState(null);
  const [logado, setLogado] = useState(false);
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [salvoComSucesso, setSalvoComSucesso] = useState(false);
  const [erroSalvar, setErroSalvar] = useState(false);

  const [promocaoAtiva, setPromocaoAtiva] = useState(false);
  const [modelos, setModelos] = useState([]);
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then((res) => res.json())
      .then((data) => {
        setConteudo(data);
        setPromocaoAtiva(data.promocaoAtiva);
        setModelos(data.modelos);
        setServicos(data.servicosAdicionais);
        setCarregando(false);
      })
      .catch(() => {
        alert("Erro ao carregar os dados. Tente novamente mais tarde.");
        setCarregando(false);
      });
  }, []);

  const fazerLogin = () => {
    if (!conteudo?.login) {
      alert("Aguarde os dados carregarem");
      return;
    }
    if (
      usuarioInput.trim() === conteudo.login.usuario &&
      senhaInput.trim() === conteudo.login.senha
    ) {
      setLogado(true);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const salvarAlteracoes = async () => {
    setSalvando(true);
    setSalvoComSucesso(false);
    setErroSalvar(false);
    try {
      const response = await fetch(`${URL_API}/api/salvar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          promocaoAtiva,
          modelos,
          servicosAdicionais: servicos,
        }),
      });
      if (response.ok) {
        setSalvoComSucesso(true);
      } else {
        throw new Error();
      }
    } catch {
      setErroSalvar(true);
    } finally {
      setSalvando(false);
    }
  };

  if (!logado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-pink-300 p-6">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
            Painel Admin Studio Jeise
          </h1>
          <input
            type="text"
            placeholder="Usuário"
            value={usuarioInput}
            onChange={(e) => setUsuarioInput(e.target.value)}
            className="w-full p-4 rounded-xl border border-pink-400 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600 text-lg"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senhaInput}
            onChange={(e) => setSenhaInput(e.target.value)}
            className="w-full p-4 rounded-xl border border-pink-400 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-600 text-lg"
          />
          <button
            onClick={fazerLogin}
            disabled={carregando}
            className={`w-full py-4 rounded-xl text-white text-xl font-semibold transition ${
              carregando
                ? "bg-pink-400 cursor-not-allowed"
                : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            {carregando ? "Carregando..." : "Entrar"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 p-4 space-y-6">
      <h2 className="text-3xl text-center font-bold text-pink-700 mb-4">
        Painel de Edição
      </h2>

      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="text-xl font-bold mb-2">Promoção Ativa</h3>
        <button
          onClick={() => setPromocaoAtiva(!promocaoAtiva)}
          className={`w-full py-3 rounded-xl text-white text-lg font-semibold transition ${
            promocaoAtiva ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {promocaoAtiva ? "Ativada" : "Desativada"}
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Modelos</h3>
        {modelos.map((m, i) => (
          <div key={i} className="mb-6">
            <input
              className="w-full mb-2 p-2 rounded-lg border border-pink-400"
              value={m.nome}
              onChange={(e) => {
                const novos = [...modelos];
                novos[i].nome = e.target.value;
                setModelos(novos);
              }}
              placeholder="Nome"
            />
            <input
              className="w-full mb-2 p-2 rounded-lg border border-pink-400"
              value={m.preco}
              onChange={(e) => {
                const novos = [...modelos];
                novos[i].preco = e.target.value;
                setModelos(novos);
              }}
              placeholder="Preço"
            />
            <textarea
              className="w-full p-2 rounded-lg border border-pink-400"
              value={m.descricao}
              onChange={(e) => {
                const novos = [...modelos];
                novos[i].descricao = e.target.value;
                setModelos(novos);
              }}
              placeholder="Descrição"
            />
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Serviços Adicionais</h3>
        {servicos.map((s, i) => (
          <div key={i} className="mb-6">
            <input
              className="w-full mb-2 p-2 rounded-lg border border-pink-400"
              value={s.nome}
              onChange={(e) => {
                const novos = [...servicos];
                novos[i].nome = e.target.value;
                setServicos(novos);
              }}
              placeholder="Nome"
            />
            <input
              className="w-full mb-2 p-2 rounded-lg border border-pink-400"
              value={s.preco}
              onChange={(e) => {
                const novos = [...servicos];
                novos[i].preco = e.target.value;
                setServicos(novos);
              }}
              placeholder="Preço"
            />
            <textarea
              className="w-full p-2 rounded-lg border border-pink-400"
              value={s.descricao}
              onChange={(e) => {
                const novos = [...servicos];
                novos[i].descricao = e.target.value;
                setServicos(novos);
              }}
              placeholder="Descrição"
            />
          </div>
        ))}
      </div>

      <button
        onClick={salvarAlteracoes}
        disabled={salvando}
        className="w-full py-4 mt-6 rounded-xl text-white text-xl font-bold transition bg-black hover:bg-gray-800"
      >
        {salvando ? "Salvando..." : salvoComSucesso ? "Salvo com sucesso!" : "Salvar Alterações"}
      </button>

      {erroSalvar && (
        <p className="text-red-600 text-center mt-2 font-medium">
          Erro ao salvar. Tente novamente.
        </p>
      )}
    </div>
  );
}
