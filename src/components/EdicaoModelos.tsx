import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

export default function EdicaoModelos() { const [promocaoAtiva, setPromocaoAtiva] = useState(false); const [modelos, setModelos] = useState([]); const [servicos, setServicos] = useState([]); const [salvando, setSalvando] = useState(false); const [salvoComSucesso, setSalvoComSucesso] = useState(false); const [erroSalvar, setErroSalvar] = useState(false);

const originalData = useRef(null);

useEffect(() => { fetch(`${URL_API}/api/conteudo`) .then((res) => res.json()) .then((data) => { setPromocaoAtiva(data.promocaoAtiva); setModelos(data.modelos || []); setServicos(data.servicosAdicionais || []); originalData.current = { promocaoAtiva: data.promocaoAtiva, modelos: data.modelos || [], servicos: data.servicosAdicionais || [], }; }); }, []);

const alterarItem = (lista, setLista, index, campo, valor) => { const novaLista = [...lista]; novaLista[index][campo] = valor; setLista(novaLista); };

const adicionarModelo = () => { setModelos([ ...modelos, { nome: "", preco: "", precoPromocional: "", descricao: "", img: "", }, ]); };

const removerModelo = (index) => { const novos = modelos.filter((_, i) => i !== index); setModelos(novos); };

const adicionarServico = () => { setServicos([ ...servicos, { nome: "", preco: "", precoPromocional: "", descricao: "", img: "", }, ]); };

const removerServico = (index) => { const novos = servicos.filter((_, i) => i !== index); setServicos(novos); };

const salvar = async () => { setSalvando(true); setSalvoComSucesso(false); setErroSalvar(false);

try {
  const res = await fetch(`${URL_API}/api/salvar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      promocaoAtiva,
      modelos,
      servicosAdicionais: servicos,
    }),
  });
  if (res.ok) setSalvoComSucesso(true);
  else setErroSalvar(true);
} catch {
  setErroSalvar(true);
} finally {
  setSalvando(false);
  setTimeout(() => setSalvoComSucesso(false), 3000);
}

};

return ( <div className="space-y-12"> <section className="bg-white rounded-3xl p-6 shadow"> <div className="flex justify-between items-center"> <h2 className="text-xl font-bold text-pink-700">Promoção Ativa</h2> <button onClick={() => setPromocaoAtiva(!promocaoAtiva)} className={w-16 h-8 rounded-full transition-colors ${ promocaoAtiva ? "bg-green-500" : "bg-red-500" }} > <span className={block w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-300 ${ promocaoAtiva ? "translate-x-8" : "" }} /> </button> </div> </section>

<section>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-pink-700">Modelos de Cílios</h2>
      <button
        onClick={adicionarModelo}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl"
      >
        Adicionar Modelo
      </button>
    </div>
    <div className="space-y-8">
      {modelos.map((m, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl shadow p-6 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-pink-400">
            <img src={m.img} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label className="block font-semibold text-pink-700">Nome do Modelo</label>
              <input
                type="text"
                value={m.nome}
                onChange={(e) => alterarItem(modelos, setModelos, i, "nome", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-pink-700">Link da Foto</label>
              <input
                type="text"
                value={m.img}
                onChange={(e) => alterarItem(modelos, setModelos, i, "img", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-pink-700">Preço</label>
              <input
                type="text"
                value={m.preco}
                onChange={(e) => alterarItem(modelos, setModelos, i, "preco", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-pink-700">Preço Promocional</label>
              <input
                type="text"
                value={m.precoPromocional}
                onChange={(e) => alterarItem(modelos, setModelos, i, "precoPromocional", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-pink-700">Descrição</label>
              <textarea
                value={m.descricao}
                onChange={(e) => alterarItem(modelos, setModelos, i, "descricao", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
          </div>
          <button
            onClick={() => removerModelo(i)}
            className="text-red-600 font-bold underline hover:text-red-800"
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  </section>

  <section>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-pink-700">Serviços Adicionais</h2>
      <button
        onClick={adicionarServico}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl"
      >
        Adicionar Serviço
      </button>
    </div>
    <div className="space-y-8">
      {servicos.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl shadow p-6 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-pink-400">
            <img src={s.img} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label className="block font-semibold text-pink-700">Nome do Serviço</label>
              <input
                type="text"
                value={s.nome}
                onChange={(e) => alterarItem(servicos, setServicos, i, "nome", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-pink-700">Link da Foto</label>
              <input
                type="text"
                value={s.img}
                onChange={(e) => alterarItem(servicos, setServicos, i, "img", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-pink-700">Preço</label>
              <input
                type="text"
                value={s.preco}
                onChange={(e) => alterarItem(servicos, setServicos, i, "preco", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-pink-700">Preço Promocional</label>
              <input
                type="text"
                value={s.precoPromocional}
                onChange={(e) => alterarItem(servicos, setServicos, i, "precoPromocional", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-pink-700">Descrição</label>
              <textarea
                value={s.descricao}
                onChange={(e) => alterarItem(servicos, setServicos, i, "descricao", e.target.value)}
                className="w-full rounded-xl border border-pink-300 px-4 py-2"
              />
            </div>
          </div>
          <button
            onClick={() => removerServico(i)}
            className="text-red-600 font-bold underline hover:text-red-800"
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  </section>

  <div className="text-center mt-12">
    <button
      onClick={salvar}
      disabled={salvando}
      className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-4 px-6 rounded-3xl"
    >
      {salvando ? "Salvando..." : "Salvar Alterações"}
    </button>
    {salvoComSucesso && (
      <p className="text-green-600 mt-4">Salvo com sucesso!</p>
    )}
    {erroSalvar && (
      <p className="text-red-600 mt-4">Erro ao salvar. Tente novamente.</p>
    )}
  </div>
</div>

); }

