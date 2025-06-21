import React, { useState } from "react";

export default function Admin() {
  const [logado, setLogado] = useState(false);
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [abaSelecionada, setAbaSelecionada] = useState<"modelos" | "home" | null>(null);
  const [salvando, setSalvando] = useState(false);
  const [salvoComSucesso, setSalvoComSucesso] = useState(false);
  const [erroSalvar, setErroSalvar] = useState(false);

  const fazerLogin = () => {
    if (usuarioInput.trim() === "Jeise" && senhaInput.trim() === "123456") {
      setLogado(true);
      setErroSalvar(false);
      setSalvoComSucesso(false);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const fazerLogout = () => {
    setLogado(false);
    setAbaSelecionada(null);
    setUsuarioInput("");
    setSenhaInput("");
  };

  // Placeholder para o salvar — será implementado nos componentes depois
  const salvarAlteracoes = async () => {
    setSalvando(true);
    setSalvoComSucesso(false);
    setErroSalvar(false);
    try {
      // Simula salvar
      await new Promise((r) => setTimeout(r, 1000));
      setSalvoComSucesso(true);
      setTimeout(() => setSalvoComSucesso(false), 3000);
    } catch {
      setErroSalvar(true);
    } finally {
      setSalvando(false);
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
            className="w-full py-4 rounded-xl font-semibold text-white text-lg bg-pink-600 hover:bg-pink-700 transition"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-pink-700 mb-8">
        Painel Admin Studio Jeise
      </h1>

      <div className="flex flex-col gap-6 max-w-sm w-full">
        {!abaSelecionada && (
          <>
            <button
              onClick={() => setAbaSelecionada("modelos")}
              className="bg-pink-600 hover:bg-pink-700 text-white rounded-3xl py-4 font-semibold text-xl transition"
            >
              Editar página de modelos
            </button>
            <button
              onClick={() => setAbaSelecionada("home")}
              className="bg-pink-600 hover:bg-pink-700 text-white rounded-3xl py-4 font-semibold text-xl transition"
            >
              Editar página inicial
            </button>
            <button
              onClick={fazerLogout}
              className="bg-red-500 hover:bg-red-600 text-white rounded-3xl py-4 font-semibold text-xl transition"
            >
              Sair
            </button>
          </>
        )}

        {abaSelecionada === "modelos" && (
          <div className="w-full">
            <p className="mb-4 font-semibold text-pink-700">Aqui vai o componente <code>EdicaoModelos</code></p>
            <button
              onClick={() => setAbaSelecionada(null)}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl py-2 px-4"
            >
              Voltar
            </button>
          </div>
        )}

        {abaSelecionada === "home" && (
          <div className="w-full">
            <p className="mb-4 font-semibold text-pink-700">Aqui vai o componente <code>EdicaoHome</code></p>
            <button
              onClick={() => setAbaSelecionada(null)}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl py-2 px-4"
            >
              Voltar
            </button>
          </div>
        )}
      </div>

      {salvoComSucesso && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-3xl shadow-lg font-semibold select-none">
          Salvo com sucesso!
        </div>
      )}
      {erroSalvar && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-3xl shadow-lg font-semibold select-none">
          Erro ao salvar. Tente novamente.
        </div>
      )}
    </div>
  );
}
