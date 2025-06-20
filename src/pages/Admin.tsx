import React, { useEffect, useState } from "react";

function Admin() { const [conteudo, setConteudo] = useState(null); const [logado, setLogado] = useState(false); const [usuarioInput, setUsuarioInput] = useState(""); const [senhaInput, setSenhaInput] = useState(""); const [mensagem, setMensagem] = useState(""); const [salvando, setSalvando] = useState(false);

const URL_API = "https://jeiselashes.squareweb.app";

useEffect(() => { fetch(${URL_API}/api/conteudo) .then((res) => res.json()) .then(setConteudo); }, []);

const fazerLogin = () => { if (!conteudo || !conteudo.login) return alert("Aguarde os dados carregarem"); if ( usuarioInput.trim() === conteudo.login.usuario && senhaInput.trim() === conteudo.login.senha ) { setLogado(true); } else { alert("Usuário ou senha incorretos"); } };

const togglePromocao = () => { setConteudo({ ...conteudo, promocaoAtiva: !conteudo.promocaoAtiva }); };

const handleModeloChange = (index, campo, valor) => { const novos = [...conteudo.modelos]; novos[index][campo] = valor; setConteudo({ ...conteudo, modelos: novos }); };

const handleServicoChange = (index, campo, valor) => { const novos = [...conteudo.servicosAdicionais]; novos[index][campo] = valor; setConteudo({ ...conteudo, servicosAdicionais: novos }); };

const salvar = async () => { setSalvando(true); const res = await fetch(${URL_API}/api/conteudo, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(conteudo), }); if (res.ok) setMensagem("Alterações salvas com sucesso!"); else setMensagem("Erro ao salvar"); setTimeout(() => setMensagem(""), 3000); setSalvando(false); };

if (!logado) { return ( <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 px-4"> <h1 className="text-3xl font-bold mb-6">Painel Administrativo</h1> <input type="text" placeholder="Usuário" value={usuarioInput} onChange={(e) => setUsuarioInput(e.target.value)} className="p-3 mb-4 border rounded w-full max-w-sm" /> <input type="password" placeholder="Senha" value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} className="p-3 mb-4 border rounded w-full max-w-sm" /> <button
onClick={fazerLogin}
className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded"
> Entrar </button> </div> ); }

return ( <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-200 p-6 space-y-10"> <h1 className="text-4xl font-bold text-center text-pink-700">Painel de Controle do Site</h1>

{/* Promoção ativa */}
  <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-lg">
    <span className="text-xl font-medium">Promoção Ativa:</span>
    <div
      onClick={togglePromocao}
      className={`w-20 h-10 rounded-full cursor-pointer flex items-center px-1 transition duration-300 ${
        conteudo.promocaoAtiva ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div
        className={`w-8 h-8 bg-white rounded-full shadow transform transition-transform duration-300 ${
          conteudo.promocaoAtiva ? "translate-x-10" : "translate-x-0"
        }`}
      ></div>
    </div>
  </div>

  {/* Modelos de cílios */}
  <div className="space-y-10">
    <h2 className="text-3xl font-bold text-center text-pink-600">Modelos de Cílios</h2>
    {conteudo.modelos.map((m, i) => (
      <div key={i} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h3 className="text-2xl font-bold text-pink-700">Modelo {i + 1}: {m.nome}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            value={m.nome}
            onChange={(e) => handleModeloChange(i, "nome", e.target.value)}
            className="border p-3 rounded"
            placeholder="Nome"
          />
          <input
            value={m.preco}
            onChange={(e) => handleModeloChange(i, "preco", e.target.value)}
            className="border p-3 rounded"
            placeholder="Preço"
          />
          <textarea
            value={m.descricao}
            onChange={(e) => handleModeloChange(i, "descricao", e.target.value)}
            className="border p-3 rounded col-span-full"
            placeholder="Descrição"
          />
          <input
            value={m.img}
            onChange={(e) => handleModeloChange(i, "img", e.target.value)}
            className="border p-3 rounded col-span-full"
            placeholder="URL da imagem"
          />
        </div>
      </div>
    ))}
  </div>

  {/* Serviços adicionais */}
  <div className="space-y-10">
    <h2 className="text-3xl font-bold text-center text-pink-600">Serviços Adicionais</h2>
    {conteudo.servicosAdicionais.map((s, i) => (
      <div key={i} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h3 className="text-2xl font-bold text-pink-700">Serviço {i + 1}: {s.nome}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            value={s.nome}
            onChange={(e) => handleServicoChange(i, "nome", e.target.value)}
            className="border p-3 rounded"
            placeholder="Nome"
          />
          <input
            value={s.preco}
            onChange={(e) => handleServicoChange(i, "preco", e.target.value)}
            className="border p-3 rounded"
            placeholder="Preço"
          />
          <textarea
            value={s.descricao}
            onChange={(e) => handleServicoChange(i, "descricao", e.target.value)}
            className="border p-3 rounded col-span-full"
            placeholder="Descrição"
          />
          <input
            value={s.img}
            onChange={(e) => handleServicoChange(i, "img", e.target.value)}
            className="border p-3 rounded col-span-full"
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
      className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 shadow-xl text-lg"
    >
      {salvando ? "Salvando..." : "Salvar Alterações"}
    </button>
  </div>

  {mensagem && <p className="text-center text-green-600 font-semibold text-lg">{mensagem}</p>}
</div>

); }

export default Admin;

