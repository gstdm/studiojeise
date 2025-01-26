import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermosGp = () => {
  const termos = [
    {
      titulo: '1. Uso do Plano',
      descricao: 'O bot é alugado para uso no grupo, com uso permitido apenas dentro do grupo contratado.',
    },
    {
      titulo: '2. Comprometimento com o Grupo',
      descricao: 'O uso do bot é restrito ao grupo contratado. O uso privado não é permitido.',
    },
    {
      titulo: '3. Responsabilidade pelo Uso',
      descricao: 'O contratante é responsável pelo uso correto do bot e por garantir que o mesmo não seja abusado.',
    },
    {
      titulo: '4. Limite de Comandos',
      descricao: 'Cada plano possui um limite de comandos mensais, sendo necessário renovar para aumentar a quantidade.',
    },
    {
      titulo: '5. Benefícios Exclusivos',
      descricao: 'Cada plano oferece benefícios exclusivos, como comandos avançados, econômicos e +18, conforme a descrição do plano.',
    },
    {
      titulo: '6. Moderação de Comandos',
      descricao: 'O bot permite moderação de comandos, ajustando limites e tipos de comandos de acordo com o plano contratado.',
    },
    {
      titulo: '7. Atualizações e Manutenção',
      descricao: 'O bot poderá passar por atualizações ou manutenções periódicas, que podem afetar a disponibilidade temporariamente.',
    },
    {
      titulo: '8. Cancelamento e Reembolso',
      descricao: 'É possível solicitar o cancelamento e reembolso, desde que o uso do bot seja inferior a 7 dias.',
    },
    {
      titulo: '9. Prolongamento de Aluguel',
      descricao: 'Em caso de erro de comando ou offline, o aluguel será prolongado gratuitamente ou reembolsado proporcionalmente.',
    },
    {
      titulo: '10. Proibição de Abuso',
      descricao: 'Não é permitido abusar das funcionalidades do bot ou utilizá-lo de forma que prejudique o desempenho do grupo.',
    },
    {
      titulo: '11. Alterações nos Termos',
      descricao: 'Esses termos podem ser alterados a qualquer momento, e as alterações serão notificadas aos usuários.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white text-center mb-10">Termos de Uso Gerais</h1>

          {/* Imagem geral no início */}
          <div className="text-center mb-10">
            <img
              src="https://i.ibb.co/58kM5zD/Remove-bg-ai-1737834141576.png"
              alt="Termos de Uso"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-12">
            {termos.map((termo, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">{termo.titulo}</h2>
                <p className="text-gray-400">{termo.descricao}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/planos"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200"
            >
              Voltar para Planos
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermosGp;
