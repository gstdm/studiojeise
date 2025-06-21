import React, { useState, useEffect, useRef } from "react";
import EdicaoModelos from "../components/EdicaoModelos";
import EdicaoHome from "../components/EdicaoHome";
import Cookies from "js-cookie";

const COOKIE_LOGADO = "admin_logado_jeise";

export default function Admin() {
  const [logado, setLogado] = useState(false);
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [abaSelecionada, setAbaSelecionada] = useState<"modelos" | "home" | null>(null);
  const [salvando, setSalvando] = useState(false);
  const [salvoComSucesso, setSalvoComSucesso] = useState(false);
  const [erroSalvar, setErroSalvar] = useState(false);

  // refs para chamar as funções salvar e verificar alteração nos filhos
  const modelosRef = useRef<{ salvar: () => Promise<boolean>; houveAlteracoes: () => boolean } | null>(null);
  const homeRef = useRef<{ salvar: () => Promise<boolean>; houveAlteracoes: () => boolean } | null>(null);

  useEffect(() => {
    // Verifica cookie de login ao montar componente
    const logadoCookie = Cookies.get(COOKIE_LOGADO);
    if (logadoCookie === "true") {
      setLogado(true);
    }
  }, []);

  const fazerLogin = () => {
    if (usuarioInput.trim() === "Jeise" && senhaInput.trim() === "123456") {
      setLogado(true);
      Cookies.set(COOKIE_LOGADO, "true", { expires: 7 }); // cookie por 7 dias
      setErroSalvar(false);
      setSalvoComSucesso(false);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const fazerLogout = () => {
    setLogado(false);
    Cookies.remove(COOKIE_LOGADO);
    setAbaSelecionada(null);
    setUsuarioInput("");
    setSenhaInput("");
  };

  // Função salvar geral que chama a função salvar da aba ativa
  const salvarAlteracoes = async () => {
    setSalvando(true);
    setSalvoComSucesso(false);
    setErroSalvar(false);

    try {
      let sucesso = false;
      if (abaSelecionada === "modelos" && modelosRef.current) {
        sucesso = await modelosRef.current.salvar();
      } else if (abaSelecionada === "home" && homeRef.current) {
        sucesso = await homeRef.current.salvar();
      }
      if (sucesso) {
        setSalvoComSucesso(true);
        setTimeout(() => setSalvoComSucesso(false), 3000);
      } else {
        setErroSalvar(true);
      }
    } catch {
      setErroSalvar(true);
    } finally {
      setSalvando(false);
    }
  };

  // Função para alternar abas e resetar mensagens
  const trocarAba = () => {
    setSalvoComSucesso(false);
    setErroSalvar(false);
    if (abaSelecionada === "modelos") setAbaSelecionada("home");
    else if (abaSelecionada === "home") setAbaSelecionada("modelos");
  };

  // Função para verificar se há alterações na aba ativa
  const houveAlteracoesAtivas = () => {
    if (abaSelecionada === "modelos" && modelosRef.current) {
      return modelosRef.current.houveAlteracoes();
    } else if (abaSelecionada === "home" && homeRef.current) {
      return homeRef.current.houveAlteracoes();
    }
    return false;
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
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 p-6 flex flex-col">
      {/* Navbar fixa */}
      <nav className="flex justify-between items-center bg-white rounded-xl shadow-md px-6 py-3 mb-6 sticky top-0 z-50">
        <h1 className="text-xl font-bold text-pink-700 select-none">
          Painel Admin Studio Jeise
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={salvarAlteracoes}
            disabled={!houveAlteracoesAtivas() || salvando}
            className={`px-5 py-2 rounded-2xl font-semibold text-white transition ${
              houveAlteracoesAtivas() && !salvando
                ? "bg-pink-700 hover:bg-pink-800"
                : "bg-pink-300 cursor-not-allowed"
            }`}
          >
            {salvando ? "Salvando..." : "Salvar alterações"}
          </button>

          <button
            onClick={trocarAba}
            className="px-5 py-2 rounded-2xl font-semibold bg-pink-400 hover:bg-pink-500 text-white transition"
            title={`Ir para a aba ${abaSelecionada === "modelos" ? "Página Inicial" : "Modelos"}`}
          >
            {abaSelecionada === "modelos" ? "Editar Página Inicial" : "Editar Modelos"}
          </button>

          <button
            onClick={fazerLogout}
            className="px-5 py-2 rounded-2xl font-semibold bg-red-500 hover:bg-red-600 text-white transition"
            title="Sair do painel"
          >
            Sair
          </button>
        </div>
      </nav>

      {!abaSelecionada && (
        <div className="max-w-sm mx-auto flex flex-col gap-6">
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
        </div>
      )}

      {abaSelecionada === "modelos" && <EdicaoModelos ref={modelosRef} />}
      {abaSelecionada === "home" && <EdicaoHome ref={homeRef} />}
      
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
