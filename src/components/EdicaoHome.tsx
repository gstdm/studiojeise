import React from "react";

interface EdicaoInicialProps { fotoDona: string; setFotoDona: (v: string) => void; imagensExtras: string[]; setImagensExtras: (v: string[]) => void; }

export default function EdicaoInicial({ fotoDona, setFotoDona, imagensExtras, setImagensExtras, }: EdicaoInicialProps) { const atualizarImagemExtra = (index: number, valor: string) => { const novas = [...imagensExtras]; novas[index] = valor; setImagensExtras(novas); };

const adicionarImagem = () => { if (imagensExtras.length >= 4) return alert("Limite de 4 imagens atingido."); setImagensExtras([...imagensExtras, ""]); };

const removerImagem = (index: number) => { const novas = imagensExtras.filter((_, i) => i !== index); setImagensExtras(novas); };

return ( <div className="space-y-8"> <section className="bg-white rounded-xl p-6 shadow max-w-2xl mx-auto"> <h2 className="text-xl font-bold text-pink-700 mb-4">Foto da Dona</h2> <input type="text" value={fotoDona} onChange={(e) => setFotoDona(e.target.value)} placeholder="Link da foto" className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500" /> {fotoDona && ( <img
src={fotoDona}
alt="Foto da dona"
className="mt-4 w-40 h-60 object-cover rounded-xl border-2 border-pink-400 shadow"
/> )} </section>

<section className="bg-white rounded-xl p-6 shadow max-w-2xl mx-auto">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-pink-700">Imagens Inferiores</h2>
      <button
        onClick={adicionarImagem}
        className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-600"
      >
        Adicionar Imagem
      </button>
    </div>

    <div className="space-y-6">
      {imagensExtras.map((img, i) => (
        <div key={i} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Link da imagem {i + 1}
          </label>
          <input
            type="text"
            value={img}
            onChange={(e) => atualizarImagemExtra(i, e.target.value)}
            className="w-full p-3 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {img && (
            <div className="flex items-center gap-4">
              <img
                src={img}
                alt={`Extra ${i + 1}`}
                className="w-32 h-32 rounded-lg border border-pink-300 object-cover"
              />
              <button
                onClick={() => removerImagem(i)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remover
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
</div>

); }

                                                                                                                                                                                     
