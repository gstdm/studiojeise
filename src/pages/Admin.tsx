import React, { useEffect, useState } from "react";

function Admin() {
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [logado, setLogado] = useState(false);
  const [conteudo, setConteudo] = useState(null);
  const [jsonEdit, setJsonEdit] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const URL_API = "https://jeiselashes.squareweb.app";

  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then((res) => res.json())
      .then((data) => setConteudo(data))
      .catch((err) => console.error("Erro ao carregar conteúdo:", err));
  }, []);

  const fazerLogin = () => {
    if (!conteudo || !conteudo.login) {
      alert("Aguarde o carregamento dos dados.");
      return;
    }

    if (
      usuarioInput.trim() === conteudo.login.usuario &&
      senhaInput.trim() === conteudo.login.senha
    ) {
      setLogado(true);
      setJsonEdit(JSON.stringify(conteudo, null, 2));
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const salvarAlteracoes = async () => {
    try {
      setSalvando(true);
      const atualizado = JSON.parse(jsonEdit);

      const res = await fetch(`${URL_API}/api/conteudo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(atualizado),
      });

      if (res.ok) {
        setMensagem("Conteúdo salvo com sucesso!");
        setTimeout(() => setMensagem(""), 3000);
      } else {
        throw new Error("Erro ao salvar.");
      }
    } catch (err) {
      alert("Erro ao salvar alterações: " + err.message);
    } finally {
      setSalvando(false);
    }
  };

  if (!logado) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 px-4">
        <h1 className="text-3xl font-bold mb-6">Painel Administrativo</h1>
        <input
          type="text"
          placeholder="Usuário"
          value={usuarioInput}
          onChange={(e) => setUsuarioInput(e.target.value)}
          className="p-3 mb-4 border rounded w-full max-w-sm"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senhaInput}
          onChange={(e) => setSenhaInput(e.target.value)}
          className="p-3 mb-4 border rounded w-full max-w-sm"
        />
        <button
          onClick={fazerLogin}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded"
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Editar Conteúdo</h1>

      <textarea
        value={jsonEdit}
        onChange={(e) => setJsonEdit(e.target.value)}
        rows={30}
        className="w-full p-4 border rounded font-mono text-sm"
      />

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={salvarAlteracoes}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
          disabled={salvando}
        >
          {salvando ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>

      {mensagem && (
        <p className="text-center text-green-600 mt-4 font-semibold">{mensagem}</p>
      )}
    </div>
  );
}

export default Admin;
