import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const TermosGp = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Termos de Aluguel do Bot de Figurinhas para Grupos
            </h1>
            <p className="text-lg text-gray-400 mt-4">
              Antes de alugar o nosso bot de figurinhas para o seu grupo, leia atentamente os seguintes termos e condições.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <img
                src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
                alt="Figurinha"
                className="w-1/4 mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Termos */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Termos e Condições
          </h2>

          <ol className="list-decimal list-inside text-gray-400 space-y-4">
            <li><strong>1. Aluguel exclusivo para grupos:</strong> O bot de figurinhas é alugado para grupos no WhatsApp. Embora seja permitido utilizá-lo em mensagens privadas (PV), o uso será restrito ao grupo onde a contratação foi realizada, sendo vedada sua utilização em outros grupos sem nova contratação.</li>
            <li><strong>2. Remoção do bot:</strong> Caso o bot seja removido acidentalmente ou deliberadamente por qualquer administrador do grupo, o bot não será re-adicionado ao grupo. A remoção do bot acarretará a perda total do valor pago, sem qualquer possibilidade de devolução.</li>
            <li><strong>3. Aluguel não transferível:</strong> O aluguel do bot é exclusivamente vinculado ao grupo onde foi contratado. O bot não pode ser transferido de um grupo para outro durante o período de aluguel, independentemente da solicitação dos administradores.</li>
            <li><strong>4. Conteúdos ilegais:</strong> O bot é restrito ao uso de conteúdo que esteja em conformidade com as leis brasileiras e com os princípios constitucionais. O uso do bot para a promoção de conteúdos ilegais, discriminatórios ou que violem os direitos humanos resultará no banimento permanente do bot, com a remoção imediata do grupo e sem direito a devolução do valor pago.</li>
            <li><strong>5. Duração do aluguel:</strong> O bot permanecerá no grupo durante o período de aluguel contratado. O tempo de aluguel é fixo e não será prorrogado nem transferido para outro grupo após o término do contrato.</li>
            <li><strong>6. Responsabilidade sobre o uso do bot:</strong> O contratante é integralmente responsável pelo uso do bot no grupo, incluindo a moderação das interações e a observância das leis e regulamentos vigentes. O uso do bot para fins prejudiciais ao bom andamento do grupo poderá resultar em sua remoção do grupo sem devolução do valor pago.</li>
            <li><strong>7. Moderação do uso:</strong> A moderação do uso do bot é de total responsabilidade dos administradores do grupo. O bot deve ser utilizado de maneira ética e responsável, evitando abusos que possam comprometer a qualidade da interação no grupo.</li>
            <li><strong>8. Concordância automática:</strong> Ao contratar o aluguel do bot, o contratante automaticamente concorda com todos os termos e condições descritos nesta página. A contratação implica na aceitação irrestrita dos termos aqui estipulados.</li>
            <li><strong>9. Alterações nos termos:</strong> O presente contrato poderá ser alterado a qualquer momento, sendo que as alterações entrarão em vigor após a publicação da versão atualizada nesta página. A continuidade do uso do bot após tais alterações implicará na aceitação das novas condições.</li>
            <li><strong>10. Cancelamento:</strong> O cancelamento do aluguel poderá ser realizado pelo contratante antes do início do período contratado, sendo passível de reembolso total. Após o início do contrato, o valor pago não será reembolsado, independente do motivo da desistência.</li>
            <li><strong>11. Erros de comando e bot offline:</strong> Em caso de falhas técnicas ou erros de comando, bem como se o bot ficar offline por qualquer motivo, o contratante tem direito ao reembolso proporcional do valor pago. O reembolso será calculado com base no tempo de uso do bot até o momento da solicitação. Caso o contratante prefira, pode optar por um prolongamento do aluguel de forma gratuita, compensando o tempo em que o bot esteve offline ou com falhas.</li>
          </ol>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Ao contratar, automaticamente você concorda com os termos e condições acima.
            </p>
            <a
              href="https://wa.me/5589981385908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-500/30 mt-6"
            >
              Adquirir
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermosGp;
