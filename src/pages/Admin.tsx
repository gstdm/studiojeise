import React, { useEffect, useState } from "react";

function Admin() { const [conteudo, setConteudo] = useState(null); const [logado, setLogado] = useState(false); const [usuarioInput, setUsuarioInput] = useState(""); const [senhaInput, setSenhaInput] = useState(""); const [mensagem, setMensagem] = useState(""); const [salvando, setSalvando] = useState(false);

const URL_API = "https://jeiselashes.squareweb.app";

useEffect(() => { fetch(${URL_API}/api/conteudo) .then((res) => res.json()) .then(setConteudo); }, []);

const fazerLogin = () => { if (!conteudo || !conteudo.login) return alert("Aguarde os dados carregarem"); if ( usuarioInput.trim() === conteudo.login.usuario && senhaInput.trim() === conteudo.login.senha ) { setLogado(true); } else { alert("Usuário ou senha incorretos"); } };

const togglePromocao = () => { setConteudo({ ...conteudo, promocaoAtiva: !conteudo.promocaoAtiva }); };

const handleModeloChange = (index, campo, valor) => { const novosModelos = [...conteudo.modelos]; novosModelos[index][campo] = valor; setConteudo({ ...conteudo, modelos: novosModelos }); };

const salvar = async () => { setSalvando(true); const res = await fetch(${URL_API}/api/conteudo, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(conteudo), }); if (res.ok) setMensagem("Alterações salvas com sucesso!"); else setMensagem("Erro ao salvar"); setTimeout(() => setMensagem(""), 3000); setSalvando(false); };

if (!logado) { return ( <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 px-4"> <h1 className="text-3xl font-bold mb-6">Painel Administrativo</h1> <input type="text" placeholder="Usuário" value={usuarioInput} onChange={(e) => setUsuarioInput(e.target.value)} className="p-3 mb-4 border rounded w-full max-w-sm" /> <input type="password" placeholder="Senha" value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} className="p-3 mb-4 border rounded w-full max-w-sm" /> <button
onClick={fazerLogin}
className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded"
> Entrar </button> </div> ); }

return ( <div className="min-h-screen bg-pink-50 p-6 space-y-6"> <h1 className="text-3xl font-bold text-center">Painel de Gerenciamento</h1>

{/* Promoção ativa */}
  <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
    <span className="text-xl font-medium">Promoção Ativa:</span>
    <button
      onClick={togglePromocao}
      className={`w-20 h-10 rounded-full transition duration-300 ${
        conteudo.promocaoAtiva ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div
        className={`w-8 h-8 bg-white rounded-full shadow transform transition-transform duration-300 ${
          conteudo.promocaoAtiva ? "translate-x-10" : "translate-x-0"
        }`}
      ></div>
    </button>
  </div>

  {/* Modelos */}
  <div className="space-y-6">
    {conteudo.modelos.map((m, i) => (
      <div key={i} className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Modelo {i + 1}: {m.nome}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            value={m.nome}
            onChange={(e) => handleModeloChange(i, "nome", e.target.value)}
            className="border p-2 rounded"
            placeholder="Nome"
          />
          <input
            value={m.preco}
            onChange={(e) => handleModeloChange(i, "preco", e.target.value)}
            className="border p-2 rounded"
            placeholder="Preço"
          />
          <textarea
            value={m.descricao}
            onChange={(e) => handleModeloChange(i, "descricao", e.target.value)}
            className="border p-2 rounded col-span-full"
            placeholder="Descrição"
          />
          <input
            value={m.img}
            onChange={(e) => handleModeloChange(i, "img", e.target.value)}
            className="border p-2 rounded col-span-full"
            placeholder="URL da imagem"
          />
        </div>
      </div>
    ))}
  </div>

  {/* Botão de salvar */}
  <div className="flex justify-center">
    <button
      onClick={salvar}
      disabled={salvando}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow"
    >
      {salvando ? "Salvando..." : "Salvar Alterações"}
    </button>
  </div>

  {mensagem && <p className="text-center text-green-600 font-semibold">{mensagem}</p>}
</div>

); }

export default Admin;

