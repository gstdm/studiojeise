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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dallas Bot: Moderação, Figurinhas e Diversão
            </h1>
            <p className="text-lg text-gray-400 mt-4">
              Conheça o Dallas Bot, o assistente completo para WhatsApp que transforma grupos em ambientes organizados, divertidos e interativos. Descubra todas as funções e facilidades que o bot oferece!
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/#/planos"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/30"
              >
                Preços do Bot
              </a>
              <a
                href="/#/comandos"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200"
              >
                Ver Comandos
              </a>
              <a
                href="https://chat.whatsapp.com/BCRnpoFYsM81WwGHh3lkyA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-500/30"
              >
                Testar Gratuitamente
              </a>
            </div>

            {/* Grupo VIP Button */}
            <div className="mt-4">
              <a
                href="/#/gpvip" // Atualizado para o redirecionamento para /gpvio
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-all duration-200 shadow-lg shadow-purple-500/30"
              >
                Grupo VIP
              </a>
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
          <div className="grid grid-cols-1 items-start gap-8 mb-12 text-center">
            <img
              src="https://i.ibb.co/q979NRQ/Remove-bg-ai-1737810940219.png"
              alt="Figurinhas"
              className="w-1/3 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white">
              Criação de Figurinhas Personalizadas
            </h3>
            <p className="text-gray-400">
              Transforme imagens e vídeos em figurinhas únicas. Com comandos rápidos e simples, o Dallas Bot cria figurinhas estáticas e animadas para tornar suas conversas mais expressivas e divertidas.
            </p>
          </div>

          {/* Downloads */}
          <div className="grid grid-cols-1 items-start gap-8 mb-12 text-center">
            <img
              src="https://i.ibb.co/QrCR4sR/IMG-20250126-123814-removebg-preview.png"
              alt="Downloads"
              className="w-1/3 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white">
              Baixe Conteúdos com Facilidade
            </h3>
            <p className="text-gray-400">
              Baixe vídeos, músicas e imagens diretamente de plataformas como YouTube e TikTok, ou até mesmo do WhatsApp. Conteúdos rápidos e de qualidade, sem complicações, diretamente no seu grupo!
            </p>
          </div>

          {/* Moderação */}
          <div className="grid grid-cols-1 items-start gap-8 mb-12 text-center">
            <img
              src="https://i.ibb.co/Htz4FQ5/Remove-bg-ai-1737810716652.png"
              alt="Moderação"
              className="w-1/3 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white">
              Moderação Avançada de Grupos
            </h3>
            <p className="text-gray-400">
              Modere grupos com facilidade! O Dallas Bot gerencia links, bane usuários, apaga mensagens indesejadas e organiza o ambiente do grupo. Economize tempo e deixe a moderação com o bot!
            </p>
          </div>

          {/* Interação */}
          <div className="grid grid-cols-1 items-start gap-8 mb-12 text-center">
            <img
              src="https://i.ibb.co/MBmPRYg/Remove-bg-ai-1737834145392.png"
              alt="Interação"
              className="w-1/3 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white">
              Momentos de Interação e Diversão
            </h3>
            <p className="text-gray-400">
              Torne o grupo mais interativo com quizzes, enquetes e brincadeiras. O Dallas Bot promove interação e engajamento, transformando conversas em momentos únicos e dinâmicos!
            </p>
          </div>

          {/* Comandos Adultos */}
          <div className="grid grid-cols-1 items-start gap-8 mb-12 text-center">
            <img
              src="https://i.ibb.co/58kM5zD/Remove-bg-ai-1737834141576.png"
              alt="Comandos Adultos"
              className="w-1/3 mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white">
              Comandos Exclusivos 🔞
            </h3>
            <p className="text-gray-400">
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
              
