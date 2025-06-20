import React, { useEffect, useState } from "react";

const Admin = () => {
  const [logado, setLogado] = useState(false);
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [dados, setDados] = useState<any>(null);
  const [promoAtiva, setPromoAtiva] = useState(false);

  // Buscar os dados
  useEffect(() => {
    fetch("/api/conteudo")
      .then((res) => res.json())
      .then((res) => {
        setDados(res);
        setPromoAtiva(res.promocaoAtiva);
      });
  }, []);

  // Autenticação simples
  const tentarLogin = () => {
    if (dados?.login?.usuario === usuario && dados?.login?.senha === senha) {
      setLogado(true);
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  // Alterar dado do modelo
  const editarModelo = (i: number, campo: string, valor: string) => {
    const novos = [...dados.modelos];
    novos[i][campo] = valor;
    setDados({ ...dados, modelos: novos });
  };

  // Salvar no backend
  const salvar = async () => {
    const atualizado = { ...dados, promocaoAtiva: promoAtiva };
    const res = await fetch("/api/conteudo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(atualizado),
    });
    const json = await res.json();
    alert(json.status === "salvo" ? "Salvo com sucesso!" : "Erro ao salvar");
  };

  if (!dados) return <p className="text-center mt-10">Carregando...</p>;

  if (!logado) {
    return (
      <div className="flex flex-col items-center mt-20 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={tentarLogin} className="bg-pink-500 px-4 py-2 rounded text-white">Entrar</button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Painel de Edição</h1>

      {/* Botão de Promoção */}
      <div className="mb-6 flex items-center gap-4">
        <span className="font-semibold text-lg">Promoção ativa?</span>
        <div
          onClick={() => setPromoAtiva(!promoAtiva)}
          className={`w-16 h-8 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 ${promoAtiva ? "bg-green-500" : "bg-red-500"}`}
        >
          <div
            className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${promoAtiva ? "translate-x-8" : ""}`}
          />
        </div>
      </div>

      {/* Modelos */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Modelos</h2>
      {dados.modelos?.map((m: any, i: number) => (
        <div key={i} className="mb-6 p-4 border rounded bg-white shadow">
          <input value={m.nome} onChange={(e) => editarModelo(i, "nome", e.target.value)} className="w-full mb-2 p-2 border rounded" placeholder="Nome" />
          <input value={m.preco} onChange={(e) => editarModelo(i, "preco", e.target.value)} className="w-full mb-2 p-2 border rounded" placeholder="Preço" />
          <input value={m.descricao} onChange={(e) => editarModelo(i, "descricao", e.target.value)} className="w-full mb-2 p-2 border rounded" placeholder="Descrição" />
          <input value={m.img} onChange={(e) => editarModelo(i, "img", e.target.value)} className="w-full p-2 border rounded" placeholder="Link da Imagem" />
        </div>
      ))}

      {/* Botão de salvar */}
      <div className="mt-6">
        <button onClick={salvar} className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700">
          Salvar alterações
        </button>
      </div>
    </div>
  );
};

export default Admin;
