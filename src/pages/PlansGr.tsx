import React from 'react';
import { CheckCircle, XCircle, ChevronRight, Lock, Command } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ComprarPlanos() {
  const planos = [
    {
      nome: 'Hobby',
      preco: 'R$ 9,90/mês',
      descricao: 'Ideal para uso pessoal e moderado.',
      beneficios: [
        { texto: 'Limite de 60 comandos', disponivel: true },
        { texto: 'Comandos básicos e vip', disponivel: true },
        { texto: 'Comandos de economia', disponivel: false },
        { texto: 'Comandos de +18', disponivel: false },
      ],
      cta: 'Assinar Hobby',
      link: "https://api.whatsapp.com/send?phone=5589981385908&text=Ol%C3%A1,%20gostaria%20do%20plano%20Hobby",
      disponivel: true
    },
    {
      nome: 'Standard',
      preco: 'R$ 12,90/mês',
      descricao: 'Para quem precisa de mais funcionalidades.',
      beneficios: [
        { texto: 'Limite de 90 comandos', disponivel: true },
        { texto: 'Comandos básicos e vip', disponivel: true },
        { texto: 'Comandos de economia', disponivel: true },
        { texto: 'Comandos de +18', disponivel: false },
      ],
      cta: 'Assinar Standard',
      link: "https://api.whatsapp.com/send?phone=5589981385908&text=Ol%C3%A1.%20gostaria%20do%20plano%20Standard",
      disponivel: true
    },
    {
      nome: 'Advanced',
      preco: 'R$ 17,90/mês',
      descricao: 'Para quem quer o máximo de benefícios.',
      beneficios: [
        { texto: 'Limite de 120 comandos', disponivel: true },
        { texto: 'Comandos básicos e vip', disponivel: true },
        { texto: 'Comandos de economia', disponivel: true },
        { texto: 'Comandos de +18', disponivel: true },
      ],
      link: "https://api.whatsapp.com/send?phone=5589981385908&text=Ol%C3%A1.%20gostaria%20do%20plano%20Advanced",
      cta: 'Assinar Advanced',
      disponivel: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white text-center mb-10">Escolha o Plano Ideal para seu Grupo</h1>
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

                <Link to="/planospv" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200">
                  <Command className="mr-2 w-5 h-5" />
                  Ver Plano Privados
                </Link>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ComprarPlanos;