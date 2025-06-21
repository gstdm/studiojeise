import React, { useEffect, useState } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

type Vantagem = {
  img: string;
  texto: string;
};

export default function EdicaoHome() {
  const [fotoDona, setFotoDona] = useState("");
  const [vantagens, setVantagens] = useState<Vantagem[]>([]);
  const [salvando, setSalvando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then((res) => res.json())
      .then((data) => {
        setFotoDona(data.fotoDona || "");
        setVantagens(data.vantagens || []);
      })
      .catch(() => setErro(true));
  }, []);

  const alterarVantagem = (index: number, campo: "img" | "texto", valor: string) => {
    const atualizadas = [...vantagens];
    atualizadas[index] = { ...atualizadas[index], [campo]: valor };
    setVantagens(atualizadas);
  };

  const salvarAlteracoes = async () => {
    setSalvando(true);
    setErro(false);
    setSucesso(false);

    try {
      const resposta = await fetch(`${URL_API}/api/salvar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fotoDona, vantagens }),
      });

      if (resposta.ok) {
        setSucesso(true);
      } else {
        setErro(true);
      }
    } catch {
      setErro(true);
    }

    setSalvando(false);
    setTimeout(() => {
      setSucesso(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 p-4 md:p-10 space-y-10">
      <h1 className="text-3xl font-bold text-pink-700 text-center">Edição da Página Inicial</h1>

      {/* Foto da dona */}
      <section className="bg-white rounded-3xl shadow-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">Foto da Dona</h2>
        <div className="w-full flex justify-center">
          <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-pink-400 shadow-lg">
            <img src={fotoDona} alt="Foto da Dona" className="w-full h-full object-cover" />
          </div>
        </div>
        <input
          type="text"
          value={fotoDona}
          onChange={(e) => setFotoDona(e.target.value)}
          className="w-full mt-4 rounded-xl border border-pink-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-pink-500"
          placeholder="Link da imagem da dona"
        />
      </section>

      {/* Vantagens */}
      <section className="bg-white rounded-3xl shadow-xl p-6 space-y-8">
        <h2 className="text-xl font-semibold text-pink-700 mb-4">Vantagens</h2>
        {vantagens.map((vant, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start gap-6 bg-pink-50 rounded-2xl p-4 border border-pink-200"
          >
            <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
              <img
                src={vant.img}
                alt={`Vantagem ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <label className="block font-semibold text-pink-700 mb-1">Link da Imagem</label>
                <input
                  type="text"
                  value={vant.img}
                  onChange={(e) => alterarVantagem(index, "img", e.target.value)}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 focus:outline-none focus:ring-4 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-pink-700 mb-1">Texto da Vantagem</label>
                <textarea
                  value={vant.texto}
                  onChange={(e) => alterarVantagem(index, "texto", e.target.value)}
                  className="w-full rounded-xl border border-pink-300 px-4 py-2 resize-y focus:outline-none focus:ring-4 focus:ring-pink-500"
                  rows={3}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Botão salvar */}
      <div className="text-center space-y-4">
        <button
          onClick={salvarAlteracoes}
          disabled={salvando}
          className={`w-full max-w-md py-4 rounded-3xl font-bold text-white text-lg transition ${
            salvando
              ? "bg-pink-300 cursor-not-allowed"
              : "bg-pink-700 hover:bg-pink-800"
          }`}
        >
          {salvando ? "Salvando..." : "Salvar Alterações"}
        </button>

        {sucesso && (
          <p className="text-green-700 font-semibold">Alterações salvas com sucesso!</p>
        )}

        {erro && (
          <p className="text-red-600 font-semibold">Erro ao salvar. Tente novamente.</p>
        )}
      </div>
    </div>
  );
}
