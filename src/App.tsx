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
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400">
                  <Bot className="w-4 h-4 mr-2" />
                  Assistente WhatsApp Bot
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Bot de Figurinhas para o WhatsApp
                </h1>
                <p className="text-lg text-gray-400">
                Faça figurinhas, edite imagens, baixe arquivos e muito mais, sem baixar nenhum app!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/planos" className=" inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/30">
                  Começar Agora
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/comandos" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-200">
                  <Command className="mr-2 w-5 h-5" />
                  Ver Comandos
                </Link>

                <Link to="https://chat.whatsapp.com/BCRnpoFYsM81WwGHh3lkyA" className=" inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-grenn-700 transition-all duration-200 shadow-lg shadow-green-500/30">
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

      <Footer />
    </div>
  );
}

export default App;
