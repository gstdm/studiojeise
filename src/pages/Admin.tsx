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
  precoPromocional?: string;
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
        setModelos(data.modelos || []);
        setServicos(data.servicosAdicionais || []);
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
    campo: keyof Servico | "precoPromocional",
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
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header e logout */}
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

        {/* Promoção */}
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

        {/* Modelos */}
        <section className="mb-16 space-y-10">
          <h2 className="text-2xl font-bold text-pink-700 mb-6">
            Modelos de Cílios
          </h2>
          {modelos.map((modelo, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-6 bg-white rounded-3xl shadow-lg p-6"
            >
              {/* Imagem arredondada */}
              <div className="relative flex-shrink-0 w-36 h-36 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
                <img
                  src={modelo.img}
                  alt={modelo.nome}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Dados do modelo */}
              <div className="flex-1">
                <label className="block font-semibold text-pink-700 mb-2">
                  Nome do Modelo
                </label>
                <input
                  type="text"
                  value={modelo.nome}
                  onChange={(e) => alterarModelo(i, "nome", e.target.value)}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 mb-4 focus:outline-none focus:ring-4 focus:ring-pink-500"
                />

                <label className="block font-semibold text-pink-700 mb-2">
                  Link da Foto
                </label>
                <input
                  type="text"
                  value={modelo.img}
                  onChange={(e) => alterarModelo(i, "img", e.target.value)}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 mb-6 focus:outline-none focus:ring-4 focus:ring-pink-500"
                />

                <label className="block font-semibold text-pink-700 mb-2">
                  Preço Normal
                </label>
                <input
                  type="text"
                  value={modelo.preco}
                  onChange={(e) => alterarModelo(i, "preco", e.target.value)}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 mb-2 focus:outline-none focus:ring-4 focus:ring-pink-500"
                />

                <label className="block font-semibold text-pink-700 mb-2">
                  Preço Promocional (Opcional)
                </label>
                <input
                  type="text"
                  value={modelo.precoPromocional ?? ""}
                  onChange={(e) =>
                    alterarModelo(i, "precoPromocional", e.target.value)
                  }
                  placeholder="Ex: R$75,00"
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 mb-4 focus:outline-none focus:ring-4 focus:ring-pink-500"
                />

                <label className="block font-semibold text-pink-700 mb-2">
                  Descrição
                </label>
                <textarea
                  value={modelo.descricao}
                  onChange={(e) => alterarModelo(i, "descricao", e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 resize-none focus:outline-none focus:ring-4 focus:ring-pink-500"
                  placeholder="Descrição do modelo"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Serviços */}
        <section className="mb-12 space-y-10">
          <h2 className="text-2xl font-bold text-pink-700 mb-6">
            Serviços Adicionais
          </h2>
          {servicos.map((servico, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-6 bg-white rounded-3xl shadow-lg p-6"
            >
              {/* Imagem arredondada */}
              <div className="relative flex-shrink-0 w-36 h-36 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
                <img
                  src={servico.img}
                  alt={servico.nome}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Dados do serviço */}
              <div className="flex-1">
                <label className="block font-semibold text-pink-700 mb-2">
                  Nome do Serviço
                </label>
                <input
                  type="text"
                  value={servico.nome}
                  onChange={(e) => alterarServico(i, "nome", e.target.value)}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 mb-4 focus:outline-none focus:ring-4 focus:ring-pink-500"
                />

                <label className="block font-semibold text-pink-700 mb-2">
                  Link da Foto
                </label>
                <input
                  type="text"
                  value={servico.img}
                  onChange={(e) => alterarServico(i, "img", e.target.value)}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 mb-6 focus:outline-none focus:ring-4 focus:ring-pink-500"
                />

                <label className="block font-semibold text-pink-700 mb-2">
                  Preço Normal
                </label>
                <input
                  type="text"
                  value={servico.preco}
                  onChange={(e) => alterarServico(i, "preco", e.target.value)}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 mb-2 focus:outline-none focus:ring-4 focus:ring-pink-500"
                />

                <label className="block font-semibold text-pink-700 mb-2">
                  Preço Promocional (Opcional)
                </label>
                <input
                  type="text"
                  value={servico.precoPromocional ?? ""}
                  onChange={(e) =>
                    alterarServico(i, "precoPromocional", e.target.value)
                  }
                  placeholder="Ex: R$75,00"
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 mb-4 focus:outline-none focus:ring-4 focus:ring-pink-500"
                />

                <label className="block font-semibold text-pink-700 mb-2">
                  Descrição
                </label>
                <textarea
                  value={servico.descricao}
                  onChange={(e) => alterarServico(i, "descricao", e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 resize-none focus:outline-none focus:ring-4 focus:ring-pink-500"
                  placeholder="Descrição do serviço"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Botão salvar */}
        <div className="max-w-sm mx-auto">
          <button
            onClick={salvarTudo}
            disabled={salvando}
            className={`w-full py-4 rounded-3xl font-bold text-white text-lg transition ${
              salvando
                ? "bg-pink-300 cursor-not-allowed"
                : "bg-pink-700 hover:bg-pink-800"
            }`}
          >
            {salvando ? "Salvando..." : "Salvar Alterações"}
          </button>

          {salvoComSucesso && (
            <p className="text-green-700 mt-4 text-center font-semibold">
              Salvo com sucesso!
            </p>
          )}
          {erroSalvar && (
            <p className="text-red-600 mt-4 text-center font-semibold">
              Erro ao salvar. Tente novamente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
