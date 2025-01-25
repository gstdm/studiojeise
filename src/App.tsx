import React from 'react';
import { MessageCircle, Command, ChevronRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400">
                  <Bot className="w-4 h-4 mr-2" />
                  Assistente WhatsApp Bot
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Bot de Figurinhas e Muito Mais para o WhatsApp
                </h1>
                <p className="text-lg text-gray-400">
                  Transforme sua experiência no WhatsApp com o Dallas Bot, um assistente completo que traz funcionalidades como criação de figurinhas, edição de imagens, download de mídias, moderação de grupos, interação divertida e até mesmo comandos adultos. Tudo isso sem a necessidade de baixar nenhum app adicional, funcionando diretamente no seu grupo do WhatsApp. Simplifique tarefas, maximize a diversão e tenha o controle total com um bot que combina utilidade e entretenimento em um único lugar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/planos"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/30"
                >
                  Começar Agora
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/comandos"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200"
                >
                  <Command className="mr-2 w-5 h-5" />
                  Ver Comandos
                </Link>
                <Link
                  to="https://chat.whatsapp.com/BCRnpoFYsM81WwGHh3lkyA"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-500/30"
                >
                  Entrar no grupo
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span className="ml-2 text-gray-400">Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nova Seção */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Descubra todas as funcionalidades do Dallas Bot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Figurinhas */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
                alt="Figurinhas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">Criação de Figurinhas</h3>
                <p className="text-gray-400">
                  Transforme imagens e vídeos em figurinhas incríveis com comandos rápidos e simples. Sem ter trabalho de procurar imagens para criar suas figurinhas, o Dallas consegue buscar figurinhas para você apenas por uma palavra. Você pode até mesmo criar figurinhas animadas de seus vídeos favoritos! Torne as conversas nos grupos mais divertidas e expressivas com figurinhas personalizadas para qualquer ocasião.
                </p>
              </div>
            </div>

            {/* Downloads */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
                alt="Downloads"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">Downloads de Mídias</h3>
                <p className="text-gray-400">
                  Precisa baixar vídeos, músicas ou imagens diretamente do WhatsApp? O Dallas Bot facilita isso para você com comandos específicos que tornam o processo rápido e seguro. Baixe conteúdo de plataformas como YouTube, TikTok e Instagram com apenas um comando, e receba os arquivos diretamente no seu grupo ou no chat privado. Com suporte para vários formatos, o Dallas Bot é sua solução para todas as necessidades de download.
                </p>
              </div>
            </div>

            {/* Moderação */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
                alt="Moderação"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">Moderação dos Grupos</h3>
                <p className="text-gray-400">
                  Moderar grupos nunca foi tão fácil! O Dallas Bot pode banir automaticamente usuários que desrespeitam as regras, apagar mensagens indesejadas, bloquear links suspeitos e muito mais. Você também pode configurar horários de abertura e fechamento do grupo, criando um ambiente mais organizado. Simplifique a administração do seu grupo e deixe o Dallas Bot lidar com as tarefas chatas enquanto você aproveita o que importa.
                </p>
              </div>
            </div>

            {/* Interação */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
                alt="Interação"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">Interação e Diversão</h3>
                <p className="text-gray-400">
                  Garanta interação e diversão no seu grupo com comandos interativos, brincadeiras, moedas fictícias. Crie enquetes, faça desafios e torne as conversas mais dinâmicas. O Dallas Bot transforma qualquer grupo em uma verdadeira comunidade engajada, promovendo momentos inesquecíveis para todos os membros. Você também pode solicitar que a inteligência artificial do dallas conte piadas, curiosidades e muuiiitoo maisss.
                </p>
              </div>
            </div>

            {/* Comandos Adultos */}
            <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://i.ibb.co/Jv7tBPD/Remove-bg-ai-1737810716652.png"
                alt="Comandos Adultos"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">Comandos 🔞</h3>
                <p className="text-gray-400">
                  O Dallas Bot também oferece comandos exclusivos para grupos adultos, incluindo funcionalidades específicas para diversão mais madura. Esses comandos podem ser ativados ou desativados de acordo com as preferências do administrador, garantindo que o conteúdo seja adequado para o público do grupo. Personalize a experiência dos membros e explore funcionalidades criativas que tornam o Dallas Bot ainda mais versátil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
