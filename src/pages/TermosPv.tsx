import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermosPv = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white text-center mb-10">Termos de Uso do Bot no PV</h1>

          {/* Imagem geral no início */}
          <div className="text-center mb-10">
            <img
              src="https://i.ibb.co/sRttgWX/Remove-bg-ai-1737905510023.png"
              alt="Termos de Uso PV"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Lista de termos */}
          <div className="space-y-6 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">1. Não ligue para o bot:</h3>
              <p>Chamadas de voz ou vídeo para o bot no privado são estritamente proibidas. Caso o bot receba uma ligação, ele será automaticamente bloqueado. O suporte pode desbloquear o número, mas o período em que você ficou bloqueado não será restituído.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">2. Proibição de conteúdos ilegais e pornográficos:</h3>
              <p>O envio de conteúdos ilegais, pornográficos ou qualquer material que viole as leis brasileiras é estritamente proibido, independentemente da intenção, seja para criar figurinhas ou qualquer outro uso. As mensagens enviadas ao bot não são acessadas pela equipe do Dallas, mas o WhatsApp pode verificar as mensagens em caso de suspeitas, o que pode causar prejuízo tanto para o bot quanto para você como usuário.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">3. Sem reembolso por desistência:</h3>
              <p>Não haverá reembolso caso você decida parar de usar o bot antes do término do período contratado. A desistência é de responsabilidade do usuário.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">4. Reembolso por bugs ou falhas:</h3>
              <p>Nos casos de falhas técnicas ou bugs no sistema do bot, o usuário pode solicitar reembolso parcial. O reembolso será proporcional ao período em que o bot esteve inacessível, seguindo a mesma política aplicada aos grupos.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">5. Uso exclusivo e pessoal:</h3>
              <p>O bot no privado é configurado para uso pessoal e intransferível. O compartilhamento de acesso a terceiros é proibido e pode resultar no bloqueio imediato do serviço.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">6. Respeito aos termos e condições:</h3>
              <p>Ao contratar o uso do bot no privado, você concorda automaticamente com os termos e condições descritos nesta página. Qualquer violação dos termos pode resultar no bloqueio do bot sem aviso prévio e sem direito a reembolso.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">7. Alterações nos termos:</h3>
              <p>Os termos podem ser alterados a qualquer momento. As mudanças serão publicadas nesta página e entrarão em vigor imediatamente. O uso contínuo do bot após as alterações implica na aceitação das novas condições.</p>
            </div>
          </div>

          {/* Botões */}
          <div className="text-center mt-12 space-x-4">
            <Link
              to="/planospv"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200"
            >
              Voltar para Planos
            </Link>
            <a
              href="https://wa.me/5589981385908" // Substitua pelo link do seu WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-base font-medium rounded-lg text-gray-300 bg-green-600 hover:bg-green-700 transition-all duration-200"
            >
              Contratar Agora
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermosPv;
