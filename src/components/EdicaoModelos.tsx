import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Modelo {
  nome: string;
  preco: string;
  precoPromocional?: string;
  descricao: string;
  img: string;
}

interface Servico {
  nome: string;
  preco: string;
  descricao: string;
  img: string;
}

interface Props {
  conteudo: any;
  setConteudo: (c: any) => void;
  setHouveAlteracao: (b: boolean) => void;
}

export default function EdicaoModelos({ conteudo, setConteudo, setHouveAlteracao }: Props) {
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [promocaoAtiva, setPromocaoAtiva] = useState(false);

  useEffect(() => {
    setModelos(conteudo.modelos || []);
    setServicos(conteudo.servicosAdicionais || []);
    setPromocaoAtiva(conteudo.promocaoAtiva || false);
  }, [conteudo]);

  const atualizar = () => {
    setConteudo({ ...conteudo, modelos, servicosAdicionais: servicos, promocaoAtiva });
    setHouveAlteracao(true);
  };

  const alterarCampo = (lista: any[], setLista: any, index: number, campo: string, valor: string) => {
    const nova = [...lista];
    // @ts-ignore
    nova[index][campo] = valor;
    setLista(nova);
    atualizar();
  };

  const adicionarModelo = () => {
    setModelos([
      ...modelos,
      { nome: "", preco: "", descricao: "", img: "", precoPromocional: "" },
    ]);
    setHouveAlteracao(true);
  };

  const adicionarServico = () => {
    setServicos([
      ...servicos,
      { nome: "", preco: "", descricao: "", img: "" },
    ]);
    setHouveAlteracao(true);
  };

  const removerModelo = (i: number) => {
    const nova = [...modelos];
    nova.splice(i, 1);
    setModelos(nova);
    atualizar();
  };

  const removerServico = (i: number) => {
    const nova = [...servicos];
    nova.splice(i, 1);
    setServicos(nova);
    atualizar();
  };

  return (
    <div className="space-y-10">
      {/* Promoção */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-bold text-pink-700 mb-2">Promoção Ativa</h2>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={promocaoAtiva}
            onChange={(e) => {
              setPromocaoAtiva(e.target.checked);
              atualizar();
            }}
            className="w-5 h-5 text-pink-600"
          />
          <span>{promocaoAtiva ? "Ativada" : "Desativada"}</span>
        </label>
      </div>

      {/* Modelos */}
      <div className="bg-white rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-pink-700">Modelos</h2>
          <button
            onClick={adicionarModelo}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            + Adicionar Modelo
          </button>
        </div>
        <div className="space-y-6">
          {modelos.map((m, i) => (
            <div key={i} className="border rounded-xl p-4 space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Modelo #{i + 1}</span>
                <button onClick={() => removerModelo(i)} className="text-red-500 font-bold">Excluir</button>
              </div>
              <input
                type="text"
                placeholder="Nome"
                value={m.nome}
                onChange={(e) => alterarCampo(modelos, setModelos, i, "nome", e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Preço"
                value={m.preco}
                onChange={(e) => alterarCampo(modelos, setModelos, i, "preco", e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Preço Promocional"
                value={m.precoPromocional || ""}
                onChange={(e) => alterarCampo(modelos, setModelos, i, "precoPromocional", e.target.value)}
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Descrição"
                value={m.descricao}
                onChange={(e) => alterarCampo(modelos, setModelos, i, "descricao", e.target.value)}
                className="w-full p-2 border rounded resize-none"
                rows={3}
              />
              <input
                type="text"
                placeholder="Link da Imagem"
                value={m.img}
                onChange={(e) => alterarCampo(modelos, setModelos, i, "img", e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Serviços */}
      <div className="bg-white rounded-xl p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-pink-700">Serviços Adicionais</h2>
          <button
            onClick={adicionarServico}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            + Adicionar Serviço
          </button>
        </div>
        <div className="space-y-6">
          {servicos.map((s, i) => (
            <div key={i} className="border rounded-xl p-4 space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold">Serviço #{i + 1}</span>
                <button onClick={() => removerServico(i)} className="text-red-500 font-bold">Excluir</button>
              </div>
              <input
                type="text"
                placeholder="Nome"
                value={s.nome}
                onChange={(e) => alterarCampo(servicos, setServicos, i, "nome", e.target.value)}
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Preço (pode ter quebra de linha)"
                value={s.preco}
                onChange={(e) => alterarCampo(servicos, setServicos, i, "preco", e.target.value)}
                className="w-full p-2 border rounded resize-none"
                rows={2}
              />
              <textarea
                placeholder="Descrição"
                value={s.descricao}
                onChange={(e) => alterarCampo(servicos, setServicos, i, "descricao", e.target.value)}
                className="w-full p-2 border rounded resize-none"
                rows={3}
              />
              <input
                type="text"
                placeholder="Link da Imagem"
                value={s.img}
                onChange={(e) => alterarCampo(servicos, setServicos, i, "img", e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
      }
                                              
