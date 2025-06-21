import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

type Modelo = { nome: string; preco: string; precoPromocional?: string; descricao: string; img: string; };

type Servico = { nome: string; preco: string; precoPromocional?: string; descricao: string; img: string; };

export default function EdicaoModelos(): JSX.Element { // Estado de carregamento inicial const [dadosCarregados, setDadosCarregados] = useState<boolean>(false);

// Estado de promoção const [promocaoAtiva, setPromocaoAtiva] = useState<boolean>(false);

// Listas de modelos e serviços const [modelos, setModelos] = useState<Modelo[]>([]); const [servicos, setServicos] = useState<Servico[]>([]);

// Estados de salvamento const [salvando, setSalvando] = useState<boolean>(false); const [salvoComSucesso, setSalvoComSucesso] = useState<boolean>(false); const [erroSalvar, setErroSalvar] = useState<boolean>(false);

// Guardar dados originais para comparação const originalData = useRef<{ promocaoAtiva: boolean; modelos: Modelo[]; servicos: Servico[] } | null>(null);

// Fetch inicial dos dados da API useEffect(() => { fetch(${URL_API}/api/conteudo) .then((res) => res.json()) .then((data) => { setPromocaoAtiva(data.promocaoAtiva); setModelos(data.modelos || []); setServicos(data.servicosAdicionais || []); originalData.current = { promocaoAtiva: data.promocaoAtiva, modelos: data.modelos || [], servicos: data.servicosAdicionais || [], }; setDadosCarregados(true); }) .catch(() => alert("Erro ao carregar os dados. Tente recarregar.")); }, []);

// -------------------------------------------------------------------------- // Funções para alterar campos // --------------------------------------------------------------------------

function alterarModelo(index: number, campo: keyof Modelo, valor: string): void { const novos = [...modelos]; novos[index][campo] = valor; setModelos(novos); }

function alterarServico(index: number, campo: keyof Servico, valor: string): void { const novos = [...servicos]; novos[index][campo] = valor; setServicos(novos); }

// -------------------------------------------------------------------------- // Funções para adicionar e remover itens // --------------------------------------------------------------------------

function adicionarModelo(): void { const novo: Modelo = { nome: "", preco: "", precoPromocional: "", descricao: "", img: "", }; setModelos([...modelos, novo]); }

function removerModelo(index: number): void { const filtrados = modelos.filter((_, i) => i !== index); setModelos(filtrados); }

function adicionarServico(): void { const novo: Servico = { nome: "", preco: "", precoPromocional: "", descricao: "", img: "", }; setServicos([...servicos, novo]); }

function removerServico(index: number): void { const filtrados = servicos.filter((_, i) => i !== index); setServicos(filtrados); }

// -------------------------------------------------------------------------- // Toggle promoção // --------------------------------------------------------------------------

function togglePromocao(): void { setPromocaoAtiva((prev) => !prev); }

// -------------------------------------------------------------------------- // Função salvar no backend // --------------------------------------------------------------------------

async function salvarTudo(): Promise<void> { setSalvando(true); setSalvoComSucesso(false); setErroSalvar(false);

const corpo = {
  promocaoAtiva: promocaoAtiva,
  modelos: modelos,
  servicosAdicionais: servicos,
};

try {
  const resposta = await fetch(`${URL_API}/api/salvar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(corpo),
  });

  if (resposta.ok) {
    setSalvoComSucesso(true);
    originalData.current = {
      promocaoAtiva: promocaoAtiva,
      modelos: [...modelos],
      servicos: [...servicos],
    };
  } else {
    setErroSalvar(true);
  }
} catch (error) {
  console.error(error);
  setErroSalvar(true);
} finally {
  setSalvando(false);
  setTimeout(() => setSalvoComSucesso(false), 3000);
}

}

// -------------------------------------------------------------------------- // Função para detectar alterações // --------------------------------------------------------------------------

function houveAlteracoes(): boolean { if (!originalData.current) { return false; } if (promocaoAtiva !== originalData.current.promocaoAtiva) { return true; } if (JSON.stringify(modelos) !== JSON.stringify(originalData.current.modelos)) { return true; } if (JSON.stringify(servicos) !== JSON.stringify(originalData.current.servicos)) { return true; } return false; }

// -------------------------------------------------------------------------- // Renderização enquanto carrega dados // --------------------------------------------------------------------------

if (!dadosCarregados) { return ( <div className="w-full p-6"> <p className="text-center text-pink-700">Carregando dados...</p> </div> ); }

// -------------------------------------------------------------------------- // JSX principal - largura total para mobile // --------------------------------------------------------------------------

return ( <div className="w-full p-4 bg-pink-50 min-h-screen"> {/* Promoção */} <section className="w-full bg-white rounded-3xl shadow-md p-6 mb-8 flex justify-between items-center"> <h2 className="text-xl font-bold text-pink-700">Promoção Ativa</h2> <button onClick={togglePromocao} className={relative w-16 h-8 rounded-full transition-colors duration-300 ${ promocaoAtiva ? "bg-green-500" : "bg-red-500" }} > <span className={absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${ promocaoAtiva ? "translate-x-8" : "" }} ></span> </button> </section>

{/* Seção Modelos - tela cheia */}
  <section className="w-full bg-white rounded-3xl shadow-md p-6 mb-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-pink-700">Modelos de Cílios</h2>
      <button
        onClick={adicionarModelo}
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-xl"
      >
        + Adicionar Modelo
      </button>
    </div>

    <div className="space-y-6">
      {modelos.map((modelo, idx) => (
        <div
          key={idx}
          className="w-full bg-gray-50 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-400">
            <img
              src={modelo.img}
              alt={modelo.nome}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">
                Nome do Modelo
              </label>
              <input
                type="text"
                value={modelo.nome}
                onChange={(e) => alterarModelo(idx, "nome", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">
                Link da Foto
              </label>
              <input
                type="text"
                value={modelo.img}
                onChange={(e) => alterarModelo(idx, "img", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Preço Normal
                </label>
                <input
                  type="text"
                  value={modelo.preco}
                  onChange={(e) => alterarModelo(idx, "preco", e.target.value)}
                  className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Preço Promocional
                </label>
                <input
                  type="text"
                  value={modelo.precoPromocional || ""}
                  onChange={(e) => alterarModelo(idx, "precoPromocional", e.target.value)}
                  className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">
                Descrição
              </label>
              <textarea
                rows={3}
                value={modelo.descricao}
                onChange={(e) => alterarModelo(idx, "descricao", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500 resize-y"
              ></textarea>
            </div>
          </div>
          <button
            onClick={() => removerModelo(idx)}
            className="text-red-600 font-semibold hover:text-red-800"
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  </section>

  {/* Seção Serviços Adicionais - tela cheia */}
  <section className="w-full bg-white rounded-3xl shadow-md p-6 mb-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-pink-700">Serviços Adicionais</h2>
      <button
        onClick={adicionarServico}
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-xl"
      >
        + Adicionar Serviço
      </button>
    </div>
    <div className="space-y-6">
      {servicos.map((servico, idx) => (
        <div
          key={idx}
          className="w-full bg-gray-50 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-400">
            <img
              src={servico.img}
              alt={servico.nome}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">
                Nome do Serviço
              </label>
              <input
                type="text"
                value={servico.nome}
                onChange={(e) => alterarServico(idx, "nome", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">
                Link da Foto
              </label>
              <input
                type="text"
                value={servico.img}
                onChange={(e) => alterarServico(idx, "img", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Preço
                </label>
                <input
                  type="text"
                  value={servico.preco}
                  onChange={(e) => alterarServico(idx, "preco", e.target.value)}
                  className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-pink-700 mb-1">
                  Preço Promocional
                </label>
                <input
                  type="text"
                  value={servico.precoPromocional || ""}
                  onChange={(e) => alterarServico(idx, "precoPromocional", e.target.value)}
                  className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">
                Descrição
              </label>
              <textarea
                rows={3}
                value={servico.descricao}
                onChange={(e) => alterarServico(idx, "descricao", e.target.value)}
                className="w-full border border-pink-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-pink-500 resize-y"
              ></textarea>
            </div>
          </div>
          <button
            onClick={() => removerServico(idx)}
            className="text-red-600 font-bold hover:text-red-800"
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  </section>

  {/* Botões de ação */}
  <div className="w-full flex flex-col items-center space-y-4 mb-12">
    <button
      onClick={salvarTudo}
      disabled={salvando || !houveAlteracoes()}
      className={`w-full max-w-lg py-4 rounded-2xl font-bold text-white transition ${
        salvando || !houveAlteracoes()
          ? "bg-pink-300 cursor-not-allowed"
          : "bg-pink-700 hover:bg-pink-800"
      }`}
    >
      {salvando ? "Salvando..." : "Salvar Alterações"}
    </button>
    {salvoComSucesso && (
      <p className="text-green-600 font-semibold">Salvo com sucesso!</p>
    )}
    {erroSalvar && (
      <p className="text-red-600 font-semibold">
        Erro ao salvar. Tente novamente.
      </p>
    )}
  </div>
</div>

); }

