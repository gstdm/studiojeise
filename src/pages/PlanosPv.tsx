import React from 'react';
import { CheckCircle, XCircle, ChevronRight, Lock, Command, Book } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ComprarPlanosPv() {
  const planos = [
    {
      nome: 'Basic',
      preco: 'R$ 6,90/mês',
      descricao: 'Ideal para uso pessoal e moderado.',
      beneficios: [
        { texto: 'Limite diário de 80 comandos', disponivel: true },
        { texto: 'Comandos básicos e vip', disponivel: true },
        { texto: 'Acesso aos comandos 24h', disponivel: true },
        { texto: 'Diversão garantida', disponivel: true },
        { texto: 'Privacidade total', disponivel: true },
        { texto: 'Vantagens na economia', disponivel: false },
        { texto: 'Suporte priorizado', disponivel: false },
        { texto: 'Comandos de +18', disponivel: false },
      ],
      cta: 'Assinar Basic',
      link: "https://api.whatsapp.com/send?phone=5589981385908&text=Ol%C3%A1,%20gostaria%20do%20plano%20Basic",
      disponivel: true,
    },
    {
      nome: 'Pro',
      preco: 'R$ 9,90/mês',
      descricao: 'Para quem precisa de mais funcionalidades.',
      beneficios: [
        { texto: 'Limite diário de 120 comandos', disponivel: true },
        { texto: 'Comandos básicos e vip', disponivel: true },
        { texto: 'Acesso aos comandos 24h', disponivel: true },
        { texto: 'Diversão garantida', disponivel: true },
        { texto: 'Privacidade total', disponivel: true },
        { texto: 'Vantagens na economia', disponivel: true },
        { texto: 'Suporte priorizado', disponivel: false },
        { texto: 'Comandos de +18', disponivel: false },
      ],
      cta: 'Assinar Pro',
      link: "https://api.whatsapp.com/send?phone=5589981385908&text=Ol%C3%A1,%20gostaria%20do%20plano%20Pro",
      disponivel: true,
    },
    {
      nome: 'Ultimate',
      preco: 'R$ 13,90/mês',
      descricao: 'Para quem quer o máximo de benefícios.',
      beneficios: [
        { texto: 'Limite diário de 250 comandos', disponivel: true },
        { texto: 'Comandos básicos e vip', disponivel: true },
        { texto: 'Acesso aos comandos 24h', disponivel: true },
        { texto: 'Diversão garantida', disponivel: true },
        { texto: 'Privacidade total', disponivel: true },
        { texto: 'Vantagens na economia', disponivel: true },
        { texto: 'Suporte priorizado', disponivel: true },
        { texto: 'Comandos de +18', disponivel: true },
      ],
      cta: 'Assinar Ultimate',
      link: "https://api.whatsapp.com/send?phone=5589981385908&text=Ol%C3%A1,%20gostaria%20do%20plano%20Ultimate",
      disponivel: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white text-center mb-10">Escolha o Plano Ideal para Você</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planos.map((plano, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">{plano.nome}</h2>
                <p className="text-4xl font-bold text-blue-500 mb-4">{plano.preco}</p>
                <p className="text-gray-400 mb-6">{plano.descricao}</p>
                <ul className="space-y-3 mb-6">
                  {plano.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      {beneficio.disponivel ? (
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400 mr-2" />
                      )}
                      {beneficio.texto}
                    </li>
                  ))}
                </ul>
                {plano.disponivel ? (
                  <a
                    href={plano.link}
                    className="block text-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200"
                  >
                    {plano.cta}
                    <ChevronRight className="inline w-5 h-5 ml-2" />
                  </a>
                ) : (
                  <div className="block text-center px-6 py-3 rounded-lg bg-gray-700 text-gray-400 font-medium cursor-not-allowed">
                    {plano.cta}
                    <Lock className="inline w-5 h-5 ml-2" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              to="/planos"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200"
            >
              <Command className="mr-2 w-5 h-5" />
              Ver Planos de Grupos
            </Link>
            <Link
              to="/planospv/termos"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200"
            >
              <Book className="mr-2 w-5 h-5" />
              Leia os Termos
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ComprarPlanosPv;
