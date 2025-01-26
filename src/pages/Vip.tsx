import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VipPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white text-center mb-10">Grupo VIP do Dallas Bot</h1>

          {/* Imagem geral no início */}
          <div className="text-center mb-10">
            <img
              src="https://i.ibb.co/Pwhkf5h/Friendly-3-D-Robot-With-Neon-Highlights-And-Glowing-Orb-removebg-preview.png"
              alt="Dallas Bot VIP"
              className="rounded-lg shadow-md max-w-xs mx-auto"
            />
          </div>

          {/* Benefícios do Grupo VIP */}
          <div className="space-y-6 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-500">Benefícios Exclusivos</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>120 comandos diários (no plano Free são apenas 10!)</li>
                <li>Acesso a todos os comandos exclusivos: Brincadeiras, Conteúdo 🔞, Economia, e mais!</li>
                <li>Uso PERMANENTE – Pague uma vez e aproveite para sempre!</li>
                <li>24h de acesso contínuo – Sem interrupções, diferente do grupo Free!</li>
                <li>Segurança e Privacidade – Use o bot com toda a tranquilidade, sem riscos.</li>
                <li>Suporte VIP – Atendimento rápido e exclusivo para membros VIP.</li>
                <li>Novidades constantes – Novos recursos e atualizações regulares.</li>
              </ul>
            </div>
          </div>

          {/* Preço e chamada para ação */}
          <div className="my-8 text-center">
            <p className="text-3xl font-bold text-blue-600">💲 Preço Especial: R$ 4,99</p>
            <p className="text-lg text-white mt-4">
              Acesso PERMANENTE por apenas R$ 4,99 – Isso significa apenas 40 centavos por mês ao longo de um ano!
            </p>
            <a
              href="https://wa.me/5589981385908"
              className="inline-flex justify-center items-center py-3 px-6 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition-colors mt-6"
            >
              Adquira Agora!
            </a>
          </div>

          {/* Observações discretas */}
          <div className="mt-12 text-gray-400 text-sm italic border-t border-gray-600 pt-6">
            <p className="mb-2">📌 Importante:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>➖ Após o pagamento, você entra no grupo e tem acesso ao bot permanente.</li>
              <li>➖ O bot não pode ser adicionado a grupos próprios nem usado em conversas privadas (PV).</li>
              <li>➖ O grupo possui regras que devem ser lidas atentamente após entrar no grupo, após o pagamento.</li>
            </ul>
          </div>

          {/* Botões */}
          <div className="text-center mt-12 space-x-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200"
            >
              ⬅️ Voltar ao Início
            </Link>
            <a
              href="https://wa.me/5589981385908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-base font-medium rounded-lg text-gray-300 bg-green-600 hover:bg-green-700 transition-all duration-200"
            >
              ✨ Adquira Agora
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VipPage;
