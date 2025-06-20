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

type ConteudoSite = {
  usuario: string;
  senha: string;
  promocaoAtiva: boolean;
  modelos: Modelo[];
  servicosAdicionais: Servico[];
};

function Admin() {
  const [conteudo, setConteudo] = useState<ConteudoSite | null>(null);
  const [logado, setLogado] = useState(false);
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [editando, setEditando] = useState(false);
  const [jsonEdit, setJsonEdit] = useState("");

  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then((res) => res.json())
      .then((data) => setConteudo(data))
      .catch((err) => console.error("Erro ao carregar dados:", err));
  }, []);

  const fazerLogin = () => {
    if (!conteudo) return alert("Conteúdo não carregado ainda");
    if (usuarioInput === conteudo.usuario && senhaInput === conteudo.senha) {
      setLogado(true);
      setJsonEdit(JSON.stringify(conteudo, null, 2));
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const salvarAlteracoes = () => {
    try {
      const novoConteudo = JSON.parse(jsonEdit);
      fetch(`${URL_API}/api/salvar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoConteudo),
      })
        .then((res) => res.json())
        .then((resp) => {
          if (resp.ok) {
            alert("Dados salvos com sucesso!");
            setConteudo(novoConteudo);
            setEditando(false);
          } else {
            alert("Erro ao salvar os dados");
          }
        });
    } catch (error) {
      alert("JSON inválido");
    }
  };

  if (!logado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800 p-6">
        <h1 className="text-4xl font-bold mb-8">Painel Admin - Login</h1>
        <input
          type="text"
          placeholder="Usuário"
          className="mb-4 p-2 rounded border border-pink-400 w-64"
          value={usuarioInput}
          onChange={(e) => setUsuarioInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="mb-6 p-2 rounded border border-pink-400 w-64"
          value={senhaInput}
          onChange={(e) => setSenhaInput(e.target.value)}
        />
        <button
          onClick={fazerLogin}
          className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Painel Admin</h1>

      {!editando ? (
        <>
          <pre className="whitespace-pre-wrap bg-white p-4 rounded shadow max-h-[60vh] overflow-auto">
            {JSON.stringify(conteudo, null, 2)}
          </pre>
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => setEditando(true)}
              className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              Editar JSON
            </button>
            <button
              onClick={() => {
                setLogado(false);
                setUsuarioInput("");
                setSenhaInput("");
                setConteudo(null);
              }}
              className="px-6 py-2 bg-gray-400 text-black rounded hover:bg-gray-500"
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <textarea
            className="w-full h-[60vh] p-4 rounded border border-pink-400 font-mono text-sm"
            value={jsonEdit}
            onChange={(e) => setJsonEdit(e.target.value)}
          />
          <div className="mt-4 flex gap-4">
            <button
              onClick={salvarAlteracoes}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Salvar
            </button>
            <button
              onClick={() => setEditando(false)}
              className="px-6 py-2 bg-gray-400 text-black rounded hover:bg-gray-500"
            >
              Cancelar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;
