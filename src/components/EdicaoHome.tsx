import React, { useEffect, useState } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

export default function EdicaoHome() { const [fotoDona, setFotoDona] = useState(""); const [vantagens, setVantagens] = useState<{ img: string; texto: string }[]>([]); const [salvando, setSalvando] = useState(false); const [salvo, setSalvo] = useState(false); const [erro, setErro] = useState(false);

useEffect(() => { fetch(${URL_API}/api/conteudo) .then((res) => res.json()) .then((data) => { setFotoDona(data.fotoDona || ""); setVantagens(data.vantagens || []); }) .catch(() => alert("Erro ao carregar os dados da página inicial.")); }, []);

const atualizarVantagem = (index: number, campo: "img" | "texto", valor: string) => { const novas = [...vantagens]; novas[index][campo] = valor; setVantagens(novas); };

const adicionarVantagem = () => { setVantagens([...vantagens, { img: "", texto: "" }]); };

const removerVantagem = (index: number) => { const novas = [...vantagens]; novas.splice(index, 1); setVantagens(novas); };

const salvar = async () => { setSalvando(true); setSalvo(false); setErro(false);

const dadosSalvar = {
  fotoDona,
  vantagens,
};

try {
  const res = await fetch(`${URL_API}/api/salvar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dadosSalvar),
  });

  if (res.ok) {
    setSalvo(true);
  } else {
    setErro(true);
  }
} catch {
  setErro(true);
} finally {
  setSalvando(false);
  setTimeout(() => setSalvo(false), 3000);
}

};

return ( <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 p-4 sm:p-6"> <div className="w-full max-w-6xl mx-auto space-y-12"> <h1 className="text-3xl font-bold text-pink-700 text-center"> Edição da Página Inicial </h1>

{/* Foto da Dona */}
    <section>
      <h2 className="text-2xl font-semibold text-pink-700 mb-4">Foto da Dona</h2>
      <div className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl border-4 border-pink-400 shadow-lg">
        <img src={fotoDona} alt="Foto da dona" className="object-cover w-full h-full" />
      </div>
      <label className="block mt-6 font-semibold text-pink-700 mb-2">Link da Foto</label>
      <input
        type="text"
        value={fotoDona}
        onChange={(e) => setFotoDona(e.target.value)}
        className="w-full rounded-xl border border-pink-300 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-pink-500"
      />
    </section>

    {/* Vantagens */}
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-pink-700">Vantagens</h2>
        <button
          onClick={adicionarVantagem}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold"
        >
          + Adicionar Vantagem
        </button>
      </div>

      {vantagens.map((vantagem, i) => (
        <div key={i} className="bg-white rounded-3xl shadow-lg p-6 mb-8 space-y-4">
          <div className="w-full h-48 rounded-xl overflow-hidden border-4 border-pink-300 shadow-md">
            <img
              src={vantagem.img}
              alt={`Vantagem ${i + 1}`}
              className="object-cover w-full h-full"
            />
          </div>

          <label className="block font-semibold text-pink-700 mb-1">Link da Imagem</label>
          <input
            type="text"
            value={vantagem.img}
            onChange={(e) => atualizarVantagem(i, "img", e.target.value)}
            className="w-full rounded-xl border border-pink-300 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-pink-500"
          />

          <label className="block font-semibold text-pink-700 mb-1">Texto da Vantagem</label>
          <textarea
            value={vantagem.texto}
            onChange={(e) => atualizarVantagem(i, "texto", e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-pink-300 px-4 py-2 resize-y focus:outline-none focus:ring-4 focus:ring-pink-500"
          />

          <button
            onClick={() => removerVantagem(i)}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl"
          >
            Remover Vantagem
          </button>
        </div>
      ))}
    </section>

    {/* Botão de salvar */}
    <div className="max-w-sm mx-auto flex flex-col gap-4">
      <button
        onClick={salvar}
        disabled={salvando}
        className={`w-full py-4 rounded-3xl font-bold text-white text-lg transition ${
          salvando ? "bg-pink-300 cursor-not-allowed" : "bg-pink-700 hover:bg-pink-800"
        }`}
      >
        {salvando ? "Salvando..." : "Salvar Alterações"}
      </button>

      {salvo && (
        <p className="text-green-700 text-center font-semibold">
          Alterações salvas com sucesso!
        </p>
      )}

      {erro && (
        <p className="text-red-600 text-center font-semibold">
          Erro ao salvar. Tente novamente.
        </p>
      )}
    </div>
  </div>
</div>

); }

