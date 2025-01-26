import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermosGp = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white text-center mb-10">Termos de Uso e Aluguel</h1>

          {/* Imagem geral no início */}
          <div className="text-center mb-10">
            <img
              src="https://i.ibb.co/7Jj5Y3V/Remove-bg-ai-1737902058870.png"
              alt="Termos de Uso"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Lista de termos */}
          <div className="space-y-6 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">1. Aluguel exclusivo para grupos:</h3>
              <p>O bot de figurinhas é alugado para grupos no WhatsApp. Embora seja permitido utilizá-lo em mensagens privadas (PV), o uso será restrito ao grupo onde a contratação foi realizada, sendo vedada sua utilização em outros grupos sem nova contratação.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">2. Remoção do bot:</h3>
              <p>Caso o bot seja removido acidentalmente ou deliberadamente por qualquer administrador do grupo, o bot não será re-adicionado ao grupo. A remoção do bot acarretará a perda total do valor pago, sem qualquer possibilidade de devolução.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">3. Aluguel não transferível:</h3>
              <p>O aluguel do bot é exclusivamente vinculado ao grupo onde foi contratado. O bot não pode ser transferido de um grupo para outro durante o período de aluguel, independentemente da solicitação dos administradores.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">4. Conteúdos ilegais:</h3>
              <p>O bot é restrito ao uso de conteúdo que esteja em conformidade com as leis brasileiras e com os princípios constitucionais. O uso do bot para a promoção de conteúdos ilegais, discriminatórios ou que violem os direitos humanos resultará no banimento permanente do bot, com a remoção imediata do grupo e sem direito a devolução do valor pago.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">5. Duração do aluguel:</h3>
              <p>O bot permanecerá no grupo durante o período de aluguel contratado. O tempo de aluguel é fixo e não será prorrogado nem transferido para outro grupo após o término do contrato.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">6. Responsabilidade sobre o uso do bot:</h3>
              <p>O contratante é integralmente responsável pelo uso do bot no grupo, incluindo a moderação das interações e a observância das leis e regulamentos vigentes. O uso do bot para fins prejudiciais ao bom andamento do grupo poderá resultar em sua remoção do grupo sem devolução do valor pago.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">7. Moderação do uso:</h3>
              <p>A moderação do uso do bot é de total responsabilidade dos administradores do grupo. O bot deve ser utilizado de maneira ética e responsável, evitando abusos que possam comprometer a qualidade da interação no grupo.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">8. Concordância automática:</h3>
              <p>Ao contratar o aluguel do bot, o contratante automaticamente concorda com todos os termos e condições descritos nesta página. A contratação implica na aceitação irrestrita dos termos aqui estipulados.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">9. Alterações nos termos:</h3>
              <p>O presente contrato poderá ser alterado a qualquer momento, sendo que as alterações entrarão em vigor após a publicação da versão atualizada nesta página. A continuidade do uso do bot após tais alterações implicará na aceitação das novas condições.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">10. Cancelamento:</h3>
              <p>O cancelamento do aluguel poderá ser realizado pelo contratante antes do início do período contratado, sendo passível de reembolso total. Após o início do contrato, o valor pago não será reembolsado, independente do motivo da desistência.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">11. Erros de comando e bot offline:</h3>
              <p>Em caso de falhas técnicas ou erros de comando, bem como se o bot ficar offline por qualquer motivo, o contratante tem direito ao reembolso proporcional do valor pago. O reembolso será calculado com base no tempo de uso do bot até o momento da solicitação. Caso o contratante prefira, pode optar por um prolongamento do aluguel de forma gratuita, compensando o tempo em que o bot esteve offline ou com falhas.</p>
            </div>
          </div>

          {/* Botões */}
          <div className="text-center mt-12 space-x-4">
            <Link
              to="/planos"
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

export default TermosGp;
