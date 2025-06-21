import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

type Modelo = { nome: string; preco: string; precoPromocional?: string; descricao: string; img: string; };

type Servico = { nome: string; preco: string; precoPromocional?: string; descricao: string; img: string; };

export default function EdicaoModelos() { const [dadosCarregados, setDadosCarregados] = useState(false); const [promocaoAtiva, setPromocaoAtiva] = useState(false); const [modelos, setModelos] = useState<Modelo[]>([]); const [servicos, setServicos] = useState<Servico[]>([]); const [salvando, setSalvando] = useState(false); const [salvoComSucesso, setSalvoComSucesso] = useState(false); const [erroSalvar, setErroSalvar] = useState(false);

const originalData = useRef<{ promocaoAtiva: boolean; modelos: Modelo[]; servicos: Servico[] } | null>(null);

useEffect(() => { fetch(`${URL_API}/api/conteudo`) .then((res) => res.json()) .then((data) => { setPromocaoAtiva(data.promocaoAtiva); setModelos(data.modelos || []); setServicos(data.servicosAdicionais || []); originalData.current = { promocaoAtiva: data.promocaoAtiva, modelos: data.modelos || [], servicos: data.servicosAdicionais || [], }; setDadosCarregados(true); }) .catch(() => alert("Erro ao carregar os dados. Tente recarregar.")); }, []);

function alterarModelo(index: number, campo: keyof Modelo, valor: string) { const novos = [...modelos]; novos[index][campo] = valor; setModelos(novos); } function alterarServico(index: number, campo: keyof Servico, valor: string) { const novos = [...servicos]; novos[index][campo] = valor; setServicos(novos); }

function adicionarModelo() { setModelos([ ...modelos, { nome: "", preco: "", precoPromocional: "", descricao: "", img: "" }, ]); } function removerModelo(index: number) { setModelos(modelos.filter((_, i) => i !== index)); }

function adicionarServico() { setServicos([ ...servicos, { nome: "", preco: "", precoPromocional: "", descricao: "", img: "" }, ]); } function removerServico(index: number) { setServicos(servicos.filter((_, i) => i !== index)); }

function togglePromocao() { setPromocaoAtiva((prev) => !prev); }

async function salvarTudo() { setSalvando(true); setSalvoComSucesso(false); setErroSalvar(false); try { const res = await fetch(`${URL_API}/api/salvar`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ promocaoAtiva, modelos, servicosAdicionais: servicos }), }); if (res.ok) { setSalvoComSucesso(true); originalData.current = { promocaoAtiva, modelos: [...modelos], servicos: [...servicos] }; } else { setErroSalvar(true); } } catch { setErroSalvar(true); } finally { setSalvando(false); setTimeout(() => setSalvoComSucesso(false), 3000); } }

function houveAlteracoes() { if (!originalData.current) return false; if (promocaoAtiva !== originalData.current.promocaoAtiva) return true; if (JSON.stringify(modelos) !== JSON.stringify(originalData.current.modelos)) return true; if (JSON.stringify(servicos) !== JSON.stringify(originalData.current.servicos)) return true; return false; }

if (!dadosCarregados) { return <p className="text-center text-pink-700">Carregando...</p>; }

return ( <div className="space-y-16 p-6"> {/* Promoção */} <section className="bg-white rounded-3xl shadow-md p-6 flex justify-between items-center"> <h2 className="text-xl font-bold text-pink-700">Promoção Ativa</h2> <button onClick={togglePromocao} className={relative w-16 h-8 rounded-full transition-colors duration-300 ${ promocaoAtiva ? "bg-green-500" : "bg-red-500" }} > <span className={absolute top-0.5 left-1 w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-300 ${ promocaoAtiva ? "translate-x-8" : "" }} /> </button> </section>

{/* Modelos */}
  <section className="bg-white rounded-3xl shadow-md p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-pink-700">Modelos de Cílios</h2>
      <button
        onClick={adicionarModelo}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-xl"
      >
        + Adicionar Modelo
      </button>
    </div>
    <div className="space-y-8">
      {modelos.map((m, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-2xl p-6"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
            <img
              src={m.img}
              alt={m.nome}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-pink-700 mb-1">Nome do Modelo</label>
              <input
                type="text"
                value={m.nome}
                onChange={(e) => alterarModelo(i, "nome", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-pink-700 mb-1">Link da Foto</label>
              <input
                type="text"
                value={m.img}
                onChange={(e) => alterarModelo(i, "img", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-pink-700 mb-1">Preço Normal</label>
                <input
                  type="text"
                  value={m.preco}
                  onChange={(e) => alterarModelo(i, "preco", e.target.value)}
                  className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-pink-700 mb-1">Preço Promocional</label>
                <input
                  type="text"
                  value={m.precoPromocional}
                  onChange={(e) => alterarModelo(i, "precoPromocional", e.target.value)}
                  className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-pink-700 mb-1">Descrição</label>
              <textarea
                value={m.descricao}
                onChange={(e) => alterarModelo(i, "descricao", e.target.value)}
                rows={3}
                className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 resize-y"
              />
            </div>
          </div>
          <button onClick={() => removerModelo(i)} className="text-red-600 font-bold">Excluir</button>
        </div>
      ))}
    </div>
  </section>

  {/* Serviços */}
  <section className="bg-white rounded-3xl shadow-md p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-pink-700">Serviços Adicionais</h2>
      <button
        onClick={adicionarServico}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-xl"
      >
        + Adicionar Serviço
      </button>
    </div>
    <div className="space-y-8">
      {servicos.map((s, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-2xl p-6"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
            <img
              src={s.img}
              alt={s.nome}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-pink-700 mb-1">Nome do Serviço</label>
              <input
                type="text"
                value={s.nome}
                onChange={(e) => alterarServico(i, "nome", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-pink-700 mb-1">Link da Foto</label>
              <input
                type="text"
                value={s.img}
                onChange={(e) => alterarServico(i, "img", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-pink-700 mb-1">Preço</label>
                <input
                  type="text"
                  value={s.preco}
                  onChange={(e) => alterarServico(i, "preco", e.target.value)}
                  className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-pink-700 mb-1">Preço Promocional</label>
                <input
                  type="text"
                  value={s.precoPromocional}
                  onChange={(e) => alterarServico(i, "precoPromocional", e.target.value)}
                  className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-pink-700 mb-1">Descrição</label>
              <textarea
                value={s.descricao}
                onChange={(e) => alterarServico(i, "descricao", e.target.value)}
                rows={3}
                className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 resize-y"
              />
            </div>
          </div>
          <button onClick={() => removerServico(i)} className="text-red-600 font-bold">Excluir</button>
        </div>
      ))}
    </div>
  </section>

  {/* Ações de salvar */}
  <div className="flex flex-col items-center mt-8 space-y-4">
    <button
      onClick={salvarTudo}
      disabled={salvando || !houveAlteracoes()}
      className={`w-full max-w-md py-4 rounded-2xl font-bold text-white transition ${salvando || !houveAlteracoes() ? "bg-pink-300 cursor-not-allowed" : "bg-pink-700 hover:bg-pink-800"}`}
    >
      {salvando ? "Salvando..." : "Salvar Alterações"}
    </button>
    {salvoComSucesso && <p className="text-green-600">Salvo com sucesso!</p>}
    {erroSalvar && <p className="text-red-600">Erro ao salvar. Tente novamente.</p>}
  </div>
</div>

); }

