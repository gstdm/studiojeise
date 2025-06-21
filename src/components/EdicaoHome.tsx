import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

// ------------------------------------------------------------------------------------------------------------------ // EdicaoHome.tsx // Componente de edição da página inicial do Studio Jeise // Permite alterar imagem da dona, quatro fotos inferiores e textos de vantagens // Layout: tela cheia para mobile, estilizado com Tailwind // ------------------------------------------------------------------------------------------------------------------

export default function EdicaoHome(): JSX.Element { // -------------------------------------------------------------------------------- // Estados principais // --------------------------------------------------------------------------------

// Indica se os dados foram carregados da API const [dadosCarregados, setDadosCarregados] = useState<boolean>(false);

// Imagem principal (dona do studio) const [fotoDona, setFotoDona] = useState<string>("");

// Array de URLs das imagens inferiores (4 posições) const [fotosInferiores, setFotosInferiores] = useState<string[]>(["", "", "", ""]);

// Array de textos correspondentes às vantagens (4 posições) const [textosVantagens, setTextosVantagens] = useState<string[]>(["", "", "", ""]);

// Estados de salvamento const [salvando, setSalvando] = useState<boolean>(false); const [salvoComSucesso, setSalvoComSucesso] = useState<boolean>(false); const [erroSalvar, setErroSalvar] = useState<boolean>(false);

// Armazena snapshot original para detectar alterações const originalData = useRef<{ fotoDona: string; fotosInferiores: string[]; textosVantagens: string[]; } | null>(null);

// -------------------------------------------------------------------------------- // Hook de efeito para carregar dados iniciais da API // --------------------------------------------------------------------------------

useEffect(() => { fetch(${URL_API}/api/conteudo) .then((res) => res.json()) .then((data) => { setFotoDona(data.fotoDona || ""); setFotosInferiores(data.fotosInferiores || ["", "", "", ""]); setTextosVantagens(data.vantagens.map((v: any) => v.texto) || ["", "", "", ""]);

originalData.current = {
      fotoDona: data.fotoDona || "",
      fotosInferiores: data.fotosInferiores || ["", "", "", ""],
      textosVantagens: data.vantagens.map((v: any) => v.texto) || ["", "", "", ""],
    };
    setDadosCarregados(true);
  })
  .catch(() => {
    alert("Erro ao carregar os dados. Tente recarregar a página.");
  });

}, []);

// -------------------------------------------------------------------------------- // Função para checar se houve alterações // --------------------------------------------------------------------------------

function houveAlteracoes(): boolean { if (!originalData.current) return false;

if (fotoDona !== originalData.current.fotoDona) return true;
if (JSON.stringify(fotosInferiores) !== JSON.stringify(originalData.current.fotosInferiores)) return true;
if (JSON.stringify(textosVantagens) !== JSON.stringify(originalData.current.textosVantagens)) return true;

return false;

}

// -------------------------------------------------------------------------------- // Função de salvamento // --------------------------------------------------------------------------------

async function salvarAlteracoes(): Promise<void> { setSalvando(true); setSalvoComSucesso(false); setErroSalvar(false);

const payload = {
  fotoDona,
  fotosInferiores,
  textosVantagens,
};

try {
  const res = await fetch(`${URL_API}/api/salvar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    setSalvoComSucesso(true);
    originalData.current = payload;
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

// -------------------------------------------------------------------------------- // Renderização enquanto carrega dados // --------------------------------------------------------------------------------

if (!dadosCarregados) { return ( <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-pink-300"> <p className="text-xl font-semibold text-pink-700">Carregando dados...</p> </div> ); }

// -------------------------------------------------------------------------------- // JSX principal (tela cheia mobile) // --------------------------------------------------------------------------------

return ( <div className="w-full min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 px-4 py-6"> {/* Título */} <h1 className="text-3xl font-bold text-center text-pink-700 mb-8"> Edição Página Inicial </h1>

{/* Seção: Foto da Dona */}
  <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 w-full">
    <h2 className="text-2xl font-semibold text-pink-700 mb-4">Foto da Dona</h2>
    <div className="w-full h-60 max-w-md mx-auto overflow-hidden rounded-2xl border-4 border-pink-400 shadow-md mb-4">
      <img
        src={fotoDona}
        alt="Foto da dona"
        className="object-cover w-full h-full"
      />
    </div>
    <label className="block font-semibold text-pink-700 mb-2">
      Link da Foto
    </label>
    <input
      type="text"
      value={fotoDona}
      onChange={(e) => setFotoDona(e.target.value)}
      className="w-full rounded-xl border border-pink-300 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-pink-500"
    />
  </section>

  {/* Seção: Fotos Inferiores */}
  <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 w-full">
    <h2 className="text-2xl font-semibold text-pink-700 mb-4">
      Fotos Inferiores
    </h2>
    {fotosInferiores.map((url, idx) => (
      <div key={idx} className="mb-6">
        <label className="block font-semibold text-pink-700 mb-2">
          Foto Inferior {idx + 1}
        </label>
        <div className="w-full h-40 overflow-hidden rounded-xl border-4 border-pink-300 shadow-md mb-2">
          <img
            src={url}
            alt={`Foto inferior ${idx + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => {
            const novas = [...fotosInferiores];
            novas[idx] = e.target.value;
            setFotosInferiores(novas);
          }}
          className="w-full rounded-xl border border-pink-300 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-pink-500"
        />
      </div>
    ))}
  </section>

  {/* Seção: Textos das Vantagens */}
  <section className="bg-white rounded-3xl shadow-lg p-6 mb-8 w-full">
    <h2 className="text-2xl font-semibold text-pink-700 mb-4">
      Textos das Vantagens
    </h2>
    {textosVantagens.map((texto, idx) => (
      <div key={idx} className="mb-6">
        <label className="block font-semibold text-pink-700 mb-2">
          Vantagem {idx + 1}
        </label>
        <textarea
          rows={4}
          value={texto}
          onChange={(e) => {
            const novos = [...textosVantagens];
            novos[idx] = e.target.value;
            setTextosVantagens(novos);
          }}
          className="w-full rounded-xl border border-pink-300 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-pink-500 resize-y"
        ></textarea>
      </div>
    ))}
  </section>

  {/* Botão de Salvar */}
  <div className="w-full flex justify-center mb-12">
    <button
      onClick={salvarAlteracoes}
      disabled={salvando || !houveAlteracoes()}
      className={`w-full max-w-sm py-4 rounded-3xl font-bold text-white transition ${
        salvando || !houveAlteracoes()
          ? "bg-pink-300 cursor-not-allowed"
          : "bg-pink-700 hover:bg-pink-800"
      }`}
    >
      {salvando ? "Salvando..." : "Salvar Alterações"}
    </button>
  </div>

  {/* Mensagens de status */}
  {salvoComSucesso && (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-3xl shadow-lg">
      Alterações salvas com sucesso!
    </div>
  )}
  {erroSalvar && (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-3xl shadow-lg">
      Erro ao salvar. Tente novamente.
    </div>
  )}
</div>

); }

