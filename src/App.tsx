import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Dallas Bot: Moderação, Figurinhas e Diversão
              </h1>
              <p className="text-lg text-gray-400">
                Conheça o Dallas Bot, o assistente completo para WhatsApp que transforma grupos em ambientes organizados, divertidos e interativos. Descubra todas as funções e facilidades que o bot oferece!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Funções */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Conheça um pouco do que eu posso fazer por você
          </h2>

          {/* Figurinhas */}
          <div className="grid grid-cols-1 items-start gap-8 mb-12">
            <img
              src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
              alt="Figurinhas"
              className="w-1/2 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white text-center">
              Criação de Figurinhas Personalizadas
            </h3>
            <p className="text-gray-400 text-center">
              Transforme imagens e vídeos em figurinhas únicas. Com comandos rápidos e simples, o Dallas Bot cria figurinhas estáticas e animadas para tornar suas conversas mais expressivas e divertidas.
            </p>
          </div>

          {/* Downloads */}
          <div className="grid grid-cols-1 items-start gap-8 mb-12">
            <img
              src="https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png"
              alt="Downloads"
              className="w-1/2 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white text-center">
              Baixe Conteúdos com Facilidade
            </h3>
            <p className="text-gray-400 text-center">
              Baixe vídeos, músicas e imagens diretamente de plataformas como YouTube e TikTok, ou até mesmo do WhatsApp. Conteúdos rápidos e de qualidade, sem complicações, diretamente no seu grupo!
            </p>
          </div>

          {/* Moderação */}
          <div className="grid grid-cols-1 items-start gap-8 mb-12">
            <img
              src="https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png"
              alt="Moderação"
              className="w-1/2 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white text-center">
              Moderação Avançada de Grupos
            </h3>
            <p className="text-gray-400 text-center">
              Modere grupos com facilidade! O Dallas Bot gerencia links, bane usuários, apaga mensagens indesejadas e organiza o ambiente do grupo. Economize tempo e deixe a moderação com o bot!
            </p>
          </div>

          {/* Interação */}
          <div className="grid grid-cols-1 items-start gap-8 mb-12">
            <img
              src="https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png"
              alt="Interação"
              className="w-1/2 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white text-center">
              Momentos de Interação e Diversão
            </h3>
            <p className="text-gray-400 text-center">
              Torne o grupo mais interativo com quizzes, enquetes e brincadeiras. O Dallas Bot promove interação e engajamento, transformando conversas em momentos únicos e dinâmicos!
            </p>
          </div>

          {/* Comandos Adultos */}
          <div className="grid grid-cols-1 items-start gap-8 mb-12">
            <img
              src="https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png"
              alt="Comandos Adultos"
              className="w-1/2 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white text-center">
              Comandos Exclusivos 🔞
            </h3>
            <p className="text-gray-400 text-center">
              Para grupos adultos, o Dallas Bot traz comandos 🔞 exclusivos e personalizáveis. Controle e configure o uso conforme a necessidade do grupo, garantindo um ambiente dinâmico e seguro.
            </p>
          </div>

          {/* Finalização */}
          <h3 className="text-3xl font-bold text-white text-center mt-12">
            E muito mais!
          </h3>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
