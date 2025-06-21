import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

export default function EdicaoHome() {
  const [dadosCarregados, setDadosCarregados] = useState(false);
  const [fotoDona, setFotoDona] = useState("");
  const [fotosInferiores, setFotosInferiores] = useState<string[]>(["", "", "", ""]);
  const originalData = useRef<{ fotoDona: string; fotosInferiores: string[] } | null>(null);

  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then((res) => res.json())
      .then((data) => {
        setFotoDona(data.fotoDona || "");
        setFotosInferiores(data.fotosInferiores || ["", "", "", ""]);
        originalData.current = {
          fotoDona: data.fotoDona || "",
          fotosInferiores: data.fotosInferiores || ["", "", "", ""],
        };
        setDadosCarregados(true);
      })
      .catch(() => alert("Erro ao carregar os dados. Tente recarregar."));
  }, []);

  const salvar = async () => {
    const dadosSalvar = {
      fotoDona,
      fotosInferiores,
    };

    try {
      const res = await fetch(`${URL_API}/api/salvar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosSalvar),
      });

      if (res.ok) {
        alert("Salvo com sucesso!");
        originalData.current = dadosSalvar;
      } else {
        alert("Erro ao salvar. Tente novamente.");
      }
    } catch {
      alert("Erro ao salvar. Tente novamente.");
    }
  };

  const houveAlteracoes = () => {
    if (!originalData.current) return false;
    return (
      fotoDona !== originalData.current.fotoDona ||
      JSON.stringify(fotosInferiores) !== JSON.stringify(originalData.current.fotosInferiores)
    );
  };

  if (!dadosCarregados) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-pink-300 p-6">
        <p className="text-pink-700 font-semibold text-xl">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 px-4 py-6 space-y-12">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-pink-700">Foto da Dona</h2>

        {fotoDona && (
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
            <img src={fotoDona} alt="Foto da Dona" className="w-full h-full object-cover" />
          </div>
        )}

        <label className="block font-semibold text-pink-700 mt-4">Link da Foto</label>
        <input
          type="text"
          value={fotoDona}
          onChange={(e) => setFotoDona(e.target.value)}
          className="w-full rounded-xl border border-pink-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-pink-500"
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-pink-700">Fotos Inferiores</h2>
        {fotosInferiores.map((foto, index) => (
          <div key={index} className="space-y-4">
            <label className="block font-semibold text-pink-700">Foto Inferior {index + 1}</label>

            {foto && (
              <div className="w-full max-w-sm rounded-3xl overflow-hidden border-4 border-pink-300 shadow-md">
                <img src={foto} alt={`Foto Inferior ${index + 1}`} className="w-full object-cover" />
              </div>
            )}

            <input
              type="text"
              value={foto}
              onChange={(e) => {
                const novas = [...fotosInferiores];
                novas[index] = e.target.value;
                setFotosInferiores(novas);
              }}
              className="w-full rounded-xl border border-pink-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-pink-500"
            />
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto pt-8">
        <button
          onClick={salvar}
          disabled={!houveAlteracoes()}
          className={`w-full py-4 rounded-3xl font-bold text-white text-lg transition ${
            houveAlteracoes()
              ? "bg-pink-700 hover:bg-pink-800"
              : "bg-pink-300 cursor-not-allowed"
          }`}
        >
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}
