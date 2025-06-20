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

type Conteudo = {
  login: { usuario: string; senha: string };
  promocaoAtiva: boolean;
  modelos: Modelo[];
  servicosAdicionais: Servico[];
};

export default function Admin() {
  const [conteudo, setConteudo] = useState<Conteudo | null>(null);
  const [logado, setLogado] = useState(false);
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [salvoComSucesso, setSalvoComSucesso] = useState(false);
  const [erroSalvar, setErroSalvar] = useState(false);

  // Dados locais para edição
  const [promocaoAtiva, setPromocaoAtiva] = useState(false);
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [servicos, setServicos] = useState<Servico[]>([]);

  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then((res) => res.json())
      .then((data) => {
        setConteudo(data);
        setPromocaoAtiva(data.promocaoAtiva);
        setModelos(data.modelos);
        setServicos(data.servicosAdicionais);
      })
      .catch(() => alert("Erro ao carregar os dados. Tente recarregar."));
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
      setSalvoComSucesso(false);
      setErroSalvar(false);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  // Atualiza campos dos modelos
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

  // Atualiza campos dos serviços
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
      // esconde mensagem sucesso em 3s
      setTimeout(() => setSalvoComSucesso(false), 3000);
    }
  };

  if (!logado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-pink-300 p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
            Painel Admin Studio Jeise
          </h1>
          <input
            type="text"
            placeholder="Usuário"
            value={usuarioInput}
            onChange={(e) => setUsuarioInput(e.target.value)}
            className="w-full p-3 rounded border border-pink-400 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senhaInput}
            onChange={(e) => setSenhaInput(e.target.value)}
            className="w-full p-3 rounded border border-pink-400 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <button
            onClick={fazerLogin}
            className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-pink-700">Studio Jeise</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => {
              setLogado(false);
              setUsuarioInput("");
              setSenhaInput("");
              setSalvoComSucesso(false);
              setErroSalvar(false);
            }}
            className="w-full text-left text-pink-600 hover:text-pink-800 font-semibold"
          >
            Sair
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto max-h-screen">
        <h1 className="text-3xl font-bold text-pink-700 mb-6">Painel Admin</h1>

        {/* Promoção */}
        <section className="mb-10 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Promoção Ativa</h2>
          <button
            onClick={togglePromocao}
            className={`relative inline-flex items-center h-8 rounded-full w-16 transition-colors duration-300 ${
              promocaoAtiva ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <span
              className={`inline-block w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-300 ${
                promocaoAtiva ? "translate-x-8" : "translate-x-0"
              }`}
            />
          </button>
        </section>

        {/* Modelos */}
        <section className="mb-10 bg-white rounded-lg shadow p-6 max-w-5xl">
          <h2 className="text-xl font-semibold mb-4">Modelos de Cílios</h2>
          {modelos.map((modelo, i) => (
            <div
              key={i}
              className="border border-pink-300 rounded-lg p-4 mb-4 flex flex-col md:flex-row md:items-center md:gap-6"
            >
              <img
                src={modelo.img}
                alt={modelo.nome}
                className="w-28 h-28 rounded-lg object-cover border border-pink-400 shadow"
              />
              <div className="flex-1 mt-3 md:mt-0">
                <label className="block font-semibold text-pink-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={modelo.nome}
                  onChange={(e) =>
                    alterarModelo(i, "nome", e.target.value)
                  }
                  className="w-full border border-pink-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-600"
                />

                <label className="block font-semibold text-pink-700 mt-3 mb-1">
                  Preço Normal
                </label>
                <input
                  type="text"
                  value={modelo.preco}
                  onChange={(e) =>
                    alterarModelo(i, "preco", e.target.value)
                  }
                  className="w-full border border-pink-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-600"
                />

                <label className="block font-semibold text-pink-700 mt-3 mb-1">
                  Preço Promocional (Opcional)
                </label>
                <input
                  type="text"
                  value={modelo.precoPromocional ?? ""}
                  onChange={(e) =>
                    alterarModelo(i, "precoPromocional", e.target.value)
                  }
                  placeholder="Ex: R$75,00"
                  className="w-full border border-pink-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-600"
                />

                <label className="block font-semibold text-pink-700 mt-3 mb-1">
                  Descrição
                </label>
                <textarea
                  value={modelo.descricao}
                  onChange={(e) =>
                    alterarModelo(i, "descricao", e.target.value)
                  }
                  className="w-full border border-pink-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-600 resize-none"
                  rows={3}
                />
              </div>
            </div>
          ))}
        </section>

        {/* Serviços */}
        <section className="mb-10 bg-white rounded-lg shadow p-6 max-w-5xl">
          <h2 className="text-xl font-semibold mb-4">Serviços Adicionais</h2>
          {servicos.map((servico, i) => (
            <div
              key={i}
              className="border border-pink-300 rounded-lg p-4 mb-4 flex flex-col md:flex-row md:items-center md:gap-6"
            >
              <img
                src={servico.img}
                alt={servico.nome}
                className="w-28 h-28 rounded-lg object-cover border border-pink-400 shadow"
              />
              <div className="flex-1 mt-3 md:mt-0">
                <label className="block font-semibold text-pink-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={servico.nome}
                  onChange={(e) =>
                    alterarServico(i, "nome", e.target.value)
                  }
                  className="w-full border border-pink-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-600"
                />

                <label className="block font-semibold text-pink-700 mt-3 mb-1">
                  Preço
                </label>
                <input
                  type="text"
                  value={servico.preco}
                  onChange={(e) =>
                    alterarServico(i, "preco", e.target.value)
                  }
                  className="w-full border border-pink-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-600"
                />

                <label className="block font-semibold text-pink-700 mt-3 mb-1">
                  Descrição
                </label>
                <textarea
                  value={servico.descricao}
                  onChange={(e) =>
                    alterarServico(i, "descricao", e.target.value)
                  }
                  className="w-full border border-pink-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-600 resize-none"
                  rows={3}
                />
              </div>
            </div>
          ))}
        </section>

        {/* Botão salvar */}
        <div className="max-w-5xl">
          <button
            disabled={salvando}
            onClick={salvarTudo}
            className={`w-full py-3 rounded text-white font-semibold text-lg transition ${
              salvando
                ? "bg-pink-400 cursor-not-allowed"
                : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            {salvando ? "Salvando..." : "Salvar Alterações"}
          </button>

          {salvoComSucesso && (
            <p className="text-green-700 mt-2 font-semibold">
              Salvo com sucesso!
            </p>
          )}
          {erroSalvar && (
            <p className="text-red-600 mt-2 font-semibold">
              Erro ao salvar. Tente novamente.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
