import React from 'react';
import { Link } from 'react-router-dom';
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
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Dallas Bot: Moderação, Figurinhas e Diversão
                </h1>
                <p className="text-lg text-gray-400">
                  Explore o Dallas Bot, um assistente completo para WhatsApp que transforma grupos em espaços organizados e divertidos. Crie figurinhas, baixe mídias, gerencie grupos e aproveite comandos únicos. Tudo isso, ao seu alcance com facilidade!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/planos"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/30"
                >
                  Começar Agora
                </Link>
                <Link
                  to="/comandos"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200"
                >
                  Ver Comandos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funções */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Descubra todas as funcionalidades do Dallas Bot
          </h2>

          {/* Figurinhas */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
            <img
              src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
              alt="Figurinhas"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-gray-400">
              Transforme imagens e vídeos em figurinhas personalizadas com facilidade. Crie conteúdos únicos para deixar suas conversas mais expressivas. Com Dallas Bot, figurinhas animadas e personalizadas estão a um comando de distância!
            </p>
          </div>

          {/* Downloads */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
            <p className="text-gray-400">
              Baixe vídeos, músicas e imagens diretamente do WhatsApp ou de plataformas como YouTube e TikTok. Com comandos simples, o Dallas Bot entrega conteúdos rápidos e de qualidade sem complicações!
            </p>
            <img
              src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
              alt="Downloads"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Moderação */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
            <img
              src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
              alt="Moderação"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-gray-400">
              Modere grupos com facilidade! O Dallas Bot bloqueia links, bane usuários e apaga mensagens indesejadas. Simplifique a administração e aproveite mais momentos com os membros do grupo.
            </p>
          </div>

          {/* Interação */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
            <p className="text-gray-400">
              Aumente a interação no grupo com quizzes, brincadeiras e enquetes. O Dallas Bot transforma conversas em momentos únicos e dinâmicos, promovendo diversão e engajamento para todos!
            </p>
            <img
              src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
              alt="Interação"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Comandos Adultos */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
            <img
              src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
              alt="Comandos Adultos"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-gray-400">
              Explore funcionalidades exclusivas com comandos 🔞. Controle o uso e torne o ambiente mais dinâmico para grupos adultos. Configure de forma segura e personalizada com o Dallas Bot.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
