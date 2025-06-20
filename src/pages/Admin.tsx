import React, { useEffect, useState } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

export default function Admin() { const [conteudo, setConteudo] = useState(null); const [logado, setLogado] = useState(false); const [usuarioInput, setUsuarioInput] = useState(""); const [senhaInput, setSenhaInput] = useState(""); const [salvando, setSalvando] = useState(false); const [mensagem, setMensagem] = useState("");

useEffect(() => { fetch(${URL_API}/api/conteudo) .then((res) => res.json()) .then(setConteudo); }, []);

const fazerLogin = () => { if (usuarioInput.trim() === conteudo?.login?.usuario && senhaInput.trim() === conteudo?.login?.senha) { setLogado(true); } else { alert("Usuário ou senha incorretos"); } };

const atualizarCampo = (tipo, index, campo, valor) => { const atualizado = { ...conteudo }; if (tipo === "modelos") atualizado.modelos[index][campo] = valor; else if (tipo === "servicos") atualizado.servicosAdicionais[index][campo] = valor; setConteudo(atualizado); };

const salvarAlteracoes = async () => { setSalvando(true); try { const res = await fetch(${URL_API}/api/salvar, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(conteudo), }); const data = await res.json(); if (data.sucesso) setMensagem("✅ Alterações salvas com sucesso!"); else setMensagem("❌ Erro ao salvar alterações."); } catch { setMensagem("❌ Erro ao salvar alterações."); } finally { setSalvando(false); setTimeout(() => setMensagem(""), 3000); } };

if (!conteudo) return <p className="text-center mt-12">🔄 Carregando painel...</p>; if (!logado) { return ( <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 flex flex-col justify-center items-center p-6"> <h1 className="text-3xl font-bold mb-6">Painel Admin</h1> <input className="mb-4 p-3 rounded-xl w-full max-w-xs border border-pink-400" placeholder="Usuário" value={usuarioInput} onChange={(e) => setUsuarioInput(e.target.value)} /> <input className="mb-6 p-3 rounded-xl w-full max-w-xs border border-pink-400" type="password" placeholder="Senha" value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} /> <button
onClick={fazerLogin}
className="bg-pink-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-pink-600 transition"
> Entrar </button> </div> ); }

return ( <main className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 p-4 pb-24"> <h2 className="text-2xl font-bold text-center mb-6">🎛️ Painel de Controle</h2>

<div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
    <h3 className="text-xl font-semibold mb-2">🔥 Promoção Ativa:</h3>
    <button
      onClick={() => setConteudo({ ...conteudo, promocaoAtiva: !conteudo.promocaoAtiva })}
      className={`w-24 py-2 rounded-full font-bold transition ${
        conteudo.promocaoAtiva ? "bg-green-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      {conteudo.promocaoAtiva ? "Ativa" : "Inativa"}
    </button>
  </div>

  <div className="space-y-6">
    <h3 className="text-xl font-semibold">✨ Modelos de Cílios:</h3>
    {conteudo.modelos.map((m, i) => (
      <div key={i} className="bg-white p-4 rounded-2xl shadow-md">
        <p className="font-bold">{m.nome}</p>
        <input
          className="w-full p-2 mt-2 border rounded-xl"
          value={m.preco}
          onChange={(e) => atualizarCampo("modelos", i, "preco", e.target.value)}
        />
        <textarea
          className="w-full p-2 mt-2 border rounded-xl"
          value={m.descricao}
          onChange={(e) => atualizarCampo("modelos", i, "descricao", e.target.value)}
        />
      </div>
    ))}
  </div>

  <div className="mt-8 space-y-6">
    <h3 className="text-xl font-semibold">🧴 Serviços Adicionais:</h3>
    {conteudo.servicosAdicionais.map((s, i) => (
      <div key={i} className="bg-white p-4 rounded-2xl shadow-md">
        <p className="font-bold">{s.nome}</p>
        <input
          className="w-full p-2 mt-2 border rounded-xl"
          value={s.preco}
          onChange={(e) => atualizarCampo("servicos", i, "preco", e.target.value)}
        />
        <textarea
          className="w-full p-2 mt-2 border rounded-xl"
          value={s.descricao}
          onChange={(e) => atualizarCampo("servicos", i, "descricao", e.target.value)}
        />
      </div>
    ))}
  </div>

  <div className="mt-10 flex flex-col items-center">
    <button
      onClick={salvarAlteracoes}
      className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-3 rounded-full transition"
    >
      {salvando ? "Salvando..." : "Salvar Alterações"}
    </button>
    {mensagem && <p className="mt-4 text-center text-lg font-medium">{mensagem}</p>}
  </div>
</main>

); }

