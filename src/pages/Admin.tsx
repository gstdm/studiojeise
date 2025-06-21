import React, { useState, useEffect } from "react"; import EdicaoModelos from "./EdicaoModelos"; import EdicaoHome from "./EdicaoHome";

const LOGIN = "Jeise"; const SENHA = "123456";

export default function Admin() { const [logado, setLogado] = useState(false); const [usuarioInput, setUsuarioInput] = useState(""); const [senhaInput, setSenhaInput] = useState(""); const [secao, setSecao] = useState<"modelos" | "home">("modelos");

useEffect(() => { const cookie = document.cookie; if (cookie.includes("painelJeise=true")) { setLogado(true); } }, []);

const fazerLogin = () => { if (usuarioInput === LOGIN && senhaInput === SENHA) { setLogado(true); document.cookie = "painelJeise=true; max-age=604800"; } else { alert("Usuário ou senha incorretos."); } };

if (!logado) { return ( <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-pink-300 p-6"> <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center"> <h1 className="text-4xl font-bold text-pink-600 mb-6">Login Jeise</h1> <input type="text" placeholder="Usuário" value={usuarioInput} onChange={(e) => setUsuarioInput(e.target.value)} className="w-full p-3 mb-4 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500" /> <input type="password" placeholder="Senha" value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} className="w-full p-3 mb-6 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500" /> <button
onClick={fazerLogin}
className="w-full py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition"
> Entrar </button> </div> </div> ); }

return ( <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-pink-200"> {/* Navbar fixa */} <nav className="sticky top-0 z-50 bg-white shadow-md flex justify-between items-center px-4 py-3 border-b border-pink-200"> <h2 className="text-xl font-bold text-pink-600">Painel Admin</h2> <div className="flex items-center gap-4"> <button onClick={() => setSecao(secao === "modelos" ? "home" : "modelos")} className="bg-pink-100 hover:bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium" > Ir para {secao === "modelos" ? "Página Inicial" : "Modelos"} </button> </div> </nav>

{/* Seções do Painel */}
  <div className="flex-1 p-4 sm:p-6">
    {secao === "modelos" ? <EdicaoModelos /> : <EdicaoHome />}
  </div>
</div>

); }

