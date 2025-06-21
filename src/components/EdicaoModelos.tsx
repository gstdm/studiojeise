// src/components/EdicaoModelos.tsx

import React, { useEffect, useState, useRef } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

//
// Definição de tipos
//

type Modelo = {
  nome: string;
  preco: string;
  precoPromocional?: string;
  descricao: string;
  img: string;
};

type Servico = {
  nome: string;
  preco: string;
  precoPromocional?: string;
  descricao: string;
  img: string;
};

//
// Componente EdicaoModelos
//

export default function EdicaoModelos(): JSX.Element {
  //
  // Estados de carregamento e dados
  //
  const [dadosCarregados, setDadosCarregados] = useState<boolean>(false);

  //
  // Promoção
  //
  const [promocaoAtiva, setPromocaoAtiva] = useState<boolean>(false);

  //
  // Listas de Modelos e Serviços
  //
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [servicos, setServicos] = useState<Servico[]>([]);

  //
  // Estado de salvamento
  //
  const [salvando, setSalvando] = useState<boolean>(false);
  const [salvoComSucesso, setSalvoComSucesso] = useState<boolean>(false);
  const [erroSalvar, setErroSalvar] = useState<boolean>(false);

  //
  // Guarda o snapshot original para comparação de alterações
  //
  const originalData = useRef<{
    promocaoAtiva: boolean;
    modelos: Modelo[];
    servicos: Servico[];
  } | null>(null);

  //
  // Efeito de carregamento inicial
  //
  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setPromocaoAtiva(data.promocaoAtiva);
        setModelos(data.modelos || []);
        setServicos(data.servicosAdicionais || []);

        originalData.current = {
          promocaoAtiva: data.promocaoAtiva,
          modelos: data.modelos || [],
          servicos: data.servicosAdicionais || [],
        };

        setDadosCarregados(true);
      })
      .catch(function () {
        alert("Erro ao carregar os dados. Tente recarregar a página.");
      });
  }, []);

  //
  // Funções de alteração de campo
  //

  function alterarModelo(
    index: number,
    campo: keyof Modelo,
    valor: string
  ): void {
    const novosModelos = [...modelos];
    novosModelos[index][campo] = valor;
    setModelos(novosModelos);
  }

  function alterarServico(
    index: number,
    campo: keyof Servico,
    valor: string
  ): void {
    const novosServicos = [...servicos];
    novosServicos[index][campo] = valor;
    setServicos(novosServicos);
  }

  //
  // Funções de adicionar e remover
  //

  function adicionarModelo(): void {
    const novo: Modelo = {
      nome: "",
      preco: "",
      precoPromocional: "",
      descricao: "",
      img: "",
    };
    setModelos([...modelos, novo]);
  }

  function removerModelo(index: number): void {
    const filtrado = modelos.filter(function (_, i) {
      return i !== index;
    });
    setModelos(filtrado);
  }

  function adicionarServico(): void {
    const novo: Servico = {
      nome: "",
      preco: "",
      precoPromocional: "",
      descricao: "",
      img: "",
    };
    setServicos([...servicos, novo]);
  }

  function removerServico(index: number): void {
    const filtrado = servicos.filter(function (_, i) {
      return i !== index;
    });
    setServicos(filtrado);
  }

  //
  // Toggle de promoção
  //

  function togglePromocao(): void {
    setPromocaoAtiva(function (prev) {
      return !prev;
    });
  }

  //
  // Função de salvamento
  //

  async function salvarTudo(): Promise<void> {
    setSalvando(true);
    setSalvoComSucesso(false);
    setErroSalvar(false);

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
    } catch (e) {
      console.error(e);
      setErroSalvar(true);
    } finally {
      setSalvando(false);
      setTimeout(function () {
        setSalvoComSucesso(false);
      }, 3000);
    }
  }

  //
  // Verificar se houve alterações
  //

  function houveAlteracoes(): boolean {
    if (!originalData.current) {
      return false;
    }

    if (promocaoAtiva !== originalData.current.promocaoAtiva) {
      return true;
    }

    if (
      JSON.stringify(modelos) !==
      JSON.stringify(originalData.current.modelos)
    ) {
      return true;
    }

    if (
      JSON.stringify(servicos) !==
      JSON.stringify(originalData.current.servicos)
    ) {
      return true;
    }

    return false;
  }

  //
  // Renderização condicional enquanto carrega
  //

  if (!dadosCarregados) {
    return (
      <div className="p-6">
        <p className="text-center text-pink-700">Carregando dados...</p>
      </div>
    );
  }

  //
  // JSX final
  //

  return (
    <div className="w-full space-y-12 px-4 py-6">
      {/* Promoção Ativa */}
      <section className="bg-white rounded-3xl shadow-lg p-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-pink-700">Promoção Ativa</h2>
        <button
          onClick={togglePromocao}
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
            promocaoAtiva ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${
              promocaoAtiva ? "translate-x-8" : ""
            }`}
          ></span>
        </button>
      </section>

      {/* Seção Modelos */}
      <section className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-pink-700">
            Modelos de Cílios
          </h2>
          <button
            onClick={adicionarModelo}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-xl"
          >
            + Adicionar Modelo
          </button>
        </div>

        <div className="space-y-8">
          {modelos.map(function (modelo, index) {
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 shadow-inner"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
                  <img
                    src={modelo.img}
                    alt={modelo.nome}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-pink-700 mb-1">
                      Nome do Modelo
                    </label>
                    <input
                      type="text"
                      value={modelo.nome}
                      onChange={function (e) {
                        alterarModelo(index, "nome", e.target.value);
                      }}
                      className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-pink-700 mb-1">
                      Link da Foto
                    </label>
                    <input
                      type="text"
                      value={modelo.img}
                      onChange={function (e) {
                        alterarModelo(index, "img", e.target.value);
                      }}
                      className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-pink-700 mb-1">
                        Preço Normal
                      </label>
                      <input
                        type="text"
                        value={modelo.preco}
                        onChange={function (e) {
                          alterarModelo(index, "preco", e.target.value);
                        }}
                        className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-pink-700 mb-1">
                        Preço Promocional
                      </label>
                      <input
                        type="text"
                        value={modelo.precoPromocional || ""}
                        onChange={function (e) {
                          alterarModelo(
                            index,
                            "precoPromocional",
                            e.target.value
                          );
                        }}
                        className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-pink-700 mb-1">
                      Descrição
                    </label>
                    <textarea
                      value={modelo.descricao}
                      onChange={function (e) {
                        alterarModelo(index, "descricao", e.target.value);
                      }}
                      rows={3}
                      className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 resize-y"
                    ></textarea>
                  </div>
                </div>

                <button
                  onClick={function () {
                    removerModelo(index);
                  }}
                  className="text-red-600 font-bold hover:text-red-800"
                >
                  Excluir
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Seção Serviços Adicionais */}
      <section className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-pink-700">
            Serviços Adicionais
          </h2>
          <button
            onClick={adicionarServico}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-xl"
          >
            + Adicionar Serviço
          </button>
        </div>

        <div className="space-y-8">
          {servicos.map(function (servico, index) {
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 shadow-inner"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
                  <img
                    src={servico.img}
                    alt={servico.nome}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-pink-700 mb-1">
                      Nome do Serviço
                    </label>
                    <input
                      type="text"
                      value={servico.nome}
                      onChange={function (e) {
                        alterarServico(index, "nome", e.target.value);
                      }}
                      className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-pink-700 mb-1">
                      Link da Foto
                    </label>
                    <input
                      type="text"
                      value={servico.img}
                      onChange={function (e) {
                        alterarServico(index, "img", e.target.value);
                      }}
                      className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-pink-700 mb-1">
                        Preço
                      </label>
                      <input
                        type="text"
                        value={servico.preco}
                        onChange={function (e) {
                          alterarServico(index, "preco", e.target.value);
                        }}
                        className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-pink-700 mb-1">
                        Preço Promocional
                      </label>
                      <input
                        type="text"
                        value={servico.precoPromocional || ""}
                        onChange={function (e) {
                          alterarServico(
                            index,
                            "precoPromocional",
                            e.target.value
                          );
                        }}
                        className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-pink-700 mb-1">
                      Descrição
                    </label>
                    <textarea
                      value={servico.descricao}
                      onChange={function (e) {
                        alterarServico(index, "descricao", e.target.value);
                      }}
                      rows={3}
                      className="w-full border border-pink-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 resize-y"
                    ></textarea>
                  </div>
                </div>

                <button
                  onClick={function () {
                    removerServico(index);
                  }}
                  className="text-red-600 font-bold hover:text-red-800"
                >
                  Excluir
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Botão simples de salvar */}
<div className="flex justify-center mt-10">
  <button
    onClick={salvarTudo}
    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-md"
  >
    Salvar Alterações
  </button>
</div>

{/* Mensagens de feedback */}
<div className="text-center mt-4">
  {salvoComSucesso && (
    <p className="text-green-600 font-semibold">Salvo com sucesso!</p>
  )}
  {erroSalvar && (
    <p className="text-red-600 font-semibold">Erro ao salvar. Tente novamente.</p>
  )}
</div>
