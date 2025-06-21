import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

type Modelo = { nome: string; preco: string; precoPromocional?: string; descricao: string; img: string; };

type Servico = { nome: string; preco: string; precoPromocional?: string; descricao: string; img: string; };

export default function EdicaoModelos() { const [promocaoAtiva, setPromocaoAtiva] = useState(false); const [modelos, setModelos] = useState<Modelo[]>([]); const [servicos, setServicos] = useState<Servico[]>([]); const [salvando, setSalvando] = useState(false); const [salvoComSucesso, setSalvoComSucesso] = useState(false); const [erroSalvar, setErroSalvar] = useState(false);

const originalData = useRef<{ modelos: Modelo[]; servicos: Servico[]; promocaoAtiva: boolean } | null>(null);

useEffect(() => { fetch(${URL_API}/api/conteudo) .then(res => res.json()) .then(data => { setModelos(data.modelos || []); setServicos(data.servicosAdicionais || []); setPromocaoAtiva(data.promocaoAtiva); originalData.current = { modelos: data.modelos || [], servicos: data.servicosAdicionais || [], promocaoAtiva: data.promocaoAtiva, }; }) .catch(() => alert("Erro ao carregar dados")); }, []);

const alterarModelo = (index: number, campo: keyof Modelo, valor: string) => { const novos = [...modelos]; novos[index][campo] = valor; setModelos(novos); };

const removerModelo = (index: number) => { const novos = modelos.filter((_, i) => i !== index); setModelos(novos); };

const adicionarModelo = () => { setModelos([ ...modelos, { nome: "", preco: "", precoPromocional: "", descricao: "", img: "" }, ]); };

const alterarServico = (index: number, campo: keyof Servico, valor: string) => { const novos = [...servicos]; novos[index][campo] = valor; setServicos(novos); };

const removerServico = (index: number) => { const novos = servicos.filter((_, i) => i !== index); setServicos(novos); };

const adicionarServico = () => { setServicos([ ...servicos, { nome: "", preco: "", precoPromocional: "", descricao: "", img: "" }, ]); };

const salvar = async () => { setSalvando(true); setErroSalvar(false); setSalvoComSucesso(false); try { const res = await fetch(${URL_API}/api/salvar, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ modelos, servicosAdicionais: servicos, promocaoAtiva }), }); if (res.ok) { setSalvoComSucesso(true); } else { setErroSalvar(true); } } catch { setErroSalvar(true); } finally { setSalvando(false); } };

return ( <div className="space-y-16"> <div className="flex justify-between items-center"> <h2 className="text-2xl font-bold text-pink-700">Modelos de Cílios</h2> <button onClick={adicionarModelo} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"> Adicionar Modelo </button> </div> {modelos.map((modelo, i) => ( <div key={i} className="bg-white shadow rounded-3xl p-6 space-y-4"> <div className="flex justify-between"> <h3 className="font-bold text-lg text-pink-700">Modelo #{i + 1}</h3> <button onClick={() => removerModelo(i)} className="text-red-600 font-semibold">Excluir</button> </div> <label className="block font-semibold text-pink-700">Nome do Modelo</label> <input type="text" value={modelo.nome} onChange={e => alterarModelo(i, "nome", e.target.value)} className="w-full border rounded-xl px-4 py-2" />

<label className="block font-semibold text-pink-700">Link da Imagem</label>
      <input type="text" value={modelo.img} onChange={e => alterarModelo(i, "img", e.target.value)} className="w-full border rounded-xl px-4 py-2" />

      <label className="block font-semibold text-pink-700">Preço</label>
      <input type="text" value={modelo.preco} onChange={e => alterarModelo(i, "preco", e.target.value)} className="w-full border rounded-xl px-4 py-2" />

      <label className="block font-semibold text-pink-700">Preço Promocional</label>
      <input type="text" value={modelo.precoPromocional || ""} onChange={e => alterarModelo(i, "precoPromocional", e.target.value)} className="w-full border rounded-xl px-4 py-2" />

      <label className="block font-semibold text-pink-700">Descrição</label>
      <textarea value={modelo.descricao} onChange={e => alterarModelo(i, "descricao", e.target.value)} className="w-full border rounded-xl px-4 py-2 resize-y" />
    </div>
  ))}

  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-bold text-pink-700">Serviços Adicionais</h2>
    <button onClick={adicionarServico} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl">
      Adicionar Serviço
    </button>
  </div>
  {servicos.map((servico, i) => (
    <div key={i} className="bg-white shadow rounded-3xl p-6 space-y-4">
      <div className="flex justify-between">
        <h3 className="font-bold text-lg text-pink-700">Serviço #{i + 1}</h3>
        <button onClick={() => removerServico(i)} className="text-red-600 font-semibold">Excluir</button>
      </div>
      <label className="block font-semibold text-pink-700">Nome do Serviço</label>
      <input type="text" value={servico.nome} onChange={e => alterarServico(i, "nome", e.target.value)} className="w-full border rounded-xl px-4 py-2" />

      <label className="block font-semibold text-pink-700">Link da Imagem</label>
      <input type="text" value={servico.img} onChange={e => alterarServico(i, "img", e.target.value)} className="w-full border rounded-xl px-4 py-2" />

      <label className="block font-semibold text-pink-700">Preço</label>
      <input type="text" value={servico.preco} onChange={e => alterarServico(i, "preco", e.target.value)} className="w-full border rounded-xl px-4 py-2" />

      <label className="block font-semibold text-pink-700">Preço Promocional</label>
      <input type="text" value={servico.precoPromocional || ""} onChange={e => alterarServico(i, "precoPromocional", e.target.value)} className="w-full border rounded-xl px-4 py-2" />

      <label className="block font-semibold text-pink-700">Descrição</label>
      <textarea value={servico.descricao} onChange={e => alterarServico(i, "descricao", e.target.value)} className="w-full border rounded-xl px-4 py-2 resize-y" />
    </div>
  ))}

  <div className="flex flex-col gap-4 max-w-md mx-auto mt-8">
    <button onClick={salvar} className="bg-pink-600 hover:bg-pink-700 text-white rounded-xl py-4 font-bold">
      {salvando ? "Salvando..." : "Salvar Alterações"}
    </button>
    {salvoComSucesso && <p className="text-green-600 text-center font-semibold">Salvo com sucesso!</p>}
    {erroSalvar && <p className="text-red-600 text-center font-semibold">Erro ao salvar. Tente novamente.</p>}
  </div>
</div>

); }

